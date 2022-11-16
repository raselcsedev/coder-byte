import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { QueryClient, QueryClientProvider, useQuery, useMutation } from '@tanstack/react-query'
import { useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import toast, { Toaster } from 'react-hot-toast';


const EditProfile = ({ updatedProfile }) => {
    const [user] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);


    const onSubmit = async (data) => {

        updatedProfile(data)
        console.log('dis', data?.displayName);

        await updateProfile({ displayName: data.name });


        const email = user?.email
        await fetch(`https://coder-access-backend.onrender.com/profiles/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data)
        })

        toast.success("Information Updated")
    }



    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Toaster />

                <div>
                    <div className='text-white'>
                        <h1 className='text-2xl font-semibold py-4'>Update Profile</h1>
                        <div class="hidden sm:block" aria-hidden="true">
                            <div class="py-5">
                                <div class="border-t border-gray-200"></div>
                            </div>
                        </div>
                        <div class="md:grid md:grid-cols-3 md:gap-6 text-[white]">
                            <div class="md:col-span-1">
                                <div class="px-4 sm:px-0">
                                    <h3 class="text-lg font-medium leading-6 ">Profile</h3>
                                    <p class="mt-1 text-sm ">This information will be displayed publicly so be careful what you share.</p>
                                </div>
                            </div>
                            <div class="mt-5 md:mt-0 md:col-span-2">
                                <div class="shadow sm:rounded-md sm:overflow-hidden">
                                    <div class="px-4 py-5 space-y-6 sm:p-6">

                                        <div>
                                            <label for="about" class="block text-sm font-medium "> About </label>
                                            <textarea style={{ backgroundColor: ' #919cb1', border: '#6b7280' }}
                                                id="about" name="about" rows="3"
                                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-2" placeholder="Your Bio"
                                                {...register("about")}>
                                            </textarea>
                                            <p class="mt-2 text-sm">Brief description for your profile. URLs are hyperlinked.</p>
                                        </div>

                                        <div class="grid grid-cols-3 gap-6">
                                            <div class="col-span-3 sm:col-span-3">
                                                <label class="block text-sm font-medium "> Website </label>
                                                <div class="mt-1 flex rounded-md shadow-sm">
                                                    <span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-[#6b7280] bg-[ #919cb1] text-sm"> http:// </span>
                                                    <input style={{ backgroundColor: ' #919cb1', border: '#6b7280' }}
                                                        type="text" class="p-2 focus:ring-primary focus:border-primary flex-1 block w-full rounded-none rounded-r-md sm:text-sm "
                                                        placeholder="www.example.com"
                                                        {...register("website")}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="grid grid-cols-3 gap-6">
                                            <div class="col-span-3 sm:col-span-3">
                                                <label class="block text-sm font-medium "> GitHub User Name <span className='font-normal'>(just user name not url , like : 'pavel-genine')</span></label>
                                                <div class="mt-1 flex rounded-md shadow-sm">

                                                    <input style={{ backgroundColor: ' #919cb1', border: '#6b7280' }}
                                                        type="text" class="p-2 focus:ring-primary focus:border-primary flex-1 block w-full  rounded-md sm:text-sm "
                                                        placeholder="GitHub User Name "
                                                        {...register("github")}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <label class="block text-sm font-medium"> Documment </label>
                                            <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                                <div class="space-y-1 text-center">

                                                    <div class="flex text-sm text-gray-600">
                                                        <label for="file-upload" class="relative cursor-pointer text-white rounded-md font-medium hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                            <svg class="mx-auto h-12 w-12" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                                                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg><span>Upload a file</span>
                                                            <input style={{ backgroundColor: ' #919cb1', border: '#6b7280' }} id="file-upload" name="file-upload" type="file" class="sr-only" />
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="hidden sm:block" aria-hidden="true">
                        <div class="py-5">
                            <div class="border-t border-gray-200"></div>
                        </div>
                    </div>

                    <div class="mt-10 sm:mt-0">
                        <div class="md:grid md:grid-cols-3 md:gap-6 text-white">
                            <div class="md:col-span-1">
                                <div class="px-4 sm:px-0">
                                    <h3 class="text-lg font-medium leading-6 ">Personal Information</h3>
                                    <p class="mt-1 text-sm ">Use a permanent address where you can receive mail.</p>
                                </div>
                            </div>
                            <div class="mt-5 md:mt-0 md:col-span-2">
                                <div class="shadow overflow-hidden sm:rounded-md">
                                    <div class="px-4 py-5  sm:p-6">
                                        <div class="grid grid-cols-6 gap-6">
                                            <div class="col-span-6 sm:col-span-5">
                                                <label for="first-name" class="block text-sm font-medium ">Name</label>
                                                <input style={{ backgroundColor: ' #919cb1', border: '#6b7280' }} type="text" name="first-name" id="first-name"
                                                    autocomplete="given-name"
                                                    value={user?.displayName} readOnly
                                                    class="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                    {...register("displayName")} />
                                            </div>
                                            <div class="col-span-6 sm:col-span-5">
                                                <label for="profession" class="block text-sm font-medium ">Profession</label>
                                                <input style={{ backgroundColor: ' #919cb1', border: '#6b7280' }} type="text" name="first-name" id="first-name"

                                                    class="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                    {...register("profession")} />
                                            </div>

                                            <div class="col-span-6 sm:col-span-3">
                                                <label for="country" class="block text-sm font-medium ">Country</label>
                                                <select  {...register("country")} style={{ backgroundColor: ' #919cb1', border: '#6b7280' }} id="country" name="country" autocomplete="country-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black">
                                                    <option>Bangladesh</option>
                                                    <option>Middle East</option>
                                                    <option>Europe</option>
                                                    <option>USA</option>
                                                </select>
                                            </div>

                                            <div class="col-span-6 sm:col-span-6 lg:col-span-3">
                                                <label for="city" class="block text-sm font-medium ">City</label>
                                                <input  {...register("city")} style={{ backgroundColor: ' #919cb1', border: '#6b7280' }} type="text" name="city" id="city" autocomplete="address-level2" class="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                            </div>

                                            <div class="col-span-6 sm:col-span-3 lg:col-span-3">
                                                <label for="region" class="block text-sm font-medium ">Division / Province / State</label>
                                                <input  {...register("region")} style={{ backgroundColor: ' #919cb1', border: '#6b7280' }} type="text" name="region" id="region" autocomplete="address-level1" class="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                            </div>

                                            <div class="col-span-6 sm:col-span-3 lg:col-span-3">
                                                <label for="postalCcode" class="block text-sm font-medium ">ZIP / Postal code</label>
                                                <input  {...register("postalCode")} style={{ backgroundColor: ' #919cb1', border: '#6b7280' }} type="text" name="postalCode" id="postalCode" autocomplete="postal-code" class=" p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="hidden sm:block" aria-hidden="true">
                        <div class="py-5">
                            <div class="border-t border-gray-200"></div>
                        </div>
                    </div>

                    <div class="px-4 py-3  text-right sm:px-6">
                        <input className='btn bg-[#050535] w-full max-w-xs text-white' type="submit" value="Save" />
                    </div>
                </div >

            </form>
        </div>
    );
};

export default EditProfile;