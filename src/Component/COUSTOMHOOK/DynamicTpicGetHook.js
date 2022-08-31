import React, { useState } from 'react';

const DynamicTpicGetHook = () => {
    const [data,setData]=useState([]);
    const url="http://localhost:5000/TopicAlgo"
    const AlgorithimGet=()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setData(data))
    }
    const Databaseget=()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setData(data))
    }
    const DSget=()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setData(data))
    }
   return{AlgorithimGet,DSget,Databaseget,data}
};

export default DynamicTpicGetHook;