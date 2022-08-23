import React from 'react';
import BlogSingle from './BlogSingle';
import SingleBlog from './SingleBlog';

const HomeBlogs = () => {
    return (
        <div className='lg:mx-12 pt-12'>
            {/* <SingleBlog></SingleBlog> */}
            <BlogSingle></BlogSingle>
        </div>
    );
};

export default HomeBlogs;