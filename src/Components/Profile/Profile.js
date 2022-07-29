import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
// import MobileProfileSide from '../MobileProfileSide';
import ImageUploading from 'react-images-uploading';
import EditProfile from './EditProfile';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import './profile.css'
import useCourses from '../Shared/useCourses';
import { Link } from 'react-router-dom';



const Profile = () => {


    const [courses, setCourses] = useCourses()


    const [user] = useAuthState(auth);


    const [coverPhoto, setCoverPhoto] = useState([]);

    const [connected, setConnected] = useState(false)

    const handleConnected = () => {

        setConnected(true)
    }


    const onChangeCover = (imageList) => {
        setCoverPhoto(imageList)

        console.log(imageList);
    }
    const [profilePhoto, setProfilePhoto] = useState([]);


    const onChangeProfile = (imageList) => {
        setProfilePhoto(imageList)

        console.log(imageList);
    }



    const [more, setMore] = useState(false)
    const [more2, setMore2] = useState(false)
    const [less, setLess] = useState(true)
    const [less2, setLess2] = useState(true)

    const seeMore = () => {
        setMore(true)

    }
    const seeMore2 = () => {
        setMore2(true)

    }

    const seeLess = () => {
        setMore(false)


    }
    const seeLess2 = () => {
        setMore2(false)


    }


    const [open, setOpen] = useState(false);


    const [updates, setUpdates] = useState()

    const updateHandler = (data) => {

        console.log(data);
        setUpdates(data)

    }




    return (
        <div className=' bg-[#171B26] pt-20 '>



            <div className='md:grid md:grid-cols-12  md:w-[80%] md:mx-auto md:gap-6'>



                <div className='col-span-9 drop-shadow-2xl mb-10 border-slate-600 rounded-lg relative'>


                    <div style={{ zIndex: '0', backgroundColor: 'black', backgroundRepeat: 'no-repeat', backgroundAttachment: "", backgroundImage: "url('https://img.freepik.com/free-photo/abstract-luxury-soft-red-background-christmas-valentines-layout-design-web-template-business-report-with-smooth-circle-gradient-color_1258-54733.jpg?t=st=1658818870~exp=1658819470~hmac=2d3f32995c72fd5b75c221a544c6e172108886b77aea4550ae4788e2a14c7022&w=1060')" }} class='bg-cover border-slate-600 border border-b-0 md:w-[100%] md:mx-auto relative shadow overflow-hidden sm:rounded-t-lg' >

                        <div class="px-4 py-5 sm:px-6 h-[250px] md:h-[300px]" >

                        </div>
                    </div>

                    {
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



                                    <p onClick={onImageUpload} className='absolute top-[2%] right-[1%] md:top-[0%] md:right-[1%] btn btn-xs my-3'><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg></p>


                                    {
                                        imageList?.map((image, index) => (

                                            <div style={{ zIndex: '1', backgroundColor: 'black', backgroundRepeat: 'no-repeat', backgroundAttachment: "", backgroundImage: `url(${image['data_url']})` }}
                                                class='bg-cover border-slate-600 border border-b-0 md:w-[100%] md:mx-auto absolute top-[0%] right-[0%]  shadow overflow-hidden sm:rounded-t-lg' >

                                                <div class="px-4 py-5 sm:px-6 h-[250px] md:h-[300px]" >

                                                    <p onClick={onImageUpload} className='absolute top-[2%] right-[1%] md:top-[0%] md:right-[1%]  btn btn-xs my-3 '><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg></p>

                                                </div>
                                            </div>))
                                    }

                                </div>
                            )}
                        </ImageUploading>

                    }

                    <div style={{ zIndex: '20' }} className='relative bg-slate-800 pt-20 border-slate-600 border rounded-b-lg border-t-0 mx-auto '>

                        <img style={{ zIndex: '2' }} class="md:w-36 w-32 border border-[white] border-4 absolute bottom-[97%] right-[61%]  md:bottom-[95%] md:right-[81%]  rounded-full  "
                            src="https://i.stack.imgur.com/frlIf.png" alt='' />


                        {

                            <ImageUploading
                                value={profilePhoto}
                                onChange={onChangeProfile}
                                dataURLKey="data_url"
                            >
                                {({
                                    imageList,
                                    onImageUpload
                                }) => (

                                    <div className="upload__image-wrapper">



                                        <p onClick={onImageUpload} style={{ zIndex: '3' }} className='absolute absolute bottom-[97%] right-[61%]  md:bottom-[95%] md:right-[81%] btn btn-xs rounded-full w-8 h-8 my-3 '><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                        </svg></p>


                                        {
                                            imageList?.map((image, index) => (

                                                <img style={{ zIndex: '2' }} class="md:w-36 h-36 w-32 border border-[white] border-4 absolute bottom-[97%] right-[61%]  md:bottom-[95%] md:right-[81%]  rounded-full  " src={image['data_url']} alt="" />

                                            ))
                                        }

                                    </div>
                                )}
                            </ImageUploading>
                        }

                        <button onClick={() => setOpen(true)} className='modal-button absolute bottom-[94.5%] right-[2%]  md:bottom-[92%] md:right-[1%] btn btn-xs my-3 '><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                        </svg> <span className='mx-1'>Edit Profile </span>
                        </button>

                        <Modal classNames={{
                            overlay: 'customOverlay',
                            modal: 'customModal',
                        }} open={open} onClose={() => setOpen(false)}>
                            <EditProfile></EditProfile>
                        </Modal>

                        <div className='w-[98%]  mt-[-8%] md:mt-[-3%] overflow-x-auto'>
                            <p class=" ml-4 md:ml-5 md:mt-4 word-break md:text-2xl text-[white] text-lg leading-6 font-medium  rounded ">{user?.displayName}</p>

                        </div>

                        <div class="shadow  overflow-hidden sm:rounded-b-lg ">

                            <div class=" border-gray-200  ">
                                <dl className='md:pt'>

                                    <div class="bg-slate-800  py-4 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dd class="  text-sm text-gray-300 sm:mt-0 sm:col-span-2">
                                            Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
                                        </dd>
                                    </div>
                                    <div className='px-4'>
                                        <p className='text-white my-2'>Badges :</p>
                                        <div className='flex '>
                                            <img className='w-14' src="https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png" alt="" />
                                            <img className='w-14' src="https://github.githubassets.com/images/modules/profile/achievements/yolo-default.png" alt="" />
                                            <img className='w-14' src="https://raw.githubusercontent.com/Schweinepriester/github-profile-achievements/main/images/pair-extraordinaire-default.png" alt="" />
                                            <img className='w-14' src="https://raw.githubusercontent.com/Schweinepriester/github-profile-achievements/main/images/quickdraw-default.png" alt="" />

                                        </div>
                                        <dd class="my-2 text-sm text-gray-300 "><a className='text-indigo-600 hover:text-indigo-500 font-semibold t mx-2 ' href="">Click to </a>know more about badges. </dd>

                                    </div>

                                    <div class="bg-[#171B26] px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt class="text-sm font-medium text-gray-200">Profile status</dt>
                                        <dd class="mt-1 text-sm text-gray-300 sm:mt-0 sm:col-span-2">Instructor / Student / Admin</dd>
                                    </div>

                                    <div class="bg-slate-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt class="text-sm font-medium text-gray-200">Email address</dt>
                                        <dd class="mt-1 text-sm text-gray-300 sm:mt-0 sm:col-span-2">{user?.email}</dd>
                                    </div>
                                    <div class="bg-[#171B26] px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt class="text-sm font-medium text-gray-200">Enrolled Course</dt>
                                        <dd class="mt-1 text-sm text-gray-200 sm:mt-0 sm:col-span-2"><a href="/courses"><button className='btn btn-xs'>My Courses</button></a></dd>
                                    </div>
                                    <div class="bg-slate-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt class="text-sm font-medium text-gray-200">Problem-solving History</dt>
                                        <dd class="mt-1 text-sm text-gray-300 sm:mt-0 sm:col-span-2"><a className='text-indigo-600 hover:text-indigo-500 font-semibold text-lg mx-2 ' href="">Click to </a> See the history </dd>
                                    </div>
                                    <div class="bg-[#171B26] px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt class="text-sm font-medium text-gray-200">Achievements / Certifications</dt>
                                        <dd class="mt-1 text-sm text-gray-300 sm:mt-0 sm:col-span-2"><a className='text-indigo-600 hover:text-indigo-500 font-semibold text-lg mx-2 ' href="">Upload </a> Documents </dd>
                                    </div>
                                    <div class="bg-slate-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt class="text-sm font-medium text-gray-200">Attachments</dt>
                                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                            <ul role="list" class="border border-gray-200 rounded-md divide-y divide-gray-200">
                                                <li class="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                                    <div class="w-0 flex-1 flex items-center">
                                                        <svg class="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                            <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd" />
                                                        </svg>
                                                        <span class="ml-2 flex-1 w-0 truncate text-white"> resume_back_end_developer.pdf </span>
                                                    </div>
                                                    <div class="ml-4 flex-shrink-0">
                                                        <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> Download </a>
                                                    </div>
                                                </li>
                                                <li class="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                                    <div class="w-0 flex-1 flex items-center">
                                                        <svg class="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                            <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd" />
                                                        </svg>
                                                        <span class="ml-2 flex-1 w-0 truncate text-white"> coverletter_back_end_developer.pdf </span>
                                                    </div>
                                                    <div class="ml-4 flex-shrink-0">
                                                        <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> Download </a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </dd>
                                    </div>
                                </dl>
                            </div>

                        </div>

                    </div>


                </div>

                <div className='col-span-3  '>

                    <div className='card border-slate-600 border bg-slate-800 p-4 divide divide-y md:mt-0 mt-4 space-y-4'>
                        <p className='text-white font-semibold'>Today's Contest For You </p>

                        <div className="collapse text-white collapse-arrow border-b-2">
                            <input type="checkbox" />
                            <div className="collapse-title text-normal font-semibold  ">
                                Cotest Code: DSA-101
                            </div>
                            <div className="collapse-content">
                                <p>
                                    Amazon Last Mile Coding Challenge 2022. <br />

                                    <Link className='text-indigo-600 hover:text-indigo-500 font-semibold text-lg ' to="/contests">Click here  </Link> to participate the contest.
                                </p>
                            </div>
                        </div>


                    </div>
                    <div className='card border-slate-600 border bg-slate-800 p-4 divide divide-y my-4 space-y-4'>
                        <p className='text-white font-semibold'>Today's Project For You </p>

                        <div className="collapse text-white collapse-arrow border-b-2">
                            <input type="checkbox" />
                            <div className="collapse-title font-semibold  ">

                                Build A mini-SAP with C++/Java/Python
                            </div>
                            <div className="collapse-content">
                                <p>
                                    <a className='text-indigo-600 hover:text-indigo-500 font-semibold text-lg mx-2 ' href="">Click here </a> to see project Detail.


                                </p>
                            </div>
                        </div>

                    </div>


                    <div className='card border-slate-600 border bg-slate-800 text-white p-4'>
                        <h1 className='mb-3 font-bold'>Sharpen Your Skill-sets</h1>
                        <div className='divide divide-y'>
                            {
                                more ? courses.map(course => <div className='flex py-3'>
                                    <img className='w-24 h-16 mr-3 rounded border border-slate-400' src={course?.course_img} alt="" />
                                    <a href={`/${course.id}`}><p className='font-semibold text-sm hover:text-primary'>{course.title}</p></a>
                                </div>).slice(0, 3)
                                    :
                                    courses.map(course => <div className='flex py-3'>
                                        <img className='w-24 h-16 mr-3 rounded border border-slate-400' src={course?.course_img} alt="" />
                                        <a href={`/${course.id}`}> <p className='font-semibold text-sm hover:text-primary'>{course.title}</p></a>
                                    </div>).slice(0, 5)
                            }



                        </div>

                        {
                            !more &&
                            <button onClick={seeMore} className='bg-slate-600 hover:bg-slate-700 cursor-pointer btn border-[black] btn-sm btn-ghost normal-case'>See less </button>

                        }
                        {more &&
                            <button onClick={seeLess} className='bg-slate-600 hover:bg-slate-700 cursor-pointer btn border-[black] btn-sm btn-ghost normal-case'>See more </button>


                        }
                    </div>

                    <div className='card text-white p-4 my-4 border-slate-600 border bg-slate-800' >
                        <h1 className='mb-3 font-bold'>Stay Connected With Experts </h1>
                        <div className='divide divide-y'>
                            {
                                more2 ? courses.map(course => <div className='p-2'>
                                    <div className='flex items-center mb-1'>
                                        <img className='w-24 h-16 mr-3 rounded border border-slate-400' src={course?.instructor_img} alt="" />
                                        <a href="/about"><p className='font-semibold text-xs hover:text-primary'>{course?.instructor}</p></a>
                                    </div>
                                    <button className='btn btn-xs bg-slate-200 border-black btn-ghost text-black hover:text-white hover:bg-primary ml-20'>Connect</button>
                                </div>).slice(0, 3)
                                    :
                                    courses.map(course => <div className='p-2'>
                                        <div className='flex items-center mb-1'>
                                            <img className='w-24 h-16 mr-3 rounded border border-slate-400' src={course?.instructor_img} alt="" />
                                            <a href="/about"><p className='font-semibold text-xs hover:text-primary'>{course?.instructor}</p></a>
                                        </div>
                                        <button className='btn btn-xs bg-slate-200 border-black btn-ghost text-black hover:text-white hover:bg-primary ml-20'>Connect</button>
                                    </div>).slice(0, 5)
                            }



                        </div>

                        {
                            !more2 &&
                            <button onClick={seeMore2} className='cursor-pointer btn border-[black] btn-sm btn-ghost bg-slate-600 hover:bg-slate-700 normal-case'>See less </button>

                        }
                        {more2 &&
                            <button onClick={seeLess2} className='cursor-pointer btn border-[black] btn-sm btn-ghost bg-slate-600 hover:bg-slate-700 normal-case'>See more </button>


                        }
                    </div>
                </div>

            </div>
        </div >
    );
};

export default Profile;