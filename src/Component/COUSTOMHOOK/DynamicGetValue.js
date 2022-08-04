import React, { useState } from 'react';

const DynamicGetValue = () => {
    const [data,setData]=useState([]);
    const FindHard=()=>{
        fetch('http://localhost:5000/challengeHard')
        .then(res=>res.json())
        .then(data=>setData(data))

    }
    const FindEasy=()=>{
        fetch('http://localhost:5000/challengeEasy')
        .then(res=>res.json())
        .then(data=>setData(data))
    }
    
    
    return{data,FindHard,FindEasy}


};

export default DynamicGetValue;