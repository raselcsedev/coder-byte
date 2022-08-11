import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PassingPrblm } from '../../App';
import Fram from './Fram';

const DataStructure = () => {
    const [ProblemData, SetProblem] = useContext(PassingPrblm)
    const [sproblem, setproblems] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/DataS.JSON')
            .then(res => res.json())
            .then(data => setproblems(data))
    }, [])

    const navigate = useNavigate();
    const NumberOfPrblemChick = (Data) => {
        SetProblem(Data);
        navigate('/editor');

    }

    return (
        <div className='pt-20'>
            {

                sproblem.map(data => <Fram  NumberOfPrblemChick={NumberOfPrblemChick} data={data} ></Fram>)

            }
        </div>
    );
};

export default DataStructure;