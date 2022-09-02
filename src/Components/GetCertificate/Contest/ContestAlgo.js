import React, { useEffect, useState } from 'react';
import Modal from 'react-responsive-modal';
import { Link } from 'react-router-dom';
import DynamicTpicGetHook from '../../../Component/COUSTOMHOOK/DynamicTpicGetHook';
import CountDownContest from '../CountDownContest';
import SingleAlgo from './SingleAlgo'
import LeaderBoard from '../../LeaderBoard/LeaderBoard'

const ContestAlgo = () => {

    const { AlgorithimGet, data } = DynamicTpicGetHook()
    useEffect(() => {
        AlgorithimGet()
    }, [])

    console.log(data);

    const [open, setOpen] = useState(false);


    return (
        <div className=' h-[100vh] pt-20 border bg-slate-800 relative '>
            <CountDownContest></CountDownContest>

            <button onClick={() => setOpen(true)}  className='btn btn-sm btn-success absolute top-[25%] right-[30%]'>Rankings</button>
            

            <Modal classNames={{
                            overlay: 'customOverlay',
                            modal: 'customModal',
                        }} open={open} onClose={() => setOpen(false)}>
                            <LeaderBoard></LeaderBoard>
                        </Modal>
            
            <ul className='text-success list-disc'>  {
                data?.map(item =><SingleAlgo item={item} key={item?._id} ></SingleAlgo>)
            }</ul>
        </div>
    );
};

export default ContestAlgo;