import React from 'react';

const Course = (props) => {

    const { _id,instructor,course_img ,instructor_img, title, description, duration, lecture_quantity, topic } = props.course



    return (
        <div>
            <article className="flex my-3 flex-col md:flex-row md:items-start space-x-6">
                <img loading='lazy' src={course_img} alt="" className="flex-none w-60 border-2  rounded-md bg-slate-100" />
                <div className="min-w-0 relative flex-auto">
                    <h2 className="font-semibold text-slate-900 truncate pr-20">{title}</h2>



                    <div className="flex-none w-full  font-normal">
                        <dt className="sr-only">teacher</dt>
                        <dd className="text-slate-400"> Instructor : {instructor}</dd>
                    </div>
                    <div className='flex md:hidden flex-col items-center text-center '>
                        <img loading='lazy' className='w-20 h-20 border border-[brown] p-1 mt-1 rounded-full'
                            src={instructor_img}
                            alt="" />
                        <p className='mb-1 '>
                            <p className='text-[gray]'>Guided by </p>

                            <p className='text-[brown]'>{instructor}</p>

                        </p>


                    </div>
                    <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium">



                        <div className='flex hidden md:block flex-col justify-center items-center absolute top-0 right-0'>

                            <div className=" flex flex-col items-center justify-center">
                                <h1 className='font-semibold text-[gray]'>Guided by</h1>
                                <img loading='lazy' className='w-20 h-20 border border-[brown] p-1 mt-1 rounded-full' src={instructor_img} alt="" />
                                <dd>{instructor}</dd>
                            </div>
                        </div>



                        <div className=' flex md:flex-col flex-row'>
                            <dt className="sr-only">Rating</dt>
                            <dd className="px-1.5 ring-1 ring-slate-200 rounded">
                                Duration: {duration} 
                            </dd>
                            <dd className="px-1.5 ring-1 ring-slate-200 rounded">
                                Lectures: {lecture_quantity}
                            </dd>
                        </div>




                        <div className="flex w-full mt-2 font-normal">
                            <svg width="16" height="20" fill="currentColor">
                                <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
                            </svg>
                            <svg width="16" height="20" fill="currentColor">
                                <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
                            </svg>
                            <svg width="16" height="20" fill="currentColor">
                                <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
                            </svg>
                            <svg width="16" height="20" fill="currentColor">
                                <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
                            </svg>
                            <svg width="16" height="20" fill="currentColor">
                                <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
                            </svg>
                        </div>

                        <div className="flex-none w-full mt-2 font-normal mt-5">
                            <a href={`/${_id}`}> <button className='btn btn-xs border-none bg-[brown]'>Detail</button>
                            </a>
                        </div>
                    </dl>
                </div>
            </article>
            <div class="divider"></div>
        </div>
    );
};

export default Course;