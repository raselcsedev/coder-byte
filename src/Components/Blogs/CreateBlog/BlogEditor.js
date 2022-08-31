import React from 'react';
import { set, useForm } from 'react-hook-form';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import ImageUploading from 'react-images-uploading';
import toast, { Toaster } from 'react-hot-toast';
import SideBar from '../../Shared/SideBar';
import SavedBlog from '../SavedBlogs/SavedBlog';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import YourStories from '../YourStories';



const BlogEditor = () => {

  const { register, formState: { errors }, handleSubmit } = useForm();


  const [options, setOptions] = useState(true)

  const [text, setText] = useState(null)

  const showOptions = (e) => {
    if (e.keyCode == 13) {
      setOptions(true)
    }
    else {
      setOptions(false)
    }

  }


  const [showMore, setShowMore] = useState(false)

  const handleAutoHeight = (e) => {
    e.target.style.height = 'inherit';
    e.target.style.height = e.target.scrollHeight + `px`;
  }

  const [user] = useAuthState(auth);
  const email = user?.email

  const url = `http://localhost:5000/profiles/${email}`

  const fetcher = async () => {
    const data = axios.get(url)
    return (await data).data
  }

  let { data: profile, isLoading } = useQuery(["profile", email], () => fetcher())



  const [coverPhoto, setCoverPhoto] = useState([]);

  const onChangeCover = (data) => {

    setCoverPhoto(data)
    const image = data[0].file

    console.log('cover', coverPhoto);
    console.log('onchange-img', image);

  }

  const onSubmit = async (data) => {

    const image = coverPhoto[0]?.file

    console.log('img', image);

    console.log('dis', data);


    const formData = new FormData()
    formData.append("file", image)
    formData.append("upload_preset", "ch77jcb5")
    formData.append("cloud_name", "pavel-genuine")
    const url = `https://api.cloudinary.com/v1_1/pavel-genuine/image/upload`
    fetch(url,
      {
        method: "POST",
        body: formData

      })
      .then(res => res.json())
      .then(async result => {
        console.log('imgbbCover', result)
        const banner = result.url
        const sendData = { blogger: user?.displayName, banner, title: data.title, body: data.body, profilePhoto: profile?.profilePhoto }
        console.log('sendData', sendData);

        await fetch(`http://localhost:5000/blogs`,
          {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify(sendData)
          })

      })

    toast.success("Information Updated")
  }



  return (
    <div className=' relative'>
      <Toaster></Toaster>
      <div className='mx-auto  w-[100%]  grid grid-cols-12 '>

        <SideBar className=''></SideBar>

        <div className='col-span-8 pt-24 pb-10 px-5'>


          <form onSubmit={handleSubmit(onSubmit)}>

            <div className="flex justify-between mb-10 mr-28">
              <h1 className="text-[brown] font-semibold">{user?.email}</h1>
              <button type="submit" className=" btn bg-[brown] btn-xs ">
                Publish
              </button>
            </div>
            <div className=''>



              <ImageUploading
                value={coverPhoto}
                onChange={onChangeCover}
                dataURLKey="data_url"
              >
                {({
                  imageList,
                  onImageUpload
                }) => (


                  <div className="upload__image-wrapper relative">

                    <div class="mt-1 flex justify-center mb-8 items-center px-6 pt-5 pb-6 border-2 w-[90%] lg:h-[270px]  border-dashed rounded-md">
                      <div class="space-y-1 text-center">
                        <div class="flex text-sm text-gray-600">
                          <label for="file-upload" class="relative cursor-pointer rounded-md font-medium hover:text-[brown] focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                            <svg onClick={onImageUpload} class="mx-auto h-12 w-12" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                              <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg><span>Upload Blog Banner</span>
                            <input style={{ backgroundColor: ' #919cb1', border: '#6b7280' }} class="sr-only" />
                          </label>
                        </div>
                      </div>
                    </div>
                    {
                      imageList?.map((image, index) => (

                        <div style={{
                          zIndex: '1', backgroundColor: 'black', backgroundRepeat: 'no-repeat', backgroundAttachment: "",
                          backgroundImage: `url(${image?.data_url})`
                        }}
                          class='bg-cover border-slate-600 border border-b-0 lg:w-[90%] md:mx-auto absolute top-[0%] left-[0%]  shadow overflow-hidden sm:rounded-t-lg' >

                          <div class="px-4 py-5 sm:px-6 h-[250px] md:h-[280px]" >

                            <p title='Change blog banner' onClick={onImageUpload} className='absolute top-[2%] right-[1%] md:top-[0%] md:right-[1%]  btn btn-xs my-3 '><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                              <path stroke-linecap="round" stroke-linejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg></p>

                          </div>
                        </div>))
                    }

                  </div>
                )}
              </ImageUploading>

              <div>
                <textarea
                  placeholder='Title'
                  className='shadow-sm border-b-2 w-[90%] text-2xl font-blod focus:outline-none mt-20  mt-1 block w-full sm:text-md p-2'
                  name="" id="" cols="30" rows="2"
                  {...register("title")}>
                </textarea>
                <textarea onKeyDown={(e) => { showOptions(e) }}

                  placeholder="Write Your Blog..."
                  setValue={text}
                  id="blog" name="blog" rows="20"
                  className=" shadow-sm border-none focus:outline-none w-[90%] pt-12  mt-1 block w-full sm:text-md p-2 "
                  {...register("body")}>


                </textarea>
              </div>

              <p className={ 'absolute top-[49%] left-[7%] cursor-pointer' }>
                {
                  showMore ?
                    <div className='flex space-x-3'>

                      <svg onClick={() => setShowMore(false)} xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 block rounded-full p-1 border-2  border-slate-600 hover:border-[black]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>

                      <div className='flex space-x-3'>

                        <ImageUploading
                          value={coverPhoto}
                          onChange={onChangeCover}
                          dataURLKey="data_url"
                        >
                          {({
                            imageList,
                            onImageUpload
                          }) => (


                            <div className="upload__image-wrapper">

                            <span title='Update banner'>  <svg title='Update Blog Banner' onClick={onImageUpload} xmlns="http://www.w3.org/2000/svg" class="cursor-pointer h-8 w-8 text-slate-600 hover:text-[black] block rounded-full p-1 border-2  border-slate-600 hover:border-[black]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg></span>

                            </div>
                          )}
                        </ImageUploading>

                        <p title='Title' className="h-8 w-8 text-slate-600 hover:text-[black] block rounded-full border-2 font-semibold text-lg text-center border-slate-600 hover:border-[black]">
                          T</p>

                      </div>

                    </div>
                    :

                    <div className='flex space-x-8'>

                      <span title='more options'><svg onClick={() => setShowMore(true)} xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-slate-600 hover:text-[black] block rounded-full p-1 border-2  border-slate-600 hover:border-[black]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                      </svg></span>



                    </div>
                }
              </p>
              <div>

              </div>


            </div>
          </form>

        </div>

        <div className='col-span-3 '>
       <YourStories></YourStories>
        </div>
      </div>

    </div>

  );
};

export default BlogEditor;