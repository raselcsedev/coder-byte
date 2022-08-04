import React, { useState } from 'react';

const Filter = ({ filteEasyproblem }) => {
    const [easydata, easysetdata] = useState('');
    const allhandle = () => {
        if (easydata) {

            filteEasyproblem(easydata)
        }

    }

    return (
        <div>
            <h1 className='text-center text-5xl font-bold mb-10'>Select the type</h1>
            <div className=''>
                <div><input type="radio" name="radio-1" class="radio" value='Hard' onClick={(e) => easysetdata(e.target.value)} /> Hard problem</div>
                <div><input type="radio" name="radio-1" class="radio" value='Easy' onClick={(e) => easysetdata(e.target.value)} /> Easy problem </div>
            
            </div>
            <div onClick={allhandle} className="btn mt-12">Filter</div>

            {/* <section className='flex justify-center'>
                <div class="btn-group">
                    <button class="btn">1</button>
                    <button class="btn btn-active">2</button>
                    <button class="btn">3</button>
                    <button class="btn">4</button>
                </div>
            </section> */}
        </div>
    );
};

export default Filter;