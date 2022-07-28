import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faTerminal } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Fram = ({ data }) => {
    const navigate=useNavigate();
    const AproblemOpen = (id) => {
        console.log(id)
        navigate(`/weeklypre/${id}`)
    }
    return (
        <div>
            <div className='border my-10 p-5  flex justify-around mx-12 '>
                <FontAwesomeIcon className='text-5xl' icon={faTerminal}></FontAwesomeIcon>
                <div className='flex justify-between0 items-center'>
                    <div>

                        <h1 className='text-xl '>{data.title}</h1>
                        <p>{data.type}</p>
                    </div>
                </div>
                <div onClick={() => { AproblemOpen(data.id) }} className="btn">Solve me </div>
            </div>
        </div>
    );
};

export default Fram;