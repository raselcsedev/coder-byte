import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import AllBlogs from './AllBlogs';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { factory } from 'typescript';


const BlogSingle = ({ blog, handleUpdateSaved }) => {


    const { id } = useParams()
    const [user] = useAuthState(auth);

    const url2 = `https://coder-access.herokuapp.com/blogs/${blog?._id}`

    // const fetcher = async () => {
    //     const data = axios.get(url2)
    //     return (await data)?.data
    // }

    // let { data: blog, isLoading } = useQuery(['blogs', id], () => fetcher())



    const fetchSaved = (data) => {


        fetch(url2, {

            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log('res', result)

            })
    }

    console.log(blog, 'blog');

    const [saved, setSaved] = useState(blog?.saved)
    const [unsaved, setUnsaved] = useState(!blog?.saved)


    // if (isLoading) {
    //     return <p>loading...</p>
    // }

    const handleSaved = () => {
        setSaved(true)
        setUnsaved(false)
        const data = { user: user?.email, saved: true }
        const savedData = { user: user?.email, saved: true, _id: blog?._id }
        handleUpdateSaved(savedData)

        if (blog) {
            fetchSaved(data)
        }
    }

    const unsavedHandler = () => {
        setSaved(false)
        setUnsaved(true)
        const data = { saved: false, user: null }
        const savedData = { saved: false, user: null, _id: blog?._id }
        handleUpdateSaved(savedData)

        if (blog) {
            fetchSaved(data)
        }

    }

    useEffect(() => {

        if (blog?.saved && blog?.user == user?.email) {
            setSaved(true)
            setUnsaved(false)
        }

    }, [])



    return (
        <div className='w-[90%] mx-auto'>
            <div>

                <div className='flex justify-between mt-2'>

                    <div className='flex mr-16 md:mr-0 mb-5 ml-10 md:ml-0 '>

                        <img title='Go to profile' class="w-8 border rounded-full mr-2" src={blog?.profilePhoto ? blog?.profilePhoto : "https://i.stack.imgur.com/frlIf.png"} alt="" />

                        <div className='space-x-1  '>
                            <span className='font-semibold'>{blog?.blogger}</span>
                            <span className='text-xs'>{'>'}Today </span>
                        </div>

                    </div>

                    {
                        unsaved &&
                        <span title='Save it'>
                            <svg onClick={() => handleSaved()} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 cursor-pointer">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                            </svg>
                        </span>
                    }

                    {
                        saved && <span title='Unsave it'><svg onClick={() => unsavedHandler()} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 cursor-pointer text-[brown]">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9" />
                        </svg></span>
                    }


                </div>


                <article className="">
                    <Link to={`/blog-detail/${blog?._id}`}>
                        <div className='cursor-pointer flex  flex-col md:flex-row md:items-start space-x-6 ml-10 md:ml-0'>

                            <img loading='lazy' src={blog?.banner} alt="" className="flex-none w-60 border-2  rounded-md bg-slate-100" />
                            <div className="min-w-0 relative flex-auto">

                                <h2 className="font-semibold text-slate-900 truncate"> {blog?.title}</h2>
                                <p>
                                    {blog?.body.slice(0, 200)}...
                                </p>

                            </div>
                        </div>
                    </Link>



                </article >
                <div class="divider mx-10"></div>
            </div >

        </div >
    );
};

export default BlogSingle;