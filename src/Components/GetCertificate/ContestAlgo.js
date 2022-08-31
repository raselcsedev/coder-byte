import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import DynamicTpicGetHook from '../../Component/COUSTOMHOOK/DynamicTpicGetHook';
import CountDownContest from './CountDownContest';
import SingleAlgo from './SingleAlgo';
import CountDown from './SingleCertificate/SkillTestWindow/CountDown';

const ContestAlgo = () => {

    const { AlgorithimGet, data } = DynamicTpicGetHook()
    useEffect(() => {
        AlgorithimGet()
    }, [])

    console.log(data);

    return (
        <div className=' h-[100vh] pt-20 border bg-slate-800 '>
            <CountDownContest></CountDownContest>
            <ul className='text-success list-disc'>  {
                data?.map(item =><SingleAlgo item={item} key={item?._id} ></SingleAlgo>)
            }</ul>
        </div>
    );
};

export default ContestAlgo;