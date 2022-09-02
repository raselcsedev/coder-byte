import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SideBar from '../Shared/SideBar';
import BlogSingle from './BlogSingle';
import SavedBlog from './SavedBlogs/SavedBlog';

const AllBlogs = () => {

    const [updateSaved, setUpdateSaved] = useState({})

    const handleUpdateSaved = (data) => {
        setUpdateSaved(data)
    }


    const url = `https://coder-access.herokuapp.com/blogs`

    const fetcher = async () => {
        const data = axios.get(url)
        return (await data).data
    }

    let { data: blogs, isLoading } = useQuery(['blogs'], () => fetcher())

    // let [savedBlogs, setSavedBlogs] = useState(blogs)

    //    console.log("update",updateSaved);

    //     if (isLoading) {
    //         return <p>loading...</p>
    //     }

    //     if (blogs && !isLoading && savedBlogs && updateSaved ) {

    //         if (updateSaved?.saved) {
    //             setSavedBlogs = [...blogs, updateSaved]
    //         }
    //         else {
    //             setSavedBlogs = savedBlogs?.filter(savedBlog => savedBlog?._id != updateSaved?._id)
    //         }
    //     }

    console.log('upadateSaved', updateSaved);


    return (

        <div className=' relative'>

            <div className='mx-auto  w-[100%]  grid grid-cols-12 '>

                <SideBar className='col-span-1'></SideBar>

                <div className='col-span-8 pt-5'>
                    <div>
                        <div className='text-center ml-[25%] space-x-8 mb-10 pt-[5.9%]'>
                            <span className='text-xl text-center font-semibold pb-1 border-b-4 border-[brown] cursor-pointer'>Blogs</span>
                            <Link to={`/discussion-forums`}><span className='text-xl text-center font-semibold pb-1 border-b-4 border-[grey] cursor-pointer'>Forum</span></Link>
                           <div>
                           <h2 className="text-4xl mr-16 text-center font-semibold flex justify-center mt-4 lg:mt-12">coder <span className='text-[brown]  '>A</span> ccess Blogs</h2>
                            <p className="font-mono mt-4  text-sm">
                                Welcome to the friendliest place for anyone learning to code!
                            </p>
                           </div>

                        </div>



                        {
                            blogs?.map(blog => <BlogSingle handleUpdateSaved={handleUpdateSaved} key={blog._id} blog={blog}></BlogSingle>)
                        }
                    </div>
                </div>
                <div className='col-span-3 mt-8'><SavedBlog savedBlogs={blogs} updateSaved={updateSaved}></SavedBlog></div>
            </div>
        </div>
    );
};

export default AllBlogs;