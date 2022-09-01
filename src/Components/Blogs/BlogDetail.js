import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { Link, useParams } from 'react-router-dom';
import auth from '../../firebase.init';

import NestedComments from '../Shared/NestedComments';
import SideBar from '../Shared/SideBar';
import BloggerOverview from './BloggerOverview';


const BlogDetail = () => {

    const { id } = useParams()
    const [user] = useAuthState(auth);

    const url = `https://coder-access.herokuapp.com/blogs/${id}`
    const url2 = `http://localhost:5000/blogs/${id}`

    const fetcher = async () => {
        const data = axios.get(url2)
        return (await data)?.data
    }

    let { data: blog, isLoading } = useQuery(['blogs', id], () => fetcher())


    const splitText = (text, from, to) => [
        text?.slice(0, from),
        text?.slice(from, to),
        text?.slice(to)
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
                'Access-control-Allow-Origin': "*",
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

    const [showComment, setShowComment] = useState(false)
    const [handlerShowComment, setHandlerShowComment] = useState(true)



    if (isLoading) {
        return <p>loading...</p>
    }

    const handleSaved = () => {
        setSaved(true)
        setUnsaved(false)
        const data = { user: user?.email, saved: true }
        if (blog && !isLoading) {
            fetchSaved(data)
        }


    }

    const unsavedHandler = () => {
        setSaved(false)
        setUnsaved(true)
        const data = { saved: false, user: null }
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


                    <div className='fixed  bottom-[1%]  right-[40%]'>

                        <div className=' flex justify-center py-1 px-2 space-x-4 border border-[black] rounded-full bg-black text-white mx-auto '>
                            <span className='cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                            </span>

                           {
                             !handlerShowComment && <span onClick={()=>{setShowComment(false) ; setHandlerShowComment(true)}} className='cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                             <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                         </svg></span>
                           }

                            
                            { handlerShowComment &&
                                <span onClick={()=>{setShowComment(true) ; setHandlerShowComment(false)}} className='cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                            </svg></span>
                            }

                        </div>
                    </div>








                </div>
                
                <div className='col-span-3'>
               
                { showComment  &&
                <div className='sticky drop-shadow-lg border-l z-20 right-[0%] top-[0%]  min-h-[90vh] overflow-scroll-y '>
                
                     <NestedComments></NestedComments>
   
                </div>}
                    <BloggerOverview blogger={blog?.blogger}></BloggerOverview>
                
                </div>
                
                
            </div>





        </div>
    );
};

export default BlogDetail;