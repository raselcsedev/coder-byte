import React, { useState } from "react";
import forums from "../../../Images/discussion.svg";
import forum from "../../../Images/blacrock.jpg";
import { Link, useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faLink, faReply } from "@fortawesome/free-solid-svg-icons";
import { set, useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';
import NestedComments from "../../Shared/NestedComments";

const ForumDetail = () => {


    const [showComment, setShowComment] = useState(false)
    const [handlerShowComment, setHandlerShowComment] = useState(true)

    const { id } = useParams()
    const [user] = useAuthState(auth);

    const url = `http://localhost:5000/forum/`

    const fetcher = async () => {
        const data = axios.get(url)
        return (await data)?.data
    }

    let { data: forum, isLoading } = useQuery(['blogs', id], () => fetcher())

    if (isLoading) {
        return <p>loading...</p>
    }

    const singleForum = forum?.find(item => item?._id == id)

    return (
        <div className="pt-16 mb-12">

            <div className="lg:mx-12 mx-4 grid grid-cols-12">
                <div className="col-span-4 flex justify-center">
                    <img
                        className="h-48 w-72 hidden lg:block"
                        src="https://i.ibb.co/k8Zc3ND/question-answer-icon-comic-style-dialog-speech-bubble-cartoon-vector-illustration-white-isolated-bac.jpg"
                        alt=""
                    />


                </div>
                <div className="col-span-4">
                    <div className='text-center space-x-8 my-4'>
                        <Link to={`/all-blogs`}><span className='text-xl text-center font-semibold pb-1 border-b-4  border-[grey] cursor-pointer'>Blogs</span></Link>
                        <span className='text-xl text-center font-semibold pb-1 border-b-4 border-[brown] cursor-pointer'>Forum</span>
                    </div>
                    <h2 className="text-4xl text-center font-semibold flex justify-center mt-4 lg:mt-12">coder <span className='text-[brown] '>A</span>ccess Forums</h2>
                    <p className="font-mono mt-4 flex justify-center text-sm">
                        Welcome to the friendliest place for anyone learning to code!
                    </p>

                    <div className="lg:flex justify-center items-center space-x-12 mt-6">
                        <Link to="/">
                            <p className="text-blue-600 text-xs font-bold underline">New User Guide</p>
                        </Link>
                        <Link to="/contactus">
                            <p className="text-blue-600 text-xs font-bold underline">coderAccess Help</p>
                        </Link>
                    </div>

                </div>
                <div className="col-span-4 flex justify-center">


                    {!showComment &&
                        <img
                            className="h-48 w-72 hidden lg:block"
                            src="https://previews.123rf.com/images/feelisgood/feelisgood1709/feelisgood170900838/85757474-flat-speech-bubble-icon-chat-room-sign-forum-internet-button-quick-and-easy-recolorable-shape-isolat.jpg"
                            alt=""
                        />
                    }
                </div>
            </div>


            <div className="grid ">
            <div >
                <div className="mt-16 lg:ml-48 mx-4">
                    <h2 className="text-2xl font-semibold">{singleForum?.title}</h2>
                    <div className="flex items-center space-x-4 mt-2">
                        <Link to="/contactus">
                            <div className="flex items-center space-x-2">
                                <div className="h-2 w-2 bg-blue-500"></div>
                                <p className="text-xs">Get Help</p>
                            </div>
                        </Link>
                        <Link to="/">
                            <div className="flex items-center space-x-2">
                                <div className="h-2 w-2 bg-green-500"></div>
                                <p className="text-xs">Coding</p>
                            </div>
                        </Link>
                        <Link to="/">
                            <div className="flex items-center space-x-2">
                                <div className="h-2 w-2 bg-gray-400"></div>
                                <p className="text-xs">Mid-level</p>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="lg:ml-48 ml-4  mt-4">
                    <div class="card w-3/5 bg-base-100 shadow-md">
                        <div class="card-body">
                            <div className="flex items-center">
                                <img
                                    className="w-12 border border-[blue] rounded-full"
                                    src={"https://i.stack.imgur.com/frlIf.png"}
                                    alt=""
                                />
                                <h2 className="text-blue-500 ml-3">{singleForum?.displayName}</h2>
                                <p className="flex justify-end text-gray-500">{singleForum?.time}</p>
                            </div>
                            <div className="lg:ml-8">

                                <h2 className="text-justify text-sm text-black mt-4">
                                    {singleForum?.issue}
                                </h2>
                            </div>

                            <div className="flex items-center justify-end space-x-4 mt-4">
                                <h2 className="text-gray-600">
                                    <FontAwesomeIcon icon={faHeart} />
                                </h2>
                                <Link to="/">
                                    <h2 className="text-gray-600">
                                        <FontAwesomeIcon icon={faLink} />
                                    </h2>
                                </Link>
                            </div>
                        </div>
                        <div className="flex justify-end mr-6">
                            {!handlerShowComment && <button onClick={() => { setShowComment(false); setHandlerShowComment(true) }} class="px-2 py-1 border border-blue-600 text-white bg-blue-700 text-xs font-semibold mt-5 mb-5">
                                <span>
                                    <FontAwesomeIcon icon={faReply} />
                                </span>{" "}
                                Response
                            </button>}

                            {handlerShowComment && <button onClick={() => { setShowComment(true); setHandlerShowComment(false) }} class="px-2 py-1 border border-blue-600 text-white bg-blue-700 text-xs font-semibold mt-5 mb-5">
                                <span>
                                    <FontAwesomeIcon icon={faReply} />
                                </span>{" "}
                                Response
                            </button>}

                        </div>
                    </div>
                </div>

            </div>

            <div>
                {showComment &&
                    <div className=' drop-shadow-lg border-l z-20 w-[50%] ml-48 min-h-auto my-5 overflow-scroll-y '>

                        <NestedComments></NestedComments>

                    </div>}
            </div>
            </div>

            <div className="lg:ml-48 ml-4 mt-20">
                <h2 className="text-lg font-bold">Suggested Topics</h2>
                <div className="w-4/5">
                    <div className="flex items-center mt-2 mb-2">
                        <div>
                            <p className="text-sm ml-2">Topic</p>
                        </div>
                        <div className="ml-auto mr-4">
                            <div className="flex items-center space-x-6">
                                <div>
                                    <p>Replies</p>
                                </div>
                                <div>
                                    <p>Views</p>
                                </div>
                                <div>
                                    <p>Activity</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {
                        forum?.map(item =>
                            <Link to={`/discussion-forums/${item?._id}`} >
                                <div className="cursor-pointer border-2 border-black py-4 px-2 my-2">
                                    <div className="flex items-center">
                                        <div>
                                            <p className="text-lg text-black">{item?.title ? item?.title : item?.issue.slice(0, 100)}</p>
                                            <div className="flex items-center space-x-4 mt-1">

                                                <div className="flex items-center space-x-2">
                                                    <div className="h-2 w-2 bg-blue-500"></div>
                                                    <p className="text-xs">Coding</p>
                                                </div>


                                                <div className="flex items-center space-x-2">
                                                    <div className="h-2 w-2 bg-gray-500"></div>
                                                    <p className="text-xs text-gray-600">general</p>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="ml-auto">
                                            <div className="flex items-center space-x-12">
                                                <div>
                                                    <p> </p>
                                                </div>
                                                <div>
                                                    <p> </p>
                                                </div>
                                                <div>
                                                    <p>{item?.time}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    }

                </div>
            </div>
        </div>
    );
};

export default ForumDetail;
