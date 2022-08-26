import React from 'react';
import { set, useForm } from 'react-hook-form';
import 'react-form-input-fields/dist/index.css'
import { useState } from 'react';
import './blog.css'
import '@papyrs/stylo';

const CreateBlog = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = async (data) => {

        console.log('dis', data);


    }
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

    const handleChange = (e) => {
        console.log(e.target.value);
        setText(e.target.value)
        // console.log('text',text.length);
        // console.log('e', e.target.value.length);
        if (text == false) {
            setOptions(true)
        }

    }
    const [showMore, setShowMore] = useState(false)

   const handleAutoHeight=(e)=> {
        e.target.style.height = 'inherit';
        e.target.style.height = e.target.scrollHeight+`px`; 
       
      }

    return (
        <div className='w-[70vw]  mx-auto relative'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className=''>
                    {/* <label for="blog" class="block text-sm font-medium "> Write Blog: </label> */}
                    <textarea onKeyDown={(e)=>{showOptions(e);handleAutoHeight(e)} }
                    
                        placeholder="Write Your Blog..."
                        setValue={text}
                        id="blog" name="blog" rows="3"
                        className="h-[50vh] shadow-sm border-none focus:outline-none pt-10  mt-1 block w-full sm:text-md p-2 overflow-hidden"
                        {...register("blog",
                            { onChange: handleChange })}>


                    </textarea>
                    <p   className={options ? ' absolute top-[1%] left-[-9%] cursor-pointer' : 'hidden'}>
                        {
                            showMore ?
                                <div className='flex space-x-8'>
                                    <svg  onClick={() => setShowMore(false)}  xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 block rounded-full p-1 border-2  border-slate-600 hover:border-[black]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    <div className='flex space-x-3'>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 block rounded-full p-1 border-2  border-slate-600 hover:border-[black]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-slate-600 hover:text-[black] block rounded-full p-1 border-2  border-slate-600 hover:border-[black]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-slate-600 hover:text-[black] block rounded-full p-1 border-2  border-slate-600 hover:border-[black]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                        </svg>
                                    </div>
                                </div>
                                :
                                <svg  onClick={() => setShowMore(true)} xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-slate-600 hover:text-[black] block rounded-full p-1 border-2  border-slate-600 hover:border-[black]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                                </svg>
                        }
                    </p>
                    <div>

                    </div>


                    <div class="px-4 py-3  text-right sm:px-6">
                        <input className='btn bg-[#050535] w-full max-w-xs text-white' type="submit" value="Save" />
                    </div>

                </div>
            </form>

        </div>
    );
};

export default CreateBlog;