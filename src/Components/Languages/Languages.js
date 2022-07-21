import React from 'react';

const Languages = () => {
    return (
        <div className='pt-[10%] h-[100vh] bg-[#171B26]'>
          <div className='w-[85%]'>
          <div className='flex '>
                <div className='flex justify-end'>
                <h1 className='mt-10 ml-60 text-[white] text-6xl font-semibold'>
                    All Your Favorite
                    Stacks Under One Hood
                </h1>
                </div>
                <div className='w-[60%]'>
                    <div className='flex   justify-end'>
                        <img title='C' className='w-[19.5%] m-4 border-slate-700 border bg-[#171B26]  p-6 rounded' src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1200px-C_Programming_Language.svg.png" alt="" />
                    </div>
                    <div   className='flex justify-end'>
                        <img title='C++' className='w-[19.5%] m-4 border-slate-700 border bg-[#171B26] p-6 rounded' src="https://trunk.io/_next/static/image/_/common/assets/icon-language-cpp.f761f8c490eceb88a3dfcb443a8a5bbc.svg?w=64&q=75" alt="" />
                        <img title='Java' className='w-[19.5%] m-4 border-slate-700 border bg-[#171B26]  p-6 rounded' src="https://trunk.io/_next/static/image/_/common/assets/icon-language-java.2935d0897a9848f683d7cd3e72da63aa.svg?w=32&q=75" alt="" /><img src="" alt="" />
                        <img title='JavaScript' className='w-[19.5%] m-4 border-slate-700 border bg-[#171B26]  p-6 rounded' src="https://trunk.io/_next/static/image/_/common/assets/icon-language-javascript.554eac99feab62d410aa91bcc7a2b42c.svg?w=48&q=75" alt="" />

                    </div>
                   

                </div>

            </div>
            
          </div>

        </div>
    );
};

export default Languages;