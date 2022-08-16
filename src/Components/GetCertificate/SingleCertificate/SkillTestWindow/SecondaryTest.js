import React from 'react';
import { faCaretRight, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CountDown from './CountDown';
import { Link, useParams } from 'react-router-dom';
import { certificatelist } from '../../certificateList';
import IDELanding from '../../../IDE/IDEMain/IDELanding';

const SecondaryTest = () => {

    const { id } = useParams()

    const certificate = certificatelist?.find(item => id == item?._id)
    return (
        <div className='pt-12'>
            <CountDown></CountDown>
            <div className="sm:mx-24 lg:mx-32 pt-5 mb-12">

                <div class="card lg:mx-20 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title text-3xl">{certificate?.name} Skills Certification Test</h2>
                        <p>
                            <span>
                                <FontAwesomeIcon className="text-normal" icon={faClock}></FontAwesomeIcon>
                            </span>
                            <span className="font-light ml-2">90 min</span>
                            <span className="border border-indigo-600 text-xs px-2 ml-2">Algorithms</span>
                            <span className="border border-indigo-600 text-xs px-2 ml-2">Data Structures</span>
                        </p>
                        <div class="divider mt-5 mb-5"></div>
                        <div className="mb-12">
                            <p className="flex items-center">
                                <span className="text-sm">
                                    <kbd class="kbd text-green-600 border-2 border-green-600">1</kbd>
                                </span>
                                <span className="text-green-500 font-bold ml-3">Preliminary Test</span>
                                <span className="text-gray-400 text-2xl ml-7 mr-7">
                                    <FontAwesomeIcon icon={faCaretRight} />
                                </span>
                                <span className="text-sm">
                                    <kbd class="kbd text-white font-bold bg-green-600">2</kbd>
                                </span>
                                <span className="text-green-600 font-bold ml-3">Secondary Test</span>
                            </p>
                        </div>
                        <IDELanding></IDELanding>
                    </div>

                </div>
                <div className='w-40 mx-auto'>
                    <Link to='/congratulation-window'>
                        <button className='btn btn-success w-40 my-4 mx-auto'>Submit</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SecondaryTest;