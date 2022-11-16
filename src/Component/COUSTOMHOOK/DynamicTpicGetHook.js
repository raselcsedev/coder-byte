import React, { useState } from 'react';

const DynamicTpicGetHook = () => {
        const [data, setData] = useState([]);
        const url = "https://coder-access-backend.onrender.com/TopicAlgo"
        const AlgorithimGet = () => {
                fetch('https://coder-access-backend.onrender.com/TopicAlgo')
                        .then(res => res.json())
                        .then(data => setData(data))
        }
        const Databaseget = () => {
                fetch('https://coder-access-backend.onrender.com/TopicDatabase')
                        .then(res => res.json())
                        .then(data => setData(data))
        }
        const DSget = () => {
                fetch('https://coder-access-backend.onrender.com/TopicDS')
                        .then(res => res.json())
                        .then(data => setData(data))
        }
        return { AlgorithimGet, DSget, Databaseget, data }
};

export default DynamicTpicGetHook;