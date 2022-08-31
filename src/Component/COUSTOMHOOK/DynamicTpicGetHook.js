import React, { useState } from 'react';

const DynamicTpicGetHook = () => {
    const [data,setData]=useState([]);
    const AlgorithimGet=()=>{
        fetch('http://localhost:5000/TopicAlgo')
        .then(res=>res.json())
        .then(data=>setData(data))
    }
    const Databaseget=()=>{
        fetch('http://localhost:5000/TopicDatabase')
        .then(res=>res.json())
        .then(data=>setData(data))
    }
    const DSget=()=>{
        fetch('http://localhost:5000/TopicDS')
        .then(res=>res.json())
        .then(data=>setData(data))
    }
   return{AlgorithimGet,DSget,Databaseget,data}
};

export default DynamicTpicGetHook;