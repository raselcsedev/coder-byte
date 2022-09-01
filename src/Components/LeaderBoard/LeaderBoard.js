import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const LeaderBoard = () => {

    const [user] = useAuthState(auth);
    const email = user?.email

    const url = `http://localhost:5000/submissions/`


    const fetcher = async () => {
        const data = axios.get(url)
        return (await data).data
    }

    let { data, isLoading } = useQuery(["submissions"], () => fetcher())


    if (isLoading) {
        return <p className='text-white'>loading...</p>
    }

    const allUsers = []

    for (let i = 0; i < data?.length; i++) {
        allUsers?.push(data[i]?.user)
    }
    const uniqueUsers = [...new Set(allUsers)]

    const rankings = []
    for (let i = 0; i < uniqueUsers?.length; i++) {
        const submittedData =data?.filter(item => item.user == uniqueUsers[i])
        const successData=submittedData?.filter(item =>item.success)
        console.log(submittedData,'submitted');
        console.log(successData.length,'successData',uniqueUsers[i]);

        const expected ={
            user: uniqueUsers[i],
            submission:submittedData?.length,
            success:successData?.length
        }
        if (successData.length==0) {
            expected.success=0
            
        }
console.log('exp',expected);

        rankings.push(expected)

    }

    console.log(rankings, 'rankings');
    console.log(data,'data');

    return (
        <div className='text-success p-4'>
            <h1 className='text-center text-lg font-semibold mb-8 underline underline-offset-2'>Contest Leader Board</h1>
            {
                <ul className='list-decimal '>
                    {
                        rankings.sort((b, a) => {

                            if (a.success > b.success) {
                                if (a.submission >= b.submission || a.submission < b.submission) {
                                    return 1
                                }

                            }
                            else if (a.success < b.success) {

                                if (a.submission >= b.submission || a.submission < b.submission) {
                                    return -1
                                }
                            }
                            else if (a.success = b.success !== 0) {
                                if (a.submission > b.submission) {
                                    return 1
                                }
                                else if (a.submission < b.submission) {
                                    return -1
                                }
                            }
                            else if (a.success = b.success == 0) {
                                if (a.submission > b.submission) {
                                    return 1
                                }
                                else if (a.submission < b.submission) {
                                    return -1
                                }
                            }
                            else if (a.submission = b.submission) {

                                if (a.success > b.success) {
                                    return 1
                                }
                                else if (a.success < b.success) {
                                    return -1
                                }
                            }
                        })
                            .map((coder, index) => <li className='drop-shadow-lg w-[100%] mx-auto py-4 flex px-2 justify-between items-center border border-slate-600 my-1 hover:bg-slate-700 '>
                                <span className=' text-lg font-semibold'>{index+1}. {coder?.user}</span>
                                <><span className='btn btn-sm bg-[green]'>success: { coder?.success}</span> <span className='btn btn-sm bg-[red] '>submission: { coder?.submission}</span></>

                            </li>)

                    }
                </ul>
            }
        </div>
    );
};

export default LeaderBoard;