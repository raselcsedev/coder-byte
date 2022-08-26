import React from 'react';
import { motion } from "framer-motion"

const Languages = () => {
    return (
        <div className=''>
            <div className='pt-[2%] hidden lg:block h-[70vh] bg-[#171B26]'>
                <div className='w-[85%]'>
                    <div className='flex '>
                        <div className='md:flex justify-end'>
                            <h1 className='mt-10 ml-60 text-white text-6xl font-semibold'>
                                All Your Favorite
                                Stacks Under One Hood
                            </h1>
                        </div>
                        <div className='w-[60%]'>
                            <motion.div 
                            initial={{x:-100}} 
                            whileInView={{x:0}}
                            transition={{duration:1}}
                            className='md:flex justify-end'>
                                <img title='C' className='w-[19.5%] m-4 border-slate-700 border bg-[#171B26]  p-6 rounded' src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1200px-C_Programming_Language.svg.png" alt="" />
                            </motion.div>
                            <motion.div 
                            initial={{x:100}} 
                            whileInView={{x:0}}
                            transition={{duration:1}}
                            className='md:flex justify-end'>
                                <img title='C++' className='w-[19.5%] m-4 border-slate-700 border bg-[#171B26] p-6 rounded' src="https://trunk.io/_next/static/image/_/common/assets/icon-language-cpp.f761f8c490eceb88a3dfcb443a8a5bbc.svg?w=64&q=75" alt="" />
                                <img title='Java' className='w-[19.5%] m-4 border-slate-700 border bg-[#171B26]  p-6 rounded' src="https://trunk.io/_next/static/image/_/common/assets/icon-language-java.2935d0897a9848f683d7cd3e72da63aa.svg?w=32&q=75" alt="" /><img src="" alt="" />
                                <img title='JavaScript' className='w-[19.5%] m-4 border-slate-700 border bg-[#171B26]  p-6 rounded' src="https://trunk.io/_next/static/image/_/common/assets/icon-language-javascript.554eac99feab62d410aa91bcc7a2b42c.svg?w=48&q=75" alt="" />

                            </motion.div>


                        </div>

                    </div>
                    <motion.div
                    initial={{x:-100}} 
                    whileInView={{x:0}}
                    transition={{duration:1}}
                     className='flex justify-end'>
                        <img title='Python' className='w-[7.2%] m-4 border-slate-700 border bg-[#171B26]  p-6 rounded' src="https://trunk.io/_next/static/image/_/common/assets/icon-language-python.48bf8276620dab23fa8f670c57fe1916.svg?w=64&q=75" alt="" />
                        <img title='TypeScript' className='w-[7.2%] m-4 border-slate-700 border bg-[#171B26] p-6 rounded' src="https://trunk.io/_next/static/image/_/common/assets/icon-language-typescript.696d5f2f10af741aa3be0548c71a1f5e.svg?w=48&q=75" alt="" /><img src="" alt="" />
                        <img title='Golang' className='w-[7.2%] m-4 border-slate-700 border bg-[#171B26] p-6 rounded' src="https://trunk.io/_next/static/image/_/common/assets/icon-language-go.cb42f64e4f738cf69da6053464dcbdb1.svg?w=64&q=75" alt="" /><img src="" alt="" />
                        <img title='Kotlin' className='w-[7.2%] m-4 border-slate-700 border bg-[#171B26]  p-6 rounded'
                            src="https://trunk.io/_next/static/image/_/common/assets/icon-language-kotlin.06830b4934a6cbf6039acefba44cc874.svg?w=48&q=75"
                            alt="" /><img src="" alt="" />
                        <img title='Ruby on rails' className='w-[7.2%] m-4 border-slate-700 border bg-[#171B26]  p-6 rounded'
                            src="https://trunk.io/_next/static/image/_/common/assets/icon-language-ruby.1939787c538fc76ff88694e962148b9d.svg?w=64&q=75" alt="" /><img src="" alt="" />

                    </motion.div>
                </div>

            </div>

            <div className='p-[10%]  lg:hidden bg-[#171B26]'>
                <div className='w-[85%]'>
                    <div className='flex-row '>
                        <div>
                            <h1 className='text-[white] text-4xl md:text-6xl mb-4 font-semibold'>
                                All Your Favorite
                                Stacks Under One Hood
                            </h1>
                        </div>
                        <div className='w-[60%]'>
                           <div className='flex'>
                           <img title='C' className='w-[50%] m-4 border-slate-700 border bg-[#171B26]  p-4 rounded' src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1200px-C_Programming_Language.svg.png" alt="" />
                            <img title='C++' className='w-[50%] m-4 border-slate-700 border bg-[#171B26]  p-4 rounded' src="https://trunk.io/_next/static/image/_/common/assets/icon-language-cpp.f761f8c490eceb88a3dfcb443a8a5bbc.svg?w=64&q=75" alt="" />
                            <img title='Java' className='w-[50%] m-4 border-slate-700 border bg-[#171B26]  p-4 rounded' src="https://trunk.io/_next/static/image/_/common/assets/icon-language-java.2935d0897a9848f683d7cd3e72da63aa.svg?w=32&q=75" alt="" /><img src="" alt="" />
                            
                           </div>
                           <div className='flex'>
                           <img title='JavaScript' className='w-[50%] m-4 border-slate-700 border bg-[#171B26]  p-4 rounded' src="https://trunk.io/_next/static/image/_/common/assets/icon-language-javascript.554eac99feab62d410aa91bcc7a2b42c.svg?w=48&q=75" alt="" />
                            <img title='Python' className='w-[50%] m-4 border-slate-700 border bg-[#171B26]  p-4 rounded' src="https://trunk.io/_next/static/image/_/common/assets/icon-language-python.48bf8276620dab23fa8f670c57fe1916.svg?w=64&q=75" alt="" />
                            <img title='TypeScript' className='w-[50%] m-4 border-slate-700 border bg-[#171B26]  p-4 rounded' src="https://trunk.io/_next/static/image/_/common/assets/icon-language-typescript.696d5f2f10af741aa3be0548c71a1f5e.svg?w=48&q=75" alt="" /><img src="" alt="" />
                            
                           </div>
                          <div className='flex'>
                          <img title='Golang' className='w-[50%] m-4 border-slate-700 border bg-[#171B26]  p-4 rounded' src="https://trunk.io/_next/static/image/_/common/assets/icon-language-go.cb42f64e4f738cf69da6053464dcbdb1.svg?w=64&q=75" alt="" /><img src="" alt="" />
                            <img title='Kotlin' className='w-[50%] m-4 border-slate-700 border bg-[#171B26]  p-4 rounded'
                                src="https://trunk.io/_next/static/image/_/common/assets/icon-language-kotlin.06830b4934a6cbf6039acefba44cc874.svg?w=48&q=75"
                                alt="" /><img src="" alt="" />
                            <img title='Ruby on rails' className='w-[50%] m-4 border-slate-700 border bg-[#171B26]  p-4 rounded'
                                src="https://trunk.io/_next/static/image/_/common/assets/icon-language-ruby.1939787c538fc76ff88694e962148b9d.svg?w=64&q=75" alt="" /><img src="" alt="" />

                          </div>
                        </div>


                    </div>

                </div>
               
            </div>

        </div>
        
    );
};

export default Languages;