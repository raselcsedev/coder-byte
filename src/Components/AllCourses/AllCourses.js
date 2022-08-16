import React from 'react';
import Course from '../Course/Course';
import useCourses from '../Shared/useCourses';

const AllCourses = () => {

    const [courses,setCourses] =useCourses()
    
    console.log(courses);

    return (
        <div className='w-[80%] mx-auto py-10'>

        <h1 className='text-4xl mb-8 font-semibold mt-20'>All Courses :</h1>
          <div className='divide-y divide-slate-100 '>
            {
                courses.map(course=><Course key={course.id} course={course} ></Course>)
            }
        </div>
      </div>
    );
};

export default AllCourses;