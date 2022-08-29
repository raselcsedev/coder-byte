import React from 'react';
import { useState } from 'react';
import BlogSingle from '../BlogSingle';

const SavedBlog = () => {

    const [saved, setSaved] = useState([])

    return (
        <div className='border-l sticky right-[0%] top-[10%] min-h-[90vh]  p-2 space-y-4'>
            <h1 className='text-md font-semibold m-3'>What You've Saved to Read Later : </h1>

            {
                saved && saved?.slice(0, 3).map(item => <BlogSingle></BlogSingle>)
            }

            {
                !saved.length && <div className='bg-slate-200 font-semibold p-3 h-[20vh] rounded text-center py-10'>"You haven't saved any stories so far !"</div>
            }
            {
                <div class="stats w-[100%] shadow">

                    <div class="stat">
                        <div class="stat-title">Stories</div>
                        <div class="stat-value">31K</div>
                        <div class="stat-desc">Increasing momentusly</div>
                    </div>

                    <div class="stat">
                        <div class="stat-title">Writers</div>
                        <div class="stat-value">1,200+</div>
                        <div class="stat-desc">↘︎ Innovation</div>
                    </div>

                </div>


            }
            {
                <div class="flex -space-x-2 overflow-hidden mx-4 mb-4">
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
            }

            {
                <div className='bg-[skyblue] p-3 rounded'>
                    Wanna write on coderAccess Blog ? <br />
                    <button className='btn btn-xs'>write now </button> <br />
                    <ul className='steps steps-vertical'>
                        <li className='step'>Spread your innovation...</li>
                        <li className='step'>Involve in the community...</li>
                        <li className='step'>Stay updated...</li>
                    </ul>
                </div>
            }
            {

                <div>
                    <h1 className='text-lg font-semibold'>Topics, You may like :</h1>
                    <div className='space-x-2 space-y-2'>

                        <button className='btn btn-ghost bg-slate-300 btn-xs rounded-full'>JavaScript</button>
                        <button className='btn btn-ghost bg-slate-300 btn-xs rounded-full'>Python</button>
                        <button className='btn btn-ghost bg-slate-300 btn-xs rounded-full'>Backend</button>
                        <button className='btn btn-ghost bg-slate-300 btn-xs rounded-full'>Jobs</button>
                        <button className='btn btn-ghost bg-slate-300 btn-xs rounded-full'>Machine Learning</button>
                        <button className='btn btn-ghost bg-slate-300 btn-xs rounded-full'>React</button>
                        <button className='btn btn-ghost bg-slate-300 btn-xs rounded-full'>typeScript</button>
                        <button className='btn btn-ghost bg-slate-300 btn-xs rounded-full'>GoLang</button>
                    </div>
                </div>

            }
        </div>
    );
};

export default SavedBlog;