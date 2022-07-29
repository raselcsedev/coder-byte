import React, { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const ProblemHook = () => {

    const [data, setdata] = useState([]);
    useEffect(() => {
        fetch('DemoProblem.JSON')
            .then(res => res.json())
            .then(data => setdata(data))
    }, [])
    return { data, setdata };

};

export default ProblemHook;