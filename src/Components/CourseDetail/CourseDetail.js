import React from 'react';
import { useParams } from 'react-router';
import Loading from '../Shared/Loading/Loading';
import useCourses from '../Shared/useCourses';


const Details = () => {


    const { id } = useParams()

    const [courses, setCourses] = useCourses()



    const course = courses?.find(item => id == item?.id)

    console.log(courses, course);

    if (!courses.length) {
        return <Loading></Loading>
    }

    return (
        <div className='w-[80%] mx-auto py-10 md:grid grid-cols-8 gap-10'>
            
            <div className='col-span-6'>
                <h1 className='text-xl md:text-4xl mb-8 font-semibold mt-20'>
                    {course?.title}
                </h1>
                <div className='md:flex items-center'>
                    <img loading='lazy' className='w-20 h-20 border border-[brown] p-1 mr-5 rounded-full'
                        src={course?.instructor_img}
                        alt="" />
                    <p className='mb-3 mr-20'>
                        <p className='text-[gray]'>Guided by </p>

                        <p className='text-[brown]'>{course?.instructor}</p>
                    </p>

                    <p className='mb-3 md:ml-5'>
                        <p className='text-[gray]'>Catagory</p>
                        <p className='text-[black]'>{course?.topic}</p>
                    </p>
                </div>

                <div className='grid grid-cols-12 gap-5'>
                    <div class="divider mt-6 col-span-5 h-[3%] bg-[brown]"></div>
                    <div class="divider mt-4 col-span-7"></div>
                </div>

                <img loading='lazy' className='my-5' src={course?.course_img} alt="" />

                <p className='my-4'>{course?.description}</p>
                <p className='my-4 font-semibold'>{course?.description}</p>
                <p className='my-4'>{course?.description}</p>
                <p className='my-4 font-bold'>{course?.description}</p>
               

                <div className='grid grid-cols-9 gap-4'>
                    <div class="divider mt-6 h-[3%] col-span-2 bg-[brown]"></div>
                    <div class="divider mt-4 col-span-7"></div>
                </div>

                <div className='md:flex mt-10'>
                    <img loading='lazy' className='w-60 p-1 border border-[brown]'
                        src={course?.instructor_img}
                        alt="" />
                    <p className='ml-5'>
                        <p className='text-[brown] mb-4 font-semibold'>{course?.instructor}</p>

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem molestiae vel expedita nihil distinctio repudiandae ipsam deserunt quas nesciunt ex impedit nobis commodi, magnam deleniti! Dolores enim exercitationem magnam porro.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus necessitatibus perferendis laborum nam saepe quis vero molestias, error repellendus rem non nemo eaque consectetur eligendi odit repellat iusto in quasi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam inventore, suscipit labore delectus velit soluta unde cumque quas aliquid ratione sed nesciunt asperiores culpa natus optio porro sequi, officiis debitis?
                    </p>
                </div>


            </div>

            <div className='mt-20   '>
                <p className=' divide divide-y border md:w-[300%] border-t-white p-5 '>
                <a href={`/enroll/${course?.id}`}><button className='btn bg-[grey] text-[white] border-none  hover:bg-[brown] '>Enroll Now</button></a>
           
           <p className='my-7 font-semibold text-lg'>Enrolled Student : 2k +</p>
           <p className='my-7 font-semibold text-lg'>Lectures : {course?.lecture_quantity}</p>
           <p className='my-7 font-semibold text-lg'>Duration : {course?.duration} hrs</p>
           <p className='my-7 font-semibold text-lg'>Weeky Live Sessions</p>
                </p>
            </div>



        </div>
    );
};

export default Details;