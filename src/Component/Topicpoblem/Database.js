import React, { useEffect } from 'react';
import DynamicTpicGetHook from '../COUSTOMHOOK/DynamicTpicGetHook';
import Fram from './Fram';

const Database = () => {
    const { Databaseget, data } = DynamicTpicGetHook()
    useEffect(() => {
        Databaseget()
    }, [])
    return (
       
        <div className='pt-20'>
        {
            data?.map(data => <Fram data={data}></Fram>)
        }

    </div>
    );
};

export default Database;