import React, { useEffect, useState } from 'react';
import Fram from './Fram';

const Algo = () => {
    const [sproblem,setproblem]=useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/ALgoproblem.JSON')
        .then(res=>res.json())
        .then(data=>setproblem(data))
    },[])
    return (
        <div className='pt-20'>
            {
                 sproblem.map(data=><Fram data={data}></Fram>)
            }
           
        </div>
    );
};

export default Algo;