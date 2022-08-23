import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "./Preparation.css"
const PreparationKit = () => {
    const navigate=useNavigate();
    const weeklypre = () => {
        console.log("hello world")
        navigate('/weeklypre');
        
    }
    const TopicPreparation = () => {
        console.log("hello world")
        navigate('/Topic');
        
    }


    return (
        <>
            <div className='mx-5 lg:mx-36 md:h-[90vh] h-[110vh]'>
                <h1 className='text-xl lg:text-5xl font-bold pt-20'>Preparation kit</h1>
                <section className='mt-10 grid grid-cols-1 lg:grid-cols-2'>
                    <div className='border  p-5 lg:p-12'>
                        <div className=''>
                            <h1 className='text-2xl lg:text-4xl font-serif font-bold'>Weekly preparation challenges</h1>
                            <p className='py-5'>This Interview Preparation Kit has challenges curated by our experts for you to prepare and ace your interview in a week's time.</p>
                            <div onClick={weeklypre} className="btn">Explore more</div>
                        </div>
                    </div>
                    <div className='border  p-5 lg:p-12'>
                        <div className=''>
                            <h1 className='text-2xl lg:text-4xl font-serif font-bold'>TOPIC challenges</h1>
                            <p className='py-5'>Explore and add your first skill to get started. coderAccess offers a variety of skills, tracks and tutorials for you to learn and improve.</p>
                            <div onClick={TopicPreparation}  className="btn">Explore more</div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default PreparationKit;