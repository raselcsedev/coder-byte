import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import BlogSingle from './BlogSingle';

const AllBlogs = () => {

    const url = `https://coder-access.herokuapp.com/blogs`


    const fetcher = async () => {
        const data =  axios.get(url)
        return (await data).data
    }

    let { data: blogs, isLoading } = useQuery(['blogs'], () => fetcher())

    if(isLoading){
        return <p>loading...</p>
    }

    return (
        <div>
            <h1>Total Blogs : {blogs?.length}</h1>

            {
                blogs.reverse().map(blog=><BlogSingle key={blog._id}  blog={blog}></BlogSingle>)
            }
        </div>
    );
};

export default AllBlogs;