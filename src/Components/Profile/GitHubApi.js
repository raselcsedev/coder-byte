import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

const GitHubApi = ({github}) => {
const [userName, setUserName] =useState('pavel-genuine')

    const url =`https://api.github.com/users/${github}`

    const fetcher = async () => {
        const data = axios.get(url)
        return (await data).data
    }

    let { data:user, isLoading } = useQuery(["profile", userName], () => fetcher())

    if (isLoading) {
        return <p>loading...</p>
    }

    console.log('user',user);

    return (
        <div>
        <div className='w-[30vw] mx-auto space-y-2 bg-slate-700 text-white p-6 rounded'>
            <h1 className='text-xl font-semibold'>GitHub Profile</h1>
            <img className='w-20 h-20 rounded-full border-[brown]' src={user?.avatar_url} alt="" />
            <p className='text-md font-bold'>{user?.name}</p>
            <p><span className='font-semibold'>Bio :</span>  {user?.bio}</p>
            <p><span className='font-semibold'>Total Repositories : </span>  {user?.public_repos}</p>
           <p><span className='font-semibold'> Followers : </span> {user?.followers}</p>
           <p><span className='font-semibold'> Followings :</span> {user?.following}</p>
           
        </div>
        </div>
    );
};

export default GitHubApi;