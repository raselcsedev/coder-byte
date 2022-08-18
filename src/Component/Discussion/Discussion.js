import React, { useEffect, useState } from 'react';
import './Discussion.css'
import { io } from "socket.io-client";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const socket = io.connect("http://localhost:5000/")
const Discussion = () => {
    const [messages, setmessage] = useState("");
    const [chat, setchat] = useState([]);
    ;
    const [user] = useAuthState(auth)
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
            <div className='   text-center   flex justify-center'>
                <div className='bg-slate-400 discontainer text-start py-10 pl-10'>
                    {chat.map(data => <>
                        <div className=' flex'>
                            <p className='mr-5'>{data?.name} :</p>
                            <p className='text-xl'>{data?.messages}</p>
                        </div>
                    </>)}

                </div>
            </div>
            <div className='flex justify-center items-center'>
                <input id='disbtn' onChange={(e) => setmessage(e.target.value)} type="text" className=' border-2 border-red-500   w-3/6 px-10 py-5' placeholder='Write your question' />
                <button onClick={sendmessage} class="btn btn-outline btn-primary">submit</button>
            </div>
        </>

    );
};

export default Discussion;