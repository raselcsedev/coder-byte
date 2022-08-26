import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { PassingPrblm } from '../../App';
import DynamicTpicGetHook from '../COUSTOMHOOK/DynamicTpicGetHook';
import Fram from './Fram';

const Algo = () => {
    
    // const [ProblemData, SetProblem] = useContext(PassingPrblm)
    // console.log("prblem= ", ProblemData);



    const { AlgorithimGet, data } = DynamicTpicGetHook()
    useEffect(() => {
        AlgorithimGet()
    }, [])



    const navigate = useNavigate();
    const NumberOfPrblemChick = (Data) => {
        // SetProblem(Data);
        navigate('/editor');

    }





    return (
        <div className='pt-20'>
            {
                data?.map(data => <Fram NumberOfPrblemChick={NumberOfPrblemChick} data={data}></Fram>)
            }

        </div>
    );
};

export default Algo;