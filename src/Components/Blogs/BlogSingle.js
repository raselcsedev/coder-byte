import React from 'react';

const BlogSingle = () => {
    return (
        <div>
            <div>
                <div className='flex items-center text-center mr-16 md:mr-0 my-2 md:my-0 '>
                    <img loading='lazy' className='w-8 h-8 border rounded-full mr-2'
                        src='https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220509120600/Learn-Data-Structures-and-Algorithms-Easily.gif'
                        alt="" />
                    <p className='mb-1 '>
                        <p className='text-[gray]'>Published by </p>
                    </p>


                </div>
                <article className="flex my-3 flex-col md:flex-row md:items-start space-x-6 ml-10 md:ml-0">
                    <img loading='lazy' src='https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220509120600/Learn-Data-Structures-and-Algorithms-Easily.gif' alt="" className="flex-none w-60 border-2  rounded-md bg-slate-100" />
                    <div className="min-w-0 relative flex-auto">

                        <h2 className="font-semibold text-slate-900 truncate">{'title'}</h2>
                        <p className='mr-28'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel laboriosam fugiat cupiditate nihil ex optio ab adipisci atque, earum dolorum voluptatem assumenda dignissimos, explicabo voluptas est quasi voluptates doloremque iste!</p>

                        <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium">

                            <div className="flex-none w-full mt-2 font-normal mt-5">
                                <a href={`/$`}> <button className='btn btn-xs border-none bg-[brown]'>Detail</button>
                                </a>
                            </div>
                        </dl>
                    </div>
                </article>
                <div class="divider"></div>
            </div>
        </div>
    );
};

export default BlogSingle;