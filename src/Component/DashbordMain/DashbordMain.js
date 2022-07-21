import React from 'react';
import HomeDashbord from '../RandomSection/HomeDashbord';
import './DashbordMain.css'
const DashbordMain = () => {
    return (
            <div className='DashbordMainContainer w-[80%] mx-auto pb-36'>
                <h1 className='font-bold text-5xl mt-36 mb-20 text-center'>Your Preparation</h1>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                    <section className=''>
                        <div className='rounded-lg  lg:w-6/6  border-solid border-4 p-5 lg:p-7 shadow-2xl '>
                            <p className='text-[#8e9494]'>Lorem ipsum.</p>
                            <h1 className='font-bold text-3xl my-3'>Intervire preparation Kit</h1>
                            <p className='text-[#757979]'> <small> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam vitae maxime ex et suscipit sit, non illum iste similique? </small></p>
                            <div className="btn my-2">Button</div>
                        </div>
                    </section>
                    <section className=''>
                        <div className='rounded-lg  lg:w-6/6  border-solid border-4 p-5 lg:p-7 shadow-2xl '>
                            <p className='text-[#8e9494]'>Lorem ipsum.</p>
                            <h1 className='font-bold text-3xl my-3'>Spacial preparation Kit </h1>
                            <p className='text-[#757979]'> <small> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam vitae maxime ex et suscipit sit, non illum iste similique? </small></p>
                            <div className="btn my-2">Button</div>
                        </div>
                    </section>


                </div>
                <section className='mt-20'>
                    <h1 className='mb-10 mt-36 font-bold text-5xl text-center '>Certification</h1>
                    <section className='md:flex flex-row'>
                        <div>
                            <div class="card  w-[100%] md:w-96 bg-white border text-neutral-content shadow-2xl">
                                <div class="card-body">
                                    <h2 class="card-title text-black text-2xl">Problem Solving (Basic)</h2>
                                    <h1 className='text-[#757979] '>Increase Your programing skill by contest</h1>
                                    <button class=" m bg-transparent w-2/5 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                        Learn more
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="card w-[100%] md:w-96  my-4 md:my-0 md:mx-4 bg-white border text-neutral-content shadow-2xl">
                                <div class="card-body">
                                    <h2 class="card-title text-black text-2xl  ">Contest</h2>
                                    <h1 className='text-[#757979] '>Evaluate your programing skill</h1>
                                    <button class="w-3/6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">  Read More
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="card w-[100%] md:w-96  bg-white border text-neutral-content shadow-2xl">
                                <div class="card-body">
                                    <h2 class="card-title text-black text-2xl">Job (submit Your reusme)</h2>
                                    <h1 className='text-[#757979] '>Find the suitable dream job</h1>
                                    <button class=" m bg-transparent w-2/5 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                        Learn more
                                    </button>
                                </div>
                            </div>
                        </div>

                    </section>

                </section>

            </div>
       
    );
};

export default DashbordMain;