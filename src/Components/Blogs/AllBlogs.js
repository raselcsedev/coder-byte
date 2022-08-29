import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import SideBar from '../Shared/SideBar';
import BlogSingle from './BlogSingle';

const AllBlogs = () => {

    const url = `https://coder-access.herokuapp.com/blogs`


    const fetcher = async () => {
        const data = axios.get(url)
        return (await data).data
    }

    let { data: blogs, isLoading } = useQuery(['blogs'], () => fetcher())

    if (isLoading) {
        return <p>loading...</p>
    }

    return (

        <div className=' relative'>

            <div className='mx-auto  w-[100%]  grid grid-cols-12 '>

                <SideBar className='col-span-1'></SideBar>

                <div className='col-span-8 pt-24'>
                    <div>
                        <h1>Total Blogs : {blogs?.length}</h1>

                        {
                            blogs.reverse().map(blog => <BlogSingle key={blog._id} blog={blog}></BlogSingle>)
                        }
                    </div>
                </div>
                <div className='col-span-3'>...</div>
            </div>
        </div>
    );
};

export default AllBlogs;