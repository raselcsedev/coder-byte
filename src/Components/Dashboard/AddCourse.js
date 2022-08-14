import React from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';


const AddCourse = () => {
   //const { id,instructor,course_img ,instructor_img, title, description, duration, lecture_quantity, topic } = props.course

  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = async (data) => {

    toast.success("Course Added")
  }


  return (
    <div className='text-black'>
       < Toaster />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div >
            <h1 className='text-2xl font-semibold py-4'>Add A Course</h1>
            <div class="hidden sm:block" aria-hidden="true">
              <div class="py-5">
                <div class="border-t border-gray-200"></div>
              </div>
            </div>

            <div class="md:grid md:grid-cols-3 md:gap-6 ">
              <div class="md:col-span-1">
                <div class="px-4 sm:px-0">
                <h3 class="text-lg font-medium leading-6 ">Course Info</h3>
                  <p class="mt-1 text-sm ">This information will be displayed publicly so be careful what you share.</p>
                </div>
              </div>
              <div class="mt-5 md:mt-0 md:col-span-2">
                <div class="shadow overflow-hidden sm:rounded-md">
                  <div class="px-4 py-5  sm:p-6">
                    <div class="grid grid-cols-6 gap-6">
                      <div class="col-span-6 sm:col-span-5">
                        <label for="first-name" class="block text-sm font-medium ">Title</label>
                        <input style={{ backgroundColor: ' #919cb1', border: '#6b7280' }} type="text" name="first-name" id="first-name"
                          autocomplete="given-name"
                          class="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          {...register("title")} />
                      </div>

                      <div class="col-span-6 sm:col-span-5">
                        <label for="about" class="block text-sm font-medium "> Description </label>
                        <textarea style={{ backgroundColor: ' #919cb1', border: '#6b7280' }}
                          id="about" name="about" rows="3"
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-2" placeholder="Your Bio"
                          {...register("description")}>
                        </textarea>
                        <p class="mt-2 text-sm">Brief description for the course & certification. URLs are hyperlinked.</p>
                      </div>

                      <div class="col-span-5 md:col-span-3">
                        <label class="block text-sm font-medium"> Course Image (link) </label>
                        <input  {...register("course_img ")} style={{ backgroundColor: ' #919cb1', border: '#6b7280' }} type="text" name="region" id="region" autocomplete="address-level1" class="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                       or,
                        <label class="block text-sm font-medium"> Course Image (upload) </label>

                        <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                          <div class="space-y-1 text-center">

                            <div class="flex text-sm text-gray-600">
                              <label for="file-upload" class="relative cursor-pointer rounded-md font-medium hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                <svg class="mx-auto h-12 w-12" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg><span>Upload a file</span>
                                <input style={{ backgroundColor: ' #919cb1', border: '#6b7280' }} id="file-upload" name="file-upload" type="file" class="sr-only" />
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-span-5 md:col-span-3">
                        <label class="block text-sm font-medium"> Instructor Image (link) </label>
                        <input  {...register("instructor_img")} style={{ backgroundColor: ' #919cb1', border: '#6b7280' }} type="text" name="region" id="region" autocomplete="address-level1" class="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                        or,
                        <label class="block text-sm font-medium">Instructor Image (upload)</label>

                        <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                          <div class="space-y-1 text-center">

                            <div class="flex text-sm text-gray-600">
                              <label for="file-upload" class="relative cursor-pointer rounded-md font-medium hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                <svg class="mx-auto h-12 w-12" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg><span>Upload a file</span>
                                <input style={{ backgroundColor: ' #919cb1', border: '#6b7280' }} id="file-upload" name="file-upload" type="file" class="sr-only" />
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-span-6 sm:col-span-3 lg:col-span-3">
                        <label for="region" class="block text-sm font-medium ">Course Duration</label>
                        <input  {...register("duration")} style={{ backgroundColor: ' #919cb1', border: '#6b7280' }} type="text" name="region" id="region" autocomplete="address-level1" class="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>

                      <div class="col-span-6 sm:col-span-3 lg:col-span-3">
                        <label for="postalCcode" class="block text-sm font-medium ">Lecture Quantity</label>
                        <input  {...register("lecture_quantity")} style={{ backgroundColor: ' #919cb1', border: '#6b7280' }} type="text" name="postalCode" id="postalCode" autocomplete="postal-code" class=" p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>


          </div>

          <div class="px-4 py-3  text-right sm:px-6">
            <input className='btn bg-[#050535] w-full max-w-xs ' type="submit" value="Submit" />
          </div>
        </div >

      </form>
    </div>
  );
};

export default AddCourse;
