import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
// import auth from '../../../firebase.init';
import { useQuery } from '@tanstack/react-query';

const BloggerOverview = ({ blogger }) => {

    // const [user] = useAuthState(auth)

    const url = `http://localhost:5000/blogs`

    const fetcher = async () => {
        const data = axios.get(url)
        return (await data).data
    }

    let { data: allBlogs, isLoading } = useQuery(['blogs'], () => fetcher())

    const blogs = allBlogs?.filter(blog => blog?.blogger != blogger)

    return (
        <div className='border-l divide-y sticky right-[0%] top-[10%] min-h-[90vh]  space-y-10 pl-2 pr-1'>

            <div className='card  divide divide-y my-4 space-y-4'>

                <div className="collapse  collapse-arrow border-b-2">
                    <input type="checkbox" />
                    <div className="collapse-title font-semibold  ">

                        {blogs?.length && <h1 className='text-md font-semibold'>Stories from this writer you may love :</h1>}

                    </div>
                    <div className="collapse-content">
                        {
                            blogs && [...blogs].sort(() => 0.5 - Math.random())?.slice(0,5).map(blog => blog?.title && <div className='w-[100%] mx-auto mb-6'>
                                <div className='grid grid-cols-8 gap-4'>

                                    <div className='col-span-6'>
                                        <div className='flex  '>

                                            <img title='Go to profile' class="w-6 border rounded-full mr-2" src={blog?.profilePhoto ? blog?.profilePhoto : "https://i.stack.imgur.com/frlIf.png"} alt="" />

                                            <div className='space-x-1  '>
                                                <span className='text-xs text-[brown] font-semibold'>{blog?.blogger}</span>

                                            </div>

                                        </div>
                                        <article title='go to the blog' className="">
                                            <Link to={`/blog-detail/${blog?._id}`}>
                                                <div className='cursor-pointer '>

                                                    <h2 className="font-semibold text-slate-900 "> {blog?.title}</h2>

                                                </div>
                                            </Link>
                                        </article >
                                    </div >


                                    <div className='col-span-2'>
                                        <img className='w-24 h-16 object-cover rounded' src={blog?.banner} alt="" />
                                    </div>
                                </div>

                            </div >)
                        }

                    </div>
                </div>
            </div>


            <div className='my-4'>
                <div class="stats w-[100%] shadow">

                    <div class="stat">
                        <div class="stat-title">Stories</div>
                        <div class="stat-value">10K+</div>
                        <div class="stat-desc">Increasing momentusly</div>
                    </div>

                    <div class="stat">
                        <div class="stat-title">Writers</div>
                        <div class="stat-value">1,200+</div>
                        <div class="stat-desc">↘︎ Contributing..</div>
                    </div>
                </div>
                <div class="flex -space-x-2 overflow-hidden mx-4 my-4 mb-4">
                    <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://i.ibb.co/0Z2YqQp/20200817-055052.jpg" alt="" />
                    <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://i.ibb.co/0ycQhqS/20201119-150836.jpg" alt="" />
                    <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://res.cloudinary.com/pavel-genuine/image/upload/v1659796320/Photos/wu5ibh8i76k4mghenbwb.jpg" alt="" />
                    <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://i.ibb.co/0Z2YqQp/20200817-055052.jpg" alt="" />
                    <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://i.ibb.co/0ycQhqS/20201119-150836.jpg" alt="" />
                    <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://res.cloudinary.com/pavel-genuine/image/upload/v1659796320/Photos/wu5ibh8i76k4mghenbwb.jpg" alt="" />
                    <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://i.ibb.co/0Z2YqQp/20200817-055052.jpg" alt="" />
                    <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://i.ibb.co/0ycQhqS/20201119-150836.jpg" alt="" />
                    <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://res.cloudinary.com/pavel-genuine/image/upload/v1659796320/Photos/wu5ibh8i76k4mghenbwb.jpg" alt="" />
                    ...
                </div>
            </div>

            <div className='bg-[skyblue] p-3 rounded my-4'>
                Wanna write on coderAccess Blog ? <br />
                <Link to='/blog-editor'><button className='btn btn-xs'>write now </button> <br /></Link>
                <ul className='steps steps-vertical'>
                    <li className='step'>Spread your innovation...</li>
                    <li className='step'>Involve in the community...</li>
                    <li className='step'>Stay updated...</li>
                </ul>
            </div>

            <div>
                <h1 className='text-lg font-semibold'>Topics, You may like :</h1>
                <div className='space-x-2 space-y-2'>

                    <button className='btn btn-ghost bg-slate-200 btn-xs rounded-full'>JavaScript</button>
                    <button className='btn btn-ghost bg-slate-200 btn-xs rounded-full'>Python</button>
                    <button className='btn btn-ghost bg-slate-200 btn-xs rounded-full'>Backend</button>
                    <button className='btn btn-ghost bg-slate-200 btn-xs rounded-full'>Jobs</button>
                    <button className='btn btn-ghost bg-slate-200 btn-xs rounded-full'>Machine Learning</button>
                    <button className='btn btn-ghost bg-slate-200 btn-xs rounded-full'>React</button>
                    <button className='btn btn-ghost bg-slate-200 btn-xs rounded-full'>typeScript</button>
                    <button className='btn btn-ghost bg-slate-200 btn-xs rounded-full'>GoLang</button>
                </div>
            </div>

            <div className='my-10'>
                <span className='text-[grey]'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 mx-2 h-6 cursor-pointer text-black">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                    </svg>
                    Click the sign  on any story to easily add it to your reading list or a custom list that you can share.


                </span>
            </div>
        </div>
    );
};

export default BloggerOverview;