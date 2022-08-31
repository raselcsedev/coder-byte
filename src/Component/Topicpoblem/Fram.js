import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faTerminal } from '@fortawesome/free-solid-svg-icons';
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PassingPrblm } from '../../App';



const Fram = ({ data}) => {

    return (
        <div>
            <div className='border py-20 p-5  flex justify-around mx-12 '>
                <FontAwesomeIcon className='text-5xl' icon={faTerminal}></FontAwesomeIcon>
                <div className='flex justify-between0 items-center'>
                    <div>

                        <h1 className='text-xl '>{data.title}</h1>
                        <p>{data.type}</p>
                    </div>
                </div>
                <Link to={`editor/${data?._id}`}><button className="btn">Solve me </button></Link>
            </div>
        </div>
    );
};

export default Fram;