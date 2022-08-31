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
    const uniqueUsers =[...new Set(allUsers)]

    const rankings = []
    for (let i = 0; i < uniqueUsers?.length; i++) {
       rankings.push({
        user:uniqueUsers[i],
        submission:data?.filter(item=>item.user==uniqueUsers[i])?.length,
        success:data?.filter(item=>item.user==uniqueUsers[i] && item.success)?.length
       })
    }

    console.log(rankings,'rankings');

    return (
        <ul className='text-center list-decimal'>
            {
                <ul className='list-decimal'>
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
                            .map((coder, index) => <li className='list-decimal'>{index + 1}{"."}{" "}{coder.user}</li>)

                    }
                </ul>
            }
        </ul>
    );
};

export default LeaderBoard;