import React, { useEffect } from 'react';
import ProblemHook from '../COUSTOMHOOK/ProblemHook';

const Aproblem = () => {
    useEffect(()=>{
        fetch('Demo.JSON')
            .then(res => res.json())
            .then(data => console.log(data))
        },[])
    const {data:problem}=ProblemHook();
    console.log(problem)
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 mx-5 lg:mx-36 mt-12 gap-4'>
           <div>
           <h1 className='text-2xl font-bold'>Sum of Integer</h1>
            <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur deleniti ab minus, nisi inventore necessitatibus ut aliquid explicabo vitae sed aut, illum dolorum recusandae quae est. Excepturi eum nobis aliquam.</p>
            <h1 className='text-2xl font-bold mt-12'>exmple</h1>
            <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum excepturi vero corrupti quo dignissimos laborum sequi dicta non, voluptas debitis eum iusto aliquam, ad eaque optio expedita, commodi repudiandae at.</p>
           </div>
           <div>
            <h1 className='text-center text-5xl'>compiler</h1>
           </div>

        </div>
    );
};

export default Aproblem;