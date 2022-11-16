import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const SubmissionHistory = () => {
    
    const [user] = useAuthState(auth);
    const email = user?.email

    const url = `hhttps://coder-access-backend.onrender.com/submissions/`


    const fetcher = async () => {
        const data = axios.get(url)
        return (await data).data
    }

    let { data, isLoading } = useQuery(["submissions", email], () => fetcher())

    if (isLoading) {
        return <p className='text-white'>loading...</p>
    }

    const expectedData = data?.filter(item => item.user == email)

    return (
        <div className='text-white'>

            <h1 className=' font-semibold'>
                {expectedData?.length ? `Total submissions : ${expectedData?.length}` : "No submission history available"}
            </h1>
            {
                <ol className='list-decimal'>  {
                    expectedData?.map(item =>
                        <Link to={`/Topic/algo/editor/${item?.data?._id}`}>
                            <li className='drop-shadow-lg w-[80%] mx-auto py-4 flex justify-around items-center border border-slate-600 my-1 hover:bg-slate-700 '>
                                <p className=' text-lg font-semibold'>{item?.data?.title}</p>
                                {data?.success ? <Link to={`/Topic/algo/editor/${item?.data?._id}`}><button className='btn btn-sm bg-[green]'>Solved Submission</button></Link>
                                    : <Link to={`/Topic/algo/editor/${item?.data?._id}`}><button className='btn btn-sm bg-[red]'>Unsolved Submission</button></Link>
                                }
                            </li>
                        </Link>
                    )
                }</ol>
            }
        </div>
    );
};

export default SubmissionHistory;