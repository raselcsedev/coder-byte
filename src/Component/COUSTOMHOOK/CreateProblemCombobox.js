import React, { useState } from 'react';
import './CreateProblemTypeCombobox.css'
const CreateProblemTypeCombobox = ({ HandleType }) => {

    const HandleValue = () => {
        const value = document.getElementById('section-box').value;
        HandleType(value);
    }
    const SelectProperty = <>
        <option className='font-bold' value="">choice the type </option>
        <option value="Hard">Hard</option>
        <option value="Medium">Medium</option>
        <option value="Easy">Easy</option>

    </>
    return (
        <div>

            <div id=''>
                <select onChange={HandleValue} name="" id="section-box">
                    {SelectProperty}
                </select>

            </div>
        </div>
    );
};

export default CreateProblemTypeCombobox;