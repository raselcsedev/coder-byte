import React, { useEffect, useState } from 'react';
import DynamicTpicGetHook from '../COUSTOMHOOK/DynamicTpicGetHook';
import Fram from './Fram';

const Algo = () => {
    // const [sproblem,setproblem]=useState([])
    const {AlgorithimGet,data}=DynamicTpicGetHook()
    useEffect(()=>{
        AlgorithimGet()
    },[])
    // useEffect(()=>{
    //     fetch('http://localhost:3000/ALgoproblem.JSON')
    //     .then(res=>res.json())
    //     .then(data=>setproblem(data))
    // },[])
    console.log(data);
    return (
        <div className='pt-20'>
            {
                 data?.map(data=><Fram data={data}></Fram>)
            }
           
        </div>
    );
};

export default Algo;