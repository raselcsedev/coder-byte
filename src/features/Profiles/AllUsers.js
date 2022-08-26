import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../../Components/Shared/Loading/Loading';
import { fetchUsers } from './ProfileSlice';

const AllUsers = () => {

    const { isLoading, error, profiles } = useSelector(state => state?.profiles)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers())

        console.log('profiles', profiles);
        console.log('error', error);
    }, [])

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>

            <p className='text-[brown] font-semibold my-2 text-xl underline underline-offset-2'> Users List</p>
            <div className='flex'>
                {profiles && <p className='text-[brown] font-semibold my-2 text-lg'>Total Users: {profiles.length} </p>
                }
                {
                    <div class="flex -space-x-2 overflow-hidden mx-4 mb-4">
                        <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://i.ibb.co/0Z2YqQp/20200817-055052.jpg" alt="" />
                        <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://i.ibb.co/0ycQhqS/20201119-150836.jpg" alt="" />
                        <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://res.cloudinary.com/pavel-genuine/image/upload/v1659796320/Photos/wu5ibh8i76k4mghenbwb.jpg" alt="" />
                    </div>
                }
                {profiles.length > 3 && <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>}
            </div>

            <div className='grid md:grid-cols-3 grid-cols-2 gap-4'>
                {
                    profiles.map(profile =>
                        <div className=' flex items-center text-center border p-2  drop-shadow-lg bg-[#e6a1a1]'>
                            <img loading='lazy' className='w-16 h-16 border  m-2 rounded-full'
                                src={profile?.profilePhoto ? profile?.profilePhoto :"https://i.stack.imgur.com/frlIf.png" }
                                alt="" />
                            <div className=''>
                                <p className='text-[black] break-all'>{profile?.displayName}</p>

                                <p className='text-[brown] break-all'>{profile?.email}</p>
                                {/* <p className='text-[black]'> Scholar of Hadith & Fiqh</p> */}

                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default AllUsers;