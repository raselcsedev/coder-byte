import React, { useEffect, useState } from 'react';

const useCourses = () => {


    const [courses,setCourses] =useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/courses')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[])

    return [courses]
};

export default useCourses;