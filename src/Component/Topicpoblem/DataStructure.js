import React, { useEffect, useState } from 'react';
import Fram from './Fram';

const DataStructure = () => {
    const [sproblem,setproblem]=useState([])
    useEffect(() => {
        fetch('http://localhost:3000/DataS.JSON')
            .then(res => res.json())
            .then(data => setproblem(data))
    }, [])
    return (
        <div>
           {
           
                sproblem.map(data=><Fram data={data} ></Fram>)
           
           }
        </div>
    );
};

export default DataStructure;