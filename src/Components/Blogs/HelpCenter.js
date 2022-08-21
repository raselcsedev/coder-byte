import React from 'react';

const HelpCenter = () => {
    return (
        <div>
            <h2 className="hidden lg:block text-xl font-semibold mb-8 text-gray-700">Welcome to the coderAccess Help Center!</h2>
            <div className='px-2 border-2'>
      <div className='text-center pb-8'>
        <h1 className='text-xl font-semibold mt-3'>Contact Us</h1>
      </div>
      <div className='grid grid-cols-1 justify-items-center gap-5'>
        <input
          type='text'
          placeholder='Email Address'
          className='input w-full max-w-md border border-blue-400'
        />
        <input
          type='text'
          placeholder='Subject'
          className='input w-full max-w-md border border-blue-400'
        />
        <textarea
          className='textarea w-full max-w-md border border-blue-400'
          placeholder='Your message'
          rows={6}
        ></textarea>
        <button class="py-2 px-6 border rounded border-green-600 text-white bg-green-600 font-bold mt-2 mb-3">Submit</button>
      </div>
    </div>
        </div>
    );
};

export default HelpCenter;