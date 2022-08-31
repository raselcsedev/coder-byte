
import SingleTestimonial from './SingleTestimonial';
import './AllTestimonials.css'
import { set, useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import toast, { Toaster } from 'react-hot-toast';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../../Components/Shared/Loading/Loading';
import { fetchUsers } from '../../features/Profiles/ProfileSlice';
import { useState } from 'react';


const AllTestimonials = () => {

    const [review,setReview] =useState('')
    const [user] = useAuthState(auth);

    const email = user?.email

    const { isLoading, error, profiles } = useSelector(state => state?.profiles)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers())

        console.log('profiles', profiles);
        console.log('error', error);
    }, [])

    const profile = profiles.find(item => email== item?.email)

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = async (data) => {

        setReview(data?.review)
        await fetch(`https://coder-access.herokuapp.com/profiles/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data)
        })

        toast.success("Information Updated")
    }
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='w-[80%] mx-auto py-10'>
            <Toaster />

            <div className='w-[40%] mx-auto text-center space-y-5 mb-10'>
                <h1 className='text-4xl font-semibold mt-20'>coderAccess Success Stories</h1>
                <p className='text-slate-600'>We have over hundreds coder on coderAccess. Every now and then, one of them reaches out to share their success story. Below is a collection of some of these stories.</p>

                <label for="my-modal-4" class="btn modal-button">Submit Your Story</label>


                <input type="checkbox" id="my-modal-4" class="modal-toggle" />
                <label for="my-modal-4" class="modal cursor-pointer">
                    <label class="modal-box relative" for="">
                        <div className='h-[40vh]'>
                            <label for="review" class="block text-lg font-semibold  "> Provide Review </label>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <textarea style={{ backgroundColor: '#e8e7e9', border: '#0c0c0c' }}
                                    id="review" name="review" rows="8"
                                    className="shadow-sm  mt-1 block w-full sm:text-sm border  rounded-md p-2"
                                    {...register("review")}>
                                </textarea>
                                <input className='btn bg-[#050535] w-full max-w-xs text-white my-3' type="submit" value="Submit Review" />

                            </form>
                        </div>
                    </label>
                </label>

            </div>

            {
                    <div className="review grid grid-cols-4 ">
                        {
                            review ? <div>
                            <img src={profile?.profilePhoto ? profile?.profilePhoto : "https://i.stack.imgur.com/frlIf.png"} />
                            <div className="myCarousel">
                                <h3>{profile?.displayName}</h3>
                                <h4>{profile?.profession}</h4>
                                <p className="">
                                    { review}
                                </p>
                            </div>
                        </div>
                            :<div>
                            <img src="https://imgdb.net/storage/uploads/42bac8baabb639efbe630d99575f6ff3c2a4cad6f1b86b4d992e97f705ceb56b.png" />
                            <div className="myCarousel">
                                <h3>Shirley Fultz</h3>
                                <h4>React Dev</h4>
                                <p className="">
                                    It's freeing to be able to catch up on customized news and not be
                                    distracted by a social media element on the same site
                                </p>
                            </div>
                        </div>
                        }

                        <div>
                            <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--nSI8V6RE--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/81co8nilff5r9eer3xga.png" />
                            <div className="myCarousel">
                                <h3>Daniel Keystone</h3>
                                <h4>DevOps</h4>
                                <p>
                                    The simple and intuitive design makes it easy for me use. I highly
                                    recommend Fetch to my peers.
                                </p>
                            </div>
                        </div>

                        <div>
                            <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--gRFMHqWs--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/1xwiaya5i7wweic3pz96.png" />
                            <div className="myCarousel">
                                <h3>Jhon Thomas</h3>
                                <h4>Flutter Dev</h4>
                                <p>
                                    I enjoy catching up with Fetch on my laptop, or on my phone when
                                    I'm on the go!
                                </p>
                            </div>
                        </div>
                        <div>
                            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                            <div className="myCarousel">
                                <h3>Theo Sorel</h3>
                                <h4>ML Engineer</h4>
                                <p>
                                    I enjoy catching up with Fetch on my laptop, or on my phone when
                                    I'm on the go!
                                </p>
                            </div>
                        </div>
                    </div>
                }

            <div className='divide-y divide-slate-100 '>
                <div className='review grid grid-cols-4 my-4'>
                {
                    profiles?.map(profile =>
                        profile?.review &&
                        <div>
                            <img src={profile?.profilePhoto ? profile?.profilePhoto : "https://i.stack.imgur.com/frlIf.png"} />
                            <div className="myCarousel">
                                <h3>{profile?.displayName}</h3>
                                <h4>{profile?.profession}</h4>
                                <p className="">
                                    { profile?.review}
                                </p>
                            </div>
                        </div>)
                }
                </div>
              
            </div>
        </div>
    );
};

export default AllTestimonials;