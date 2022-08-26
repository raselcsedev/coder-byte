import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const BlogSingle = () => {
    const [user] = useAuthState(auth);

    return (
        <div>
            <div>
                <div className='flex mr-16 md:mr-0 mb-5 '>
                    <img loading='lazy' className='w-8 h-8 border rounded-full mr-2'
                        src='https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220509120600/Learn-Data-Structures-and-Algorithms-Easily.gif'
                        alt="" />
                    <div className='space-x-1 '>
                        <span className='font-semibold'>{user?.displayName}</span>
                        <span className='text-xs'>{'>'}Today </span>
                    </div>

                </div>
                <article className="flex my-3 flex-col md:flex-row md:items-start space-x-6 ml-10 md:ml-0">
                    <img loading='lazy' src='https://i.ibb.co/dj2xGyT/Earth-Hour-Banner-Landscape.png' alt="" className="flex-none w-60 border-2  rounded-md bg-slate-100" />
                    <div className="min-w-0 relative flex-auto">

                        <h2 className="font-semibold text-slate-900 truncate"> Peer dependencies in a Node module</h2>
                        <p className='mr-28'>In some package.json files, you might see a few lines like this:

{
    `{
        //...
        "peerDependencies": {
          "libraryName": "1.x"
        }
      }`
}
You might have already seen dependencies and devDependencies, but not peerDependencies.

dependencies are the packages your project depends on...</p>

                        <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium">

                            <div className="flex-none w-full mt-2 font-normal mt-5">
                                <a href={`/blogs/blog-detail`}> <button className='btn btn-xs border-none bg-[brown]'>Detail</button>
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