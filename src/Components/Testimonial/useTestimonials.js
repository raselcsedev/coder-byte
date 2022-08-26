import React, { useEffect, useState } from 'react';

const useTestimonials = () => {

    const [testimonials,setTestimonials] =useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/profiles')
        .then(res=>res.json())
        .then(data=>{setTestimonials(data?.review)
        console.log('data',data)
        console.log('review',data?.review)
        console.log('testmony',testimonials)
        ;})
    },[])

    return [testimonials]
};

export default useTestimonials;