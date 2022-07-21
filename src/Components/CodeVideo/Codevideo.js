import React from 'react';
import video from '../../code-video.mp4'

const Codevideo = () => {
    return (
        <div className='bg-[#171B26] h-[120vh] pt-[5%]'>
            <div className='w-[60%] mx-auto'>
               
                <div>
                    <div >
                       
                        
                    </div>
                </div>

                <video className='rounded-xl border-2 border-slate-400 ' src={video} autoPlay loop muted></video>
            </div>
        </div>
    );
};

export default Codevideo;