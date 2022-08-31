import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import LikeComments from '../Shared/LikeComments/LikeComments';
import SideBar from '../Shared/SideBar';
import SavedBlog from './SavedBlogs/SavedBlog';

const BlogDetail = () => {

    const { id } = useParams()
    const [user] = useAuthState(auth);

    const url = `http://coder-access.herokuapp.com/blogs/${id}`
    const url2 = `http://localhost:5000/blogs/${id}`

    const fetcher = async () => {
        const data = axios.get(url)
        return (await data)?.data
    }

    let { data: blog, isLoading } = useQuery(['blogs', id], () => fetcher())


    const splitText = (text, from, to) => [
        text.slice(0, from),
        text.slice(from, to),
        text.slice(to)
    ];



    const [disabled, setDisabled] = useState(false);
    const [highlightSection, setHighlightSection] = useState({
        from: 0,
        to: 0
    });



    const synth = window.speechSynthesis;
    let utterance = new SpeechSynthesisUtterance(blog?.body);
    utterance.addEventListener("start", () => setDisabled(true));
    utterance.addEventListener("end", () => setDisabled(false));
    utterance.addEventListener("boundary", ({ charIndex, charLength }) => {
        setHighlightSection({ from: charIndex, to: charIndex + charLength });
    });


    const handlePlay = () => {

        if (!synth) {
            console.error("no tts");
            return;
        }

        synth.speak(utterance);
        synth.resume();
    };

    const handlePause = () => {

        synth.pause()

    }
    const [listen, setListen] = useState(false)

    const handleListen = () => {
        setListen(true)
        setPause(false)
    }
    const [pause, setPause] = useState(true)

    const pauseHandler = () => {
        setPause(true)
        setListen(false)
    }


    const fetchSaved = (data) => {


        fetch(url2, {
            
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'Access-control-Allow-Origin':"*",
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log('res', result)

            })
    }

    const [saved, setSaved] = useState(false)
    const [unsaved, setUnsaved] = useState(true)

    
    if (isLoading) {
        return <p>loading...</p>
    }

    const handleSaved = () => {
        setSaved(true)
        setUnsaved(false)
        const data = { user: user?.email, saved: true }
        if (blog && !isLoading){
            fetchSaved(data)
        }


    }

    const unsavedHandler = () => {
        setSaved(false)
        setUnsaved(true)
        const data = { saved: false, user:null }
        if (blog && !isLoading) {
            fetchSaved(data)
        }

    }


    const HighlightedText = ({ text, from, to }) => {

        const [start, highlight, finish] = splitText(text, from, to);

        return (
            <p>
                {start}
                <span style={{ backgroundColor: "#00ff51ab" }}>{highlight}</span>
                {finish}
            </p>
        );
    };
  

    return (
        <div className='py-16 relative'>

            <div className='mx-auto  w-[100%]  grid grid-cols-12 '>

                <SideBar></SideBar>

                <div className='col-span-8 my-6 w-[90%]'>
                    <div>

                        <div className='md:flex justify-between'>

                            <div className='mr-20'>
                                <p className='text-[gray]'>Published by </p>

                                <div className='flex mr-16 md:mr-0 mb-5 '>
                                    <Link to='/profile'>
                                        <img title='Go to profile' class="w-8 border border-black rounded-full mx-2" src={blog?.profilePhoto ? blog?.profilePhoto : "https://i.stack.imgur.com/frlIf.png"} alt="" />
                                    </Link>
                                    <div className='space-x-1 '>
                                        <span className='font-semibold'>{blog?.blogger}</span>
                                        <span className='text-xs'>{'>'}Today </span>
                                    </div>


                                </div>
                            </div>
                            <div className=''>
                                {
                                    unsaved &&
                                    <span title='Save it'>
                                        <svg onClick={() => handleSaved()} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 cursor-pointer">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                                        </svg>
                                    </span>
                                }

                                {
                                    saved && <span title='Unsave it'><svg onClick={() => unsavedHandler()} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 cursor-pointer tex-[brown]">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9" />
                                    </svg></span>
                                }


                            </div>
                        </div>

                        <div className='grid grid-cols-12 gap-5'>
                            <div class="divider mt-6 col-span-5 h-[3%] bg-[brown]"></div>
                            <div class="divider mt-4 col-span-7"></div>
                        </div>
                        <h1 className='text-xl md:text-4xl mb-8 font-semibold'>
                            {blog?.title}
                        </h1>
                        <img loading='lazy' className='my-8 border-2 rounded ' src={blog?.banner} alt="" />

                    </div>
                    <div className="my-4 ">

                        {
                            listen && <button onClick={() => { handlePause(); pauseHandler() }} className="border-2 bg-black border-black hover:bg-slate-700 rounded-full w-28 h-10 flex items-center  space-x-1 py-3 pl-3 pr-2 text-white"> <span className='font-semibold '>Paush</span>

                                <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </button>
                        }
                        {
                            pause && <button onClick={() => { handleListen(); handlePlay() }} className="border-2 border-black bg-black hover:bg-slate-700 rounded-full w-28 h-10 flex items-center  px-3 space-x-2 py-3 text-white"> <span className='font-semibold '>Listen</span>

                                <img className='w-8' src="https://i.ibb.co/vVVrLcZ/listen-on-google-podcasts-icon.png" alt="" />
                            </button>
                        }


                    </div>

                    <HighlightedText text={blog?.body} {...highlightSection} />

                    <LikeComments></LikeComments>
                    {/* <NestedComments></NestedComments> */}

                </div>
                {/* <div className='col-span-3'><SavedBlog></SavedBlog></div> */}

            </div>

        </div>
    );
};

export default BlogDetail;