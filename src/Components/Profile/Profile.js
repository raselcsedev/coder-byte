import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
// import MobileProfileSide from '../MobileProfileSide';
// import useCourses from '../Shared/useCourses';

const Profile = () => {

    const [user] = useAuthState(auth);

    // const [courses] = useCourses()

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




    return (
        <div className=' bg-[#171B26] pt-20 '>
            <div className='md:grid md:grid-cols-12  md:w-[80%] md:mx-auto md:gap-6'>
                <div className='col-span-9 drop-shadow-2xl mb-10 border-slate-600 rounded-lg'>
                    <div style={{ zIndex: '0', backgroundColor: 'black', backgroundRepeat: 'no-repeat', backgroundAttachment: "", backgroundImage: "url('https://img.freepik.com/free-vector/digital-coding-background-with-numbers-zero-one_1017-30363.jpg?t=st=1658756882~exp=1658757482~hmac=0aadf2c7007584e4aa167b8567bb0800e92446f78f8f70dffc5b945dd2df7fb8&w=1380')" }}
                        class=" bg-cover border-slate-600 border border-b-0 md:w-[100%] md:mx-auto relative shadow overflow-hidden sm:rounded-t-lg ">
                        <div class="px-4 py-5 sm:px-6 h-[250px] md:h-[300px]" >

                            <p className='absolute top-[2%] right-[1%] md:right-[1%] btn btn-xs my-3 border-[white]'>Change Cover</p>

                        </div>
                    </div>


                    <div style={{ zIndex: '20' }} className='relative bg-slate-800 pt-20 border-slate-600 border rounded-b-lg border-t-0 mx-auto '>

                        <img class="md:w-36 w-32 border border-[white] border-4 absolute bottom-[97%] right-[61%]  md:bottom-[95%] md:right-[81%]  rounded-full  "
                            src="https://i.stack.imgur.com/frlIf.png" alt='' />

                       <label for="my-modal-5" className='modal-button absolute bottom-[94.5%] right-[2%]  md:bottom-[92%] md:right-[1%] btn btn-xs my-3 border-[white]'>Edit profile</label>


                    <input type="checkbox" id="my-modal-5" class="modal-toggle" />
                    <div class="modal">
                        <div class="modal-box bg-slate-600 w-11/12 max-w-5xl">
                            <h3 class="font-bold text-white text-lg">Congratulations random Internet user!</h3>
                            <p class="py-4 text-white">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                            <div class="modal-action">
                                <label for="my-modal-5" class="btn">Yay!</label>
                            </div>
                        </div>
                    </div>


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
                                <a className='text-indigo-600 hover:text-indigo-500 font-semibold text-lg mx-2 ' href="">Click here  </a> to participate the contest.
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


                <div className='card bg-slate-800 p-4 border-slate-600 border'>
                    <h1 className='mb-3 text-white font-bold'>Suggested Courses For You </h1>

                    <div className='divide divide-y divide-[black]'>
                        {
                            more
                                ?
                                //  courses.map(course => 
                                //<div className='flex py-3'>
                                //     <img className='w-24 h-16 mr-3 rounded' src={course.img} alt="" />
                                //     <a href={`/${course.id}`}><p className='font-semibold text-sm hover:text-[brown]'>{course.title}</p></a>
                                // </div>).slice(0, 3)
                                //     :
                                //     courses.map(course => <div className='flex py-3'>
                                //         <img className='w-24 h-16 mr-3 rounded' src={course.img} alt="" />
                                //         <a href={`/${course.id}`}> <p className='font-semibold text-sm hover:text-[brown]'>{course.title}</p></a>
                                //     </div>).slice(0, 5)

                                <div className='bg-slate-800 divide-y divide-gray-600'>


                                    <div className=' flex py-3  '>
                                        <img className='w-24 h-16 mr-3 rounded' src='https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?t=st=1658758490~exp=1658759090~hmac=e96c4f0f9c3718d19c3ed0005a2f6cbb14caf1f57e4fbe08948510646a5f9fff&w=900' alt="" />
                                        <a href=''><p className='text-white font-semibold text-sm hover:text-slate-400'>Basic DSA Course</p></a>
                                    </div>
                                    <div className=' flex py-3 '>
                                        <img className='w-24 h-16 mr-3 rounded' src='https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?t=st=1658758490~exp=1658759090~hmac=e96c4f0f9c3718d19c3ed0005a2f6cbb14caf1f57e4fbe08948510646a5f9fff&w=900' alt="" />
                                        <a href=''><p className='text-white font-semibold text-sm hover:text-slate-400'>Basic DSA Course</p></a>
                                    </div>
                                    <div className=' flex py-3 '>
                                        <img className='w-24 h-16 mr-3 rounded' src='https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?t=st=1658758490~exp=1658759090~hmac=e96c4f0f9c3718d19c3ed0005a2f6cbb14caf1f57e4fbe08948510646a5f9fff&w=900' alt="" />
                                        <a href=''><p className='text-white font-semibold text-sm hover:text-slate-400'>Basic DSA Course</p></a>
                                    </div>

                                </div>
                                :
                                <div className='bg-slate-800 divide-y divide-gray-600 '>
                                    <div className=' flex py-3 '>
                                        <img className='w-24 h-16 mr-3 rounded' src='https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?t=st=1658758490~exp=1658759090~hmac=e96c4f0f9c3718d19c3ed0005a2f6cbb14caf1f57e4fbe08948510646a5f9fff&w=900' alt="" />
                                        <a href=''><p className='text-white font-semibold text-sm hover:text-slate-400'>Basic DSA Course</p></a>
                                    </div>
                                    <div className=' flex py-3 '>
                                        <img className='w-24 h-16 mr-3 rounded' src='https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?t=st=1658758490~exp=1658759090~hmac=e96c4f0f9c3718d19c3ed0005a2f6cbb14caf1f57e4fbe08948510646a5f9fff&w=900' alt="" />
                                        <a href=''><p className='text-white font-semibold text-sm hover:text-slate-400'>Basic DSA Course</p></a>
                                    </div>
                                    <div className=' flex py-3 '>
                                        <img className='w-24 h-16 mr-3 rounded' src='https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?t=st=1658758490~exp=1658759090~hmac=e96c4f0f9c3718d19c3ed0005a2f6cbb14caf1f57e4fbe08948510646a5f9fff&w=900' alt="" />
                                        <a href=''><p className='text-white font-semibold text-sm hover:text-slate-400'>Basic DSA Course</p></a>
                                    </div>
                                    <div className=' flex py-3 '>
                                        <img className='w-24 h-16 mr-3 rounded' src='https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?t=st=1658758490~exp=1658759090~hmac=e96c4f0f9c3718d19c3ed0005a2f6cbb14caf1f57e4fbe08948510646a5f9fff&w=900' alt="" />
                                        <a href=''><p className='text-white font-semibold text-sm hover:text-slate-400'>Basic DSA Course</p></a>
                                    </div>
                                    <div className=' flex py-3 '>
                                        <img className='w-24 h-16 mr-3 rounded' src='https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?t=st=1658758490~exp=1658759090~hmac=e96c4f0f9c3718d19c3ed0005a2f6cbb14caf1f57e4fbe08948510646a5f9fff&w=900' alt="" />
                                        <a href=''><p className='text-white font-semibold text-sm hover:text-slate-400'>Basic DSA Course</p></a>
                                    </div>

                                </div>
                        }



                    </div>

                    {
                        !more &&
                        <button onClick={seeMore} className='cursor-pointer btn border-[black] btn-sm  normal-case bg-slate-700 text-white'>See less </button>

                    }
                    {more &&
                        <button onClick={seeLess} className='cursor-pointer btn border-[black] btn-sm  normal-case bg-slate-700 text-white'>See more </button>


                    }
                </div>

                <div className='card bg-slate-800 p-4 my-4 border-slate-600 border' >
                    <h1 className='mb-3 font-bold text-white'>Stay Connected With Other Coders </h1>
                    {/* <div className='divide divide-y'>
                            {
                                more2 ?
                                
                                courses.map(course => <div className='p-2'>
                                    <div className='flex items-center mb-1'>
                                        <img className='w-24 h-16 mr-3 rounded' src={course.img2} alt="" />
                                        <a href="/about"><p className='font-semibold text-xs hover:text-[brown]'>{course.guided}</p></a>
                                    </div>
                                    <button className='btn btn-xs bg-[white] border-[brown] btn-ghost text-[brown] ml-20'>Connect</button>
                                </div>).slice(0, 3)
                                    :
                                    courses.map(course => <div className='p-2'>
                                        <div className='flex items-center mb-1'>
                                            <img className='w-24 h-16 mr-3 rounded' src={course.img2} alt="" />
                                            <a href="/about"><p className='font-semibold text-xs hover:text-[brown]'>{course.guided}</p></a>
                                        </div>
                                        <button className='btn btn-xs bg-[white] border-[brown] btn-ghost text-[brown] ml-20'>Connect</button>
                                    </div>).slice(0, 5)

                            }



                        </div> */}

                    {
                        more2 ?
                            <div className='divide-y divide-gray-600'>
                                <div className='p-2'>
                                    <div className='flex bg-slate-800 items-center mb-1'>
                                        <img className='w-16 mr-3 rounded-full' src='https://i.stack.imgur.com/frlIf.png' alt="" />
                                        <a href="/about"><p className='font-semibold text-xs text-white hover:text-slate-400'>name</p></a>
                                        <button className='btn btn-xs  border-black text-[white] bg-black ml-20'>Connect</button>

                                    </div>
                                </div>
                                <div className='p-2'>
                                    <div className='flex bg-slate-800 items-center mb-1'>
                                        <img className='w-16 mr-3 rounded-full' src='https://i.stack.imgur.com/frlIf.png' alt="" />
                                        <a href="/about"><p className='font-semibold text-xs text-white hover:text-slate-400'>name</p></a>
                                        <button className='btn btn-xs  border-black text-[white] bg-black ml-20'>Connect</button>

                                    </div>
                                </div>
                                <div className='p-2'>
                                    <div className='flex bg-slate-800 items-center mb-1'>
                                        <img className='w-16 mr-3 rounded-full' src='https://i.stack.imgur.com/frlIf.png' alt="" />
                                        <a href="/about"><p className='font-semibold text-xs text-white hover:text-slate-400'>name</p></a>
                                        <button className='btn btn-xs  border-black text-[white] bg-black ml-20'>Connect</button>

                                    </div>
                                </div>
                                <div className='p-2'>
                                    <div className='flex bg-slate-800 items-center mb-1'>
                                        <img className='w-16 mr-3 rounded-full' src='https://i.stack.imgur.com/frlIf.png' alt="" />
                                        <a href="/about"><p className='font-semibold text-xs text-white hover:text-slate-400'>name</p></a>
                                        <button className='btn btn-xs  border-black text-[white] bg-black ml-20'>Connect</button>

                                    </div>
                                </div>
                            </div>
                            :
                            <div className='divide-y divide-gray-600'>
                                <div className='p-2'>
                                    <div className='flex bg-slate-800 items-center mb-1'>
                                        <img className='w-16 mr-3 rounded-full' src='https://i.stack.imgur.com/frlIf.png' alt="" />
                                        <a href="/about"><p className='font-semibold text-xs text-white hover:text-slate-400'>name</p></a>
                                        <button className='btn btn-xs  border-black text-[white] bg-black ml-20'>Connect</button>

                                    </div>
                                </div>
                                <div className='p-2'>
                                    <div className='flex bg-slate-800 items-center mb-1'>
                                        <img className='w-16 mr-3 rounded-full' src='https://i.stack.imgur.com/frlIf.png' alt="" />
                                        <a href="/about"><p className='font-semibold text-xs text-white hover:text-slate-400'>name</p></a>
                                        <button className='btn btn-xs  border-black text-[white] bg-black ml-20'>Connect</button>

                                    </div>
                                </div>
                                <div className='p-2'>
                                    <div className='flex bg-slate-800 items-center mb-1'>
                                        <img className='w-16 mr-3 rounded-full' src='https://i.stack.imgur.com/frlIf.png' alt="" />
                                        <a href="/about"><p className='font-semibold text-xs text-white hover:text-slate-400'>name</p></a>
                                        <button className='btn btn-xs  border-black text-[white] bg-black ml-20'>Connect</button>

                                    </div>
                                </div>
                                <div className='p-2'>
                                    <div className='flex bg-slate-800 items-center mb-1'>
                                        <img className='w-16 mr-3 rounded-full' src='https://i.stack.imgur.com/frlIf.png' alt="" />
                                        <a href="/about"><p className='font-semibold text-xs text-white hover:text-slate-400'>name</p></a>
                                        <button className='btn btn-xs  border-black text-[white] bg-black ml-20'>Connect</button>

                                    </div>
                                </div>
                                <div className='p-2'>
                                    <div className='flex bg-slate-800 items-center mb-1'>
                                        <img className='w-16 mr-3 rounded-full' src='https://i.stack.imgur.com/frlIf.png' alt="" />
                                        <a href="/about"><p className='font-semibold text-xs text-white hover:text-slate-400'>name</p></a>
                                        <button className='btn btn-xs  border-black text-[white] bg-black ml-20'>Connect</button>

                                    </div>
                                </div>
                                <div className='p-2'>
                                    <div className='flex bg-slate-800 items-center mb-1'>
                                        <img className='w-16 mr-3 rounded-full' src='https://i.stack.imgur.com/frlIf.png' alt="" />
                                        <a href="/about"><p className='font-semibold text-xs text-white hover:text-slate-400'>name</p></a>
                                        <button className='btn btn-xs  border-black text-[white] bg-black ml-20'>Connect</button>

                                    </div>
                                </div>
                            </div>

                    }

                    {
                        !more2 &&
                        <button onClick={seeMore2} className='cursor-pointer btn border-[black] btn-sm  normal-case bg-slate-700 text-white '>See less </button>

                    }
                    {more2 &&
                        <button onClick={seeLess2} className='cursor-pointer btn border-[black] btn-sm  normal-case bg-slate-700 text-white'>See more </button>


                    }
                </div>
            </div>

        </div>
        </div >
    );
};

export default Profile;