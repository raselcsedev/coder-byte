import React from 'react';

const Notifications = () => {
    return (
        <div className='lg:mx-12 pt-12 leading-3'>
            <h2 className='text-4xl font-bold'>Notifications</h2>
            <div className='flex mt-12'>
                <h2>All</h2>
                <h2 className='ml-12'>Response</h2>
            </div>
            <div class="divider mb-7"></div>
            <h2 className='text-sm text-gray-600 lg:ml-5'>You're all caught up.</h2>
        </div>
    );
};

export default Notifications;