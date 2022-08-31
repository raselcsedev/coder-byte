import React from 'react';
import CertificatePDF from '../CertificatePDF';

const CongratulationWindow = () => {
    return (
        <div className='app pt-20  my-auto w-[90vw] mx-auto  '>
            <div className=' w-[35vw] mx-auto pb-20'>
                <img src="https://t4.ftcdn.net/jpg/02/55/93/59/240_F_255935996_6lEmMnHTex3k4STYAXMyX8SBjWWAEMnB.jpg" alt="" />
                <h1 className='font-semibold text-[brown] text-center'>We Appreciate Your Participation , <br /> We Will Get Back To You Soon With Your Submission Analytics.</h1>
            </div>
            <div className='col-span-2'>
            <CertificatePDF></CertificatePDF>
            </div>
        </div>
    );
};

export default CongratulationWindow;