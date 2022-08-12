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
            {profiles && <p className='text-[brown] font-semibold my-8 text-lg'>Total Users: {profiles.length} </p>


            }

          <div className='grid md:grid-cols-4 grid-cols-2 gap-2'>
          {
                profiles.map(profile =>
                    <div className='flex  flex-col items-center text-center border p-2 border-[brown] '>
                        <img loading='lazy' className='w-20 h-20 border border-[brown] p-1 mt-1 rounded-full'
                            src={profile?.profilePhoto}
                            alt="" />
                        <p className='mb-1 '>
                            <p className='text-[gray] break-all'>{profile?.displayName}</p>

                            <p className='text-[brown] break-all'>{profile?.email}</p>
                            {/* <p className='text-[black]'> Scholar of Hadith & Fiqh</p> */}

                        </p>
                    </div>
                )
            }
          </div>
        </div>
    );
};

export default AllUsers;