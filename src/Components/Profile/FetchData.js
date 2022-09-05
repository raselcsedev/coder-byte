import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { setConstantValue } from 'typescript';
import auth from '../../firebase.init';

const FetchData = () => {
    const url = "http://localhost:5000/getaddcard";
    const [user] = useAuthState(auth);
    const email = user?.email;
    const [value, setvalue] = useState([]);

    const getAdditems=()=>{

        fetch(url,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({ email })
            })
            .then(res => res.json())
            .then(data => setvalue(data))
           

    }
    // const getAdditems=()=>{

    //     fetch(url,
    //         {
    //             headers: {
    //                 'Accept': 'application/json',
    //                 'Content-Type': 'application/json'
    //             },
    //             method: "POST",
    //             body: JSON.stringify({ email })
    //         })
    //         .then(res => res.json())
    //         .then(data => setvalue(data))

    // }







        return {getAdditems,value };

};

export default FetchData;