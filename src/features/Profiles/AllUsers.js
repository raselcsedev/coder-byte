import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux/es/exports';

const AllUsers = () => {

    const [profiles,setProfiles]=useState([])

   

    useEffect(() => {
        fetch(`http://localhost:5000/profiles`)
            .then(res => res.json())
            .then(data => setProfiles(data))
              
           
    }, [])

    return (
        <div>

            all users {profiles.length}


        </div>
    );
};

export default AllUsers;