import axios from 'axios';
import React from 'react';
import { useQuery } from '@tanstack/react-query';

const useTestimonials = () => {

    const url = ``


    // fetch using usual useEffect-fetch
    // useEffect(() => {
    //     fetch(url)
    //         .then(res => res?.json())
    //         .then(data =>setProfile(data))

    // }, [email])


    //using axios & react-query for get 
    const fetcher = async () => {
        const data =  axios.get(url)
        // console.log('axios', (await data).data);

        return (await data).data

        //also could be used[axios retun without destructuring]
        // return data
    }

    let { data: profile, isLoading } = useQuery(["testimonials"], () => fetcher())


    return (
        <div>
            
        </div>
    );
};

export default useTestimonials;