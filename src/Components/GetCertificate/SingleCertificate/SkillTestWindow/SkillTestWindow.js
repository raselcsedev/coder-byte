import React from 'react';
import CountDown from './CountDown';
import { faCaretRight, faCircleExclamation, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IDELanding from '../../../IDE/IDEMain/IDELanding';
import { Link, useParams } from 'react-router-dom';
import { certificatelist } from '../../certificateList';


const SkillTestWindow = () => {
    const { id } = useParams()

    const certificate =certificatelist?.find(item => id == item?._id)
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
                                    <kbd class="kbd text-white bg-green-600">1</kbd>
                                </span>
                                <span className="text-green-600 font-bold ml-3">Preliminary Test</span>
                                <span className="text-gray-400 text-2xl ml-7 mr-7">
                                    <FontAwesomeIcon icon={faCaretRight} />
                                </span>
                                <span className="text-sm">
                                    <kbd class="kbd text-slate-400 font-bold bg-slate-200">2</kbd>
                                </span>
                                <span className="text-slate-300 font-bold ml-3">Secondary Test</span>
                            </p>
                        </div>

                        <div>
                            <IDELanding></IDELanding>

                        </div>
                    </div>
                </div>
                <div className='w-40 mx-auto'>
                    <Link to={`/secondary-test/${id}`}>
                        <button className='btn btn-info w-40 my-4 mx-auto'>Next Test {'>>'}</button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default SkillTestWindow;