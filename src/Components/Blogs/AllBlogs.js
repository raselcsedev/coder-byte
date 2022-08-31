import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import SideBar from '../Shared/SideBar';
import BlogSingle from './BlogSingle';
import SavedBlog from './SavedBlogs/SavedBlog';

const AllBlogs = () => {

    const [updateSaved, setUpdateSaved] = useState({})

    const handleUpdateSaved = (data) => {
        setUpdateSaved(data)
    }


    const url = `http://localhost:5000/blogs`

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

console.log('upadateSaved',updateSaved);


    return (

        <div className=' relative'>

            <div className='mx-auto  w-[100%]  grid grid-cols-12 '>

                <SideBar className='col-span-1'></SideBar>

                <div className='col-span-8 pt-24'>
                    <div>
                        <h1 className='mx-10 my-2'>Total Blogs : {blogs?.length}</h1>

                        {
                            blogs?.map(blog => <BlogSingle handleUpdateSaved={handleUpdateSaved} key={blog._id} blog={blog}></BlogSingle>)
                        }
                    </div>
                </div>
                <div className='col-span-3'><SavedBlog savedBlogs={blogs} updateSaved={updateSaved}></SavedBlog></div>
            </div>
        </div>
    );
};

export default AllBlogs;