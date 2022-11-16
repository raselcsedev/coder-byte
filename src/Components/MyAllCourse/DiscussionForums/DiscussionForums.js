import React from "react";
import forums from "../../../Images/discussion.svg";
import forum from "../../../Images/blacrock.jpg";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faLink, faReply } from "@fortawesome/free-solid-svg-icons";
import { set, useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';

const DiscussionForums = () => {

  const [user] = useAuthState(auth);

  const { register, formState: { errors }, handleSubmit } = useForm();

  const url = `https://coder-access-backend.onrender.com/forum/`


  const today = new Date();
  const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  const dateTime = date + ' ' + time;

  const onSubmit = async (data) => {

    // setReview(data?.review)



    const sendData = {time:dateTime,title:data?.title, issue: data?.issue, email: user?.email, displayName: user?.displayName }

    await fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(sendData)
    })

    toast.success("Issue Arised")
  }

  const fetcher = async () => {
    const data = axios.get(url);

    return (await data).data;
  };

  let { data: forum, isLoading } = useQuery(["forum"], () => fetcher());

  return (
    <div className="pt-16 mb-12">
      <Toaster />
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
           
              <p className="text-blue-600 text-xs font-bold underline">New User Guide</p>
           
            <Link to="/contactus">
              <p className="text-blue-600 text-xs font-bold underline">coderAccess Help</p>
            </Link>
          </div>
          <div className="flex justify-center mt-6">
            <label for="my-modal-4" class="btn modal-button">Arise an Issue</label>


            <input type="checkbox" id="my-modal-4" class="modal-toggle" />
            <label for="my-modal-4" class="modal cursor-pointer">
              <label class="modal-box relative w-[100%] h-[58%]" for="">
                <div className='h-[40vh]'>
                  <label for="review" class="block text-lg font-semibold  "> Write You Issue </label>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" className="text-lg mb-4 bg-[#e8e7e9] font-semibold shadow-sm  mt-1 block w-full sm:text-sm border rounded-md p-2"
                     placeholder="Title" {...register("title")} />
                    <textarea style={{ backgroundColor: '#e8e7e9', border: '#0c0c0c' }}
                      id="review" name="review" rows="10"
                      placeholder="You Issue"
                      className="shadow-sm  mt-1 block w-full sm:text-sm border  rounded-md p-2"
                      {...register("issue")}>
                    </textarea>
                    <input className='btn bg-[#050535] w-40 ml-[30%] max-auto text-white my-3' type="submit" value="Submit it" />

                  </form>
                </div>
              </label>
            </label>

          </div>
        </div>
        <div className="col-span-4 flex justify-center">
          <img
            className="h-48 w-72 hidden lg:block"
            src="https://previews.123rf.com/images/feelisgood/feelisgood1709/feelisgood170900838/85757474-flat-speech-bubble-icon-chat-room-sign-forum-internet-button-quick-and-easy-recolorable-shape-isolat.jpg"
            alt=""
          />
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
                  <p className="text-lg text-black">{item?.title ?item?.title :  (item?.issue.slice(0,100)) }</p>
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

export default DiscussionForums;
