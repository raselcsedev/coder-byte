import React, { useEffect, useState } from 'react';
import './Discussion.css'
import { io } from "socket.io-client";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Chat from './Chat/Chat';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faRocket, faUpDownLeftRight } from '@fortawesome/free-solid-svg-icons'

const socket = io.connect("http://localhost:5000/")

const Discussion = () => {
    const [messages, setmessage] = useState("");

    const [chat, setchat] = useState([]);
    ;
    const [user] = useAuthState(auth)
    const [chatmessg, setchatmessg] = useState(false);
    
    const name = user?.displayName

    const sendmessage = (e) => {
        e.preventDefault();
        socket.emit('chat', { messages, name });
        document.getElementById('disbtn').value = ""

    }
    useEffect(() => {
        socket.on('chat', (payload) => {
            const a = [...chat, payload]
            setchat(a);
            console.log(a)
        })
    })





    return (
        <>
            <section className='sectioncontainer z-20'>
                {
                    chatmessg ?

                        <>
                            <button onClick={() => setchatmessg(false)} class="btn  btn-block btn-warning ">
                                <FontAwesomeIcon icon={faUpDownLeftRight} className="mr-auto" />
                                Minimize </button>

                            <div className='   text-center flex justify-center  '>
                                <div className=' bg-[#DCDCDC] discontainer py-10 pl-10 '>
                                    {chat.map(data => <>
                                        {
                                            data?.name === name ?
                                                <>
                                                    <span className=' flex justify-end  '>
                                                        <div className='text-white bg-[#3120E0] px-5 py-3 border rounded-full'>
                                                            {/* <small className='mr-5'>{data?.name} :</small> */}
                                                            <span className='text-xl'>{data?.messages}</span>
                                                        </div>
                                                    </span>
                                                </> :
                                                <>
                                                    <div className=' flex justify-start'>
                                                        <div className='text-white bg-[#2C3333] px-5 py-3 border  rounded-full'>
                                                            {/* <small className='mr-5'>{data?.name} :</small> */}
                                                            <span className='text-xl'>{data?.messages}</span>
                                                        </div>
                                                    </div>
                                                </>
                                        }


                                    </>)}
                                    <div className='inputbtncontainer flex  items-center'>
                                        <input id='disbtn' onChange={(e) => setmessage(e.target.value)} type="text" className='disinput border-2  px-5 py-3' placeholder='Chat With Us' />
                                        <button onClick={sendmessage} class="  btn btn-outline btn-primary"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                        </svg>
                                        </button>
                                    </div>

                                </div>
                            </div>


                        </>

                        :


                        <>
                            <button onClick={() => setchatmessg(true)} class="btn  btn-block btn-warning ">

                                <FontAwesomeIcon icon={faRocket} className="mx-3" />
                                Chat with us </button>
                        </>

                }


            </section>

        </>

    );
};

export default Discussion;