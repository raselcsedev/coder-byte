import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import LikeComments from '../Shared/LikeComments/LikeComments';
import SideBar from '../Shared/SideBar';
import NestedComments from './NestedComments/NestedComments';

const BlogDetail = () => {

    const { id } = useParams()
    const [user] = useAuthState(auth);

    const url = `https://coder-access.herokuapp.com/blogs/${id}`
    const fetcher = async () => {
        const data = axios.get(url)
        return (await data).data
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
    if (isLoading) {
        return <p>loading...</p>
    }

    return (
        <div className='py-16 relative'>

            <div className='mx-auto  w-[100%]  grid grid-cols-12 '>

                <SideBar className='col-span-1'></SideBar>

                <div className='col-span-6'>
                    <div>

                        <div className='md:flex items-center'>

                            <div className='mr-20'>
                                <p className='text-[gray]'>Published by </p>

                                <div className='flex mr-16 md:mr-0 mb-5 '>
                                    <img loading='lazy' className='w-8 h-8 border rounded-full mr-2'
                                        src='https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220509120600/Learn-Data-Structures-and-Algorithms-Easily.gif'
                                        alt="" />
                                    <div className='space-x-1 '>
                                        <span className='font-semibold'>{blog?.blogger}</span>
                                        <span className='text-xs'>{'>'}Today </span>
                                    </div>

                                </div>
                            </div>

                            <p className='mb-3 md:ml-5'>
                                <p className='text-[gray]'>Tags</p>
                                {/* <p className='text-[black]'>{course?.topic}</p> */}
                            </p>
                        </div>

                        <div className='grid grid-cols-12 gap-5'>
                            <div class="divider mt-6 col-span-5 h-[3%] bg-[brown]"></div>
                            <div class="divider mt-4 col-span-7"></div>
                        </div>
                        <h1 className='text-xl md:text-4xl mb-8 font-semibold'>
                            {blog?.title}
                        </h1>
                        <img loading='lazy' className='my-8 border-2 rounded w-[70%]' src={blog?.banner} alt="" />

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
            </div>

            <div className='col-span-4'>.... </div>
        </div>
    );
};

export default BlogDetail;