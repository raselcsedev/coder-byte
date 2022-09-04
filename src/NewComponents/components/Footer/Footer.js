import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='bg-slate-900 pb-20 '>

          

            <div className='flex justify-center items-center  space-x-1 lg:space-x-4 text-white pt-8 lg:pt-px'>
                <Link to="/contactus"><p>Contact Us</p></Link>
                <p>{"|"}</p>
                <Link to="/"><p>FAQ</p></Link>
                <p>{"|"}</p>
                <Link to="/"><p>Reviews</p></Link>
                <p>{"|"}</p>
                <Link to="/all-blogs"><p>Blogs</p></Link>
                <p>{"|"}</p>
                <Link to="/contests"><p>Contests</p></Link>
                <p>{"|"}</p>
                <Link to="/"><p>Privacy Policy</p></Link>
            </div>

            <div>
                <p className='flex items-center justify-center text-white text-lg mt-3'><small>copyright @ {year} coderAccess. All rights reserved.</small></p>
            </div>
        </div>
    );
};

export default Footer;