import React from 'react';

const Stories = () => {
    return (
        <div className='lg:mx-12 pt-12 leading-3'>
            <h2 className='text-4xl font-bold'>Your Stories</h2>
            <div className='flex mt-12'>
                <h2>Drafts</h2>
                <h2 className='ml-12'>Published</h2>
                <h2 className='ml-12'>Responses</h2>
            </div>
            <div class="divider mb-7"></div>
            <h2 className='text-sm text-gray-600 lg:ml-5'>You have no stories</h2>
        </div>
    );
};

export default Stories;