import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import './Topic.css'
const Topic = () => {
    const navigation = useNavigate();
    const dataprblem = () => {
        navigation('')
    }
    const handlealgo=()=>{
        console.log('hello world ')
        navigation('algo')
    }
    const handleFront=()=>{
        console.log('hello world ')
        navigation('Database')
    }
    const handlebackend=()=>{
        console.log('hello world ')
        navigation('Database')
    }
    const blockchine=()=>{
        console.log('hello world ')
        navigation('Database')
    }
    const handleDatabase=()=>{
        console.log('hello world ')
        navigation('Database')
    }

    return (
        <>
            <div class="drawer drawer-mobile pt-20 ">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content text-center">
                    <Outlet></Outlet>

                    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content flex items-center justify-around h-6/6  ">
                        <div className='h-4/6 flex flex-col justify-between'>
                            <div className='flex'>
                                <input onClick={dataprblem} type="radio" name="radio-1" class="radio mr-5" value='Data structure'  /> Data structure
                            </div>
                            <div className='flex'>
                                <input onClick={handlealgo} type="radio" name="radio-1" class="radio mr-5" value='Algorithm' /> Algorithm
                            </div>
                            <div className='flex'>
                                <input type="radio" name="radio-1" class="radio mr-5" value='BlockChine' /> Blockchain
                            </div>
                            <div className='flex'>
                                <input type="radio" name="radio-1" class="radio mr-5" value='Frontend' /> Frontend
                            </div>
                            <div className='flex'>
                                <input type="radio" name="radio-1" class="radio mr-5" value='backend' /> Backend
                            </div>
                            <div className='flex'>
                                <input onClick={handleDatabase} type="radio" name="radio-1" class="radio mr-5" value='backend' /> Database
                            </div>
                        </div>
                    </ul>
                </div>

            </div>
        </>
    );
};

export default Topic;