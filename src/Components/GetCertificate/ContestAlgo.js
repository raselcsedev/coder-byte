import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import DynamicTpicGetHook from '../../Component/COUSTOMHOOK/DynamicTpicGetHook';
import CountDownContest from './CountDownContest';
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
            <ol className='text-success list-decimal'>  {
                data?.map(item =>
                    <Link to={`/Topic/algo/editor/${item?._id}`}>
                        <li className='drop-shadow-lg w-[80%] mx-auto py-4 flex justify-around items-center border border-slate-600 my-1 hover:bg-slate-700 '>
                            <p className=' text-lg font-semibold'>{item?.title}</p>
                            <Link to={`/Topic/algo/editor/${item?._id}`}><button className='btn btn-sm btn-success'>Solve It</button></Link>
                        </li>
                    </Link>
                )
            }</ol>
        </div>
    );
};

export default ContestAlgo;