import React, { useEffect, useState } from 'react';

const Temp = () => {
    const [btnstate,setbtnstate] =useState(false);
    return (
        <div className='h-screen bg-slate-900 flex justify-center items-center'>
            {
                btnstate?
                <>
                <div onClick={()=>setbtnstate(false)} className="btn btn-warning">Done</div>

                </>
                :
                <>
                <div onClick={()=>setbtnstate(true)} className="btn btn-warning">submit</div>
                </>
            }
        </div>
    );
};

export default Temp;