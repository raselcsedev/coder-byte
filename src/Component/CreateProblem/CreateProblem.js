import React, { useState } from 'react';
import CreateProblemTypeCombobox from '../COUSTOMHOOK/CreateProblemCombobox';
import CreateProblemTopic from '../COUSTOMHOOK/CreateProblemTopic';
import DynamicInsertion from '../COUSTOMHOOK/DynamicInsertion';
// import CreateProblemTypeCombobox from '../COUSTOMHOOK/CreateProblemTypeCombobox';

const CreateProblem = () => {
    // const [title, setptitle] = useState([]);
    // const [problem, setdis] = useState([]);
    // const [pnuminput, setnuminput] = useState([]);
    // const [type, setType] = useState([]);
    // const [topic, setopic] = useState([]);


    const [title, setptitle] = useState();
    const [problem, setdis] = useState('');
    const [pnuminput, setnuminput] = useState('');
    const [type, setType] = useState('');
    const [topic, setopic] = useState('');





    const { Algorithim,DS,Database} = DynamicInsertion();

    const HandleUploadingProblem = (e) => {
        const problems = { title, problem , pnuminput, type, topic };
        if (topic === "Algorithm") {
            Algorithim(problems);
        }
        if (topic === "DS") {
            DS(problems);
        }
        if (topic === "Database") {
            Database(problems);
        }
        console.log(problems)


        // fetch("http://localhost:5000/uploadproblem",
        //     {
        //         headers: {

        //             'Content-Type': 'application/json'
        //         },
        //         method: "POST",
        //         body: JSON.stringify(problem)
        //     })
        //     .then(res => res.json())
        //     .then(data => console.log(data))
        //     .catch(error => console.log(error))

        document.getElementById('title').value = "";
        document.getElementById('inputNumber').value = "";
        document.getElementById('dis').value = "";

    }
    const HandleType = (value) => {
        setType(value)
        console.log(value);
    }

    const HandleTopic = (value) => {
        setopic(value)
        console.log(value);
    }



    return (
        <>
            <section>
                <section className='grid grid-cols-2'>

                    <div className='mt-20 mx-36'>
                        <div>
                            <h1>Problem title</h1>
                            <input onChange={(e) => setptitle(e.target.value)} id="title" type="text" placeholder="Type here" class=" mt-3 input input-bordered w-full max-w-xs" />
                        </div>
                        <div className='mt-12'>
                            <h1>Problem Discription</h1>
                            <textarea onChange={(e) => setdis(e.target.value)} id="dis" class="textarea textarea-bordered w-80 px-8 mt-5" placeholder="write your problem"></textarea>
                        </div>
                        <div className='mt-10 mb-5'>
                            <h1>Number of inputs</h1>
                            <input onChange={(e) => setnuminput(e.target.value)} id="inputNumber" type="text" placeholder="Input number" class=" mt-3 input input-bordered w-full max-w-xs" />
                        </div>


                    </div>

                    <div className='mt-20'>
                        <div className='flex justify-around'>
                            <h1 className='text-xl font-bold'>Select the type of problem :  </h1>
                            <CreateProblemTypeCombobox HandleType={HandleType}></CreateProblemTypeCombobox>
                        </div>
                        <div className='flex justify-around mt-36'>
                            <h1 className='text-xl font-bold'>Select the topic of problem :  </h1>
                            <CreateProblemTopic HandleTopic={HandleTopic}></CreateProblemTopic>
                        </div>

                    </div>
                </section>

                <div className='text-center'>
                    <div onClick={(e) => HandleUploadingProblem(e)} className="btn mb-10  ">submit</div>
                </div>
            </section>
        </>
    );
};

export default CreateProblem;