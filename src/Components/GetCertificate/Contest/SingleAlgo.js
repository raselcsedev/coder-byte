import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const SingleAlgo = ({ item }) => {

    const [user] = useAuthState(auth);
    const email = user?.email

    const url = `http://localhost:5000/submissions/`


    const fetcher = async () => {
        const data = axios.get(url)
        return (await data).data
    }

    let { data, isLoading } = useQuery(["submissions"], () => fetcher())


    const submittedData = data?.filter(submission => submission?.user == email)
    const expectedData = submittedData?.find(data => data?.data?.title == item?.title)

    return (
        <div>

            <Link to={`/Topic/algo/editor/${item?._id}`}>
                <li className='drop-shadow-lg w-[80%] mx-auto py-4 flex justify-around items-center border border-slate-600 my-1 hover:bg-slate-700 '>
                    <p className=' text-lg font-semibold'>{item?.title}</p>
                    {expectedData ? <Link to={`/Topic/algo/editor/${item?._id}`}><button className=''>{expectedData?.success ? <span className='btn btn-sm bg-[green] flex  justify-end '>Already Solved</span> : <span className='btn btn-sm bg-[red] flex  justify-end'>Unsolved Submission</span>}</button></Link>
                        : <Link to={`/Topic/algo/editor/${item?._id}`}><button className='btn btn-sm btn-success btn-outline flex  justify-end '>Solve it</button></Link>
                    }
                </li>
            </Link>
        </div>
    );
};

export default SingleAlgo;