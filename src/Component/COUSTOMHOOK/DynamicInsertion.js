import React from 'react';

const DynamicInsertion = () => {



    const Algorithim = (id) => {
        console.log("Algo " + id)
        fetch("http://localhost:5000/Algorithim",
            {
                headers: {

                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(id)
            })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))
    }



    const Database = (id) => {
        console.log("Database" + id)
        fetch("http://localhost:5000/Database",
            {
                headers: {

                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(id)
            })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))
    }
    const DS = (id) => {
        console.log("DS" + id)
        fetch("http://localhost:5000/DS",
            {
                headers: {

                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(id)
            })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))
    }
    return { Algorithim, Database, DS }

};

export default DynamicInsertion;