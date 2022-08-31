import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const LeaderBoard = () => {



    const leaderboard = [
        {
            name: 'ccc',
            submission: 5,
            success: 2
        }
        ,
        {
            name: 'bbb',
            submission: 3,
            success: 1
        }
        ,

        {
            name: 'qqq',
            submission: 2,
            success: 1
        }
        ,
        {
            name: 'aaa',
            submission: 1,
            success: 1
        }
        ,
        {
            name: 'ppp',
            submission: 5,
            success: 0
        }
        ,
        {
            name: 'sss',
            submission: 1,
            success: 1
        }
        ,
        {
            name: 'vvv',
            submission: 5,
            success: 5
        }
        ,
        {
            name: 'www',
            submission: 5,
            success: 3
        }
        ,
        {
            name: 'yyy',
            submission: 4,
            success: 3
        }
        ,
        {
            name: 'xxx',
            submission: 4,
            success: 0
        }
    ]






    // const [user] = useAuthState(auth);
    // const email = user?.email

    const url = `http://localhost:5000/submissions/`


    // const fetcher = async () => {
    //     const data = axios.get(url)
    //     return (await data).data
    // }

    // let { data, isLoading } = useQuery(["submissions", email], () => fetcher())

    // if (isLoading) {
    //     return <p className='text-white'>loading...</p>
    // }


    return (
        <ul className='text-center list-decimal'>
            {
                <ul className='list-decimal'>
                    {
                        leaderboard.sort((b,a ) => {

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
                            else if (a.success = b.success !==0) {
                                if (a.submission > b.submission) {
                                    return 1
                                }
                                else if (a.submission < b.submission) {
                                    return -1
                                }
                            }
                            else if (a.success = b.success==0) {
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
                            .map((coder,index) =><li className='list-decimal'>{index+1}{"."}{" "}{coder.name}</li>)

                    }
                </ul>
            }
        </ul>
    );
};

export default LeaderBoard;