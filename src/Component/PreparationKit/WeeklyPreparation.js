import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTerminal } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import ProblemHook from '../COUSTOMHOOK/ProblemHook';
import Filter from './Filter';

const WeeklyPreparation = () => {
    // const [problem, setproblem] = useState([]);
    let { data: problem, setdata } = ProblemHook();
    const navigate = useNavigate();




    const AproblemOpen = (id) => {
        console.log(id)
        navigate(`/weeklypre/${id}`)
    }


    const filteEasyproblem = (type) => {
        if (type !== 'All') {

            const data = problem.filter(data => data.type === type)
            setdata(data)
            console.log(data)
        }
        else {
            fetch('DemoProblem.JSON')
            .then(res => res.json())
            .then(data => setdata(data))
            
        }

    }

    return (
        <>
            <section className='grid grid-cols-1 lg:grid-cols-3 pt-20 h-[70vh]'>
                <div className='mx-5 lg:mx-36 col-span-2 lg:col-span-2'>
                    {
                        problem?.map(data => <>
                            <div className='border my-10 p-5  flex justify-around '>
                                <FontAwesomeIcon className='text-3xl lg:text-5xl' icon={faTerminal}></FontAwesomeIcon>
                                <div className='flex justify-between0 items-center'>
                                    <div>

                                        <h1 className='text-xl '>{data.title}</h1>
                                        <p>{data.type}</p>
                                    </div>
                                </div>
                                <div onClick={() => { AproblemOpen(data.id) }} className="btn">Solve me </div>
                            </div>
                        </>)
                    }

                </div>
                <div className='mx-5'>
                   
                    <Filter filteEasyproblem={filteEasyproblem}></Filter>
                </div>

            </section>


        </>
    );
};

export default WeeklyPreparation;