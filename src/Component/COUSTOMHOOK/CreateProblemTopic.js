import React from 'react';
import DynamicInsertion from './DynamicInsertion';

const CreateProblemTopic = ({HandleTopic}) => {
    const HandleValue = () => {
        const value = document.getElementById('section-box2').value;
        HandleTopic(value);
        
    }
    


    const SelectProperty = <>
        <option className='font-bold' value="">choice the type </option>
        <option value="DS">DS</option>
        <option value="Algorithm">Algorithm</option>
        <option value="Database">Database</option>
    </>



    return (
        <div>

            <div id=''>
                <select onChange={HandleValue} name="" id="section-box2">
                    {SelectProperty}
                </select>

            </div>
        </div>
    );
};

export default CreateProblemTopic;