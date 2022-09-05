import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FetchData from '../Profile/FetchData';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Additemsview = () => {
    const paras = useParams();
    const email = paras?.email;

    // const { getAdditems, value } = FetchData();
    const [value, setvalue] = useState([]);
    useEffect(() => {
        // getAdditems();
        console.log(email);
        const url = `http://localhost:5000/additemsview/${email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setvalue(data))

    }, [])

    const svg = <>
        <svg width="16" height="20" fill="currentColor">
            <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
        </svg>

    </>



    const Deleteitems = (data) => {
        let proccess = window.confirm("Are you sure ?");
        if (proccess) {
            const id = data._id;
            const url = `http://localhost:5000/additemsview/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => console.log(data))

            const newValue = value.filter(data => data._id !== id)
            setvalue(newValue);
        toast.info("Successfully delete items") 
        }

    }

    return (
        <>
            <div className='mx-20 pt-36'>
                {
                    value.map(data => <>
                        <div key={data._id}>
                            <article className="flex my-3 flex-col md:flex-row md:items-start space-x-6">
                                <img loading='lazy' src={data?.course?.course_img} alt="" className="flex-none w-60 border-2  rounded-md bg-slate-100" />
                                <div className="min-w-0 relative flex-auto">
                                    <h2 className="font-semibold text-slate-900 truncate pr-20">{data?.course.title}</h2>
                                    <div className="flex-none w-full  font-normal">
                                        <dt className="sr-only">teacher</dt>
                                        <dd className="text-slate-400"> Instructor :"{data.course.instructor}"</dd>
                                    </div>
                                    <div className='flex md:hidden flex-col items-center text-center '>
                                        <img loading='lazy' className='w-20 h-20 border border-[brown] p-1 mt-1 rounded-full'
                                            alt="" />
                                        <p className='mb-1 '>
                                            <p className='text-[gray]'>Guided by </p>
                                            <p className='text-[brown]'>"hello world</p>
                                        </p>
                                    </div>
                                    <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium">

                                        <div className='flex hidden md:block flex-col justify-center items-center absolute top-0 right-0'>

                                            <div className=" flex flex-col items-center justify-center">
                                                <h1 className='font-semibold text-[gray]'>Guided by</h1>
                                                <img loading='lazy' className='w-20 h-20 border border-[brown] p-1 mt-1 rounded-full' src={data?.course?.instructor_img} alt="" />
                                                <dd>{data.course.instructor} </dd>
                                            </div>
                                        </div>
                                        <div className=' flex md:flex-col flex-row'>
                                            <dt className="sr-only">Rating</dt>
                                            <dd className="px-1.5 ring-1 ring-slate-200 rounded">
                                                Duration: {data?.course.duration}
                                            </dd>
                                            <dd className="px-1.5 ring-1 ring-slate-200 rounded">
                                                Lectures: "{data?.course?.lecture_quantity}"
                                            </dd>
                                        </div>
                                        <div className="flex w-full mt-2 font-normal">
                                            {svg}
                                            {svg}
                                            {svg}
                                            {svg}
                                            {svg}
                                        </div>
                                        <div className="flex-none w-full mt-2 font-normal mt-5">

                                            <button onClick={() => Deleteitems(data)} className='btn btn-xs border-none bg-[#000000]'>Delete</button>
                                            <button className='btn btn-xs border-none bg-[#000000]'>payment</button>
                                        </div>
                                    </dl>
                                </div>
                            </article>
                            <div class="divider"></div>
                        </div>


                    </>)}

            </div>
        <ToastContainer />
        </>


    );
};

export default Additemsview;