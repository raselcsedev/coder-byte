import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import AllBlogs from './AllBlogs';

const BlogSingle = ({blog}) => {

    const [user] = useAuthState(auth);

    return (
        <div>
            <Link  to={`/blogs/blog-detail/${blog?._id}`}>
            <div>
                <div className='flex mr-16 md:mr-0 mb-5 ml-10 md:ml-0 '>
                    <img loading='lazy' className='w-8 h-8 border rounded-full mr-2'
                        src='https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220509120600/Learn-Data-Structures-and-Algorithms-Easily.gif'
                        alt="" />
                    <div className='space-x-1  '>
                        <span className='font-semibold'>{blog?.blogger}</span>
                        <span className='text-xs'>{'>'}Today </span>
                    </div>

                </div>
                <article className="flex my-3 flex-col md:flex-row md:items-start space-x-6 ml-10 md:ml-0">
                    <img loading='lazy' src={blog?.banner} alt="" className="flex-none w-60 border-2  rounded-md bg-slate-100" />
                    <div className="min-w-0 relative flex-auto">

                        <h2 className="font-semibold text-slate-900 truncate"> {blog?.title}</h2>
                        <p>
                            {blog?.body.slice(0,200)}...
                        </p>

                        <Link to={`/blogs/blog-detail/${blog?._id}`}> <button className='btn btn-xs bg-[brown] my-5'>Detail</button>
                        </Link>
                    </div>
                </article>
                <div class="divider"></div>
            </div>
            </Link>
        </div>
    );
};

export default BlogSingle;