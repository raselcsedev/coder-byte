import React from "react";
import { Link } from "react-router-dom";

const MyAllCourses = () => {
  return (
    <div className="mx-24 lg:mx-32 pt-20">
      <div className="mb-8 mt-8">
        <h2 className="text-center text-3xl font-bold">My Courses</h2>
      </div>

      <div className="lg:ml-48">
        <div class="card w-48 shadow-xl">
          <figure class="">
            <img className="w-24 rounded-full" src="https://w7.pngwing.com/pngs/580/809/png-transparent-data-structure-logo-brand-data-structure-blue-text-logo.png" alt="Shoes" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">DSA</h2>
            <Link to="/singlecourse"><button class="py-1 px-1 border rounded border-green-600 text-xs text-teal-600 font-bold hover:bg-teal-600 hover:text-white">
              Course Access
            </button></Link>
          </div>
        </div>
      </div>


      <div className="mt-12 mb-16">
        <h2 className="text-center text-3xl font-bold">Discover New Courses</h2>
      </div>

      <div className="flex justify-center items-center lg:space-x-40 mb-12">
        <div class="card w-48 shadow-xl">
          <figure class="">
            <img className="w-24 rounded-full" src="https://w7.pngwing.com/pngs/580/809/png-transparent-data-structure-logo-brand-data-structure-blue-text-logo.png" alt="Shoes" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">DSA</h2>
            <Link to="/singlecourse"><button class="py-1 px-1 border rounded border-green-600 text-xs text-teal-600 font-bold hover:bg-teal-600 hover:text-white">
              Course Access
            </button></Link>
          </div>
        </div>
        <div class="card w-48 shadow-xl">
          <figure class="">
            <img className="w-24 rounded-full" src="https://w7.pngwing.com/pngs/580/809/png-transparent-data-structure-logo-brand-data-structure-blue-text-logo.png" alt="Shoes" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">DSA</h2>
            <Link to="/singlecourse"><button class="py-1 px-1 border rounded border-green-600 text-xs text-teal-600 font-bold hover:bg-teal-600 hover:text-white">
              Course Access
            </button></Link>
          </div>
        </div>
        <div class="card w-48 shadow-xl">
          <figure class="">
            <img className="w-24 rounded-full" src="https://w7.pngwing.com/pngs/580/809/png-transparent-data-structure-logo-brand-data-structure-blue-text-logo.png" alt="Shoes" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">DSA</h2>
            <Link to="/singlecourse"><button class="py-1 px-1 border rounded border-green-600 text-xs text-teal-600 font-bold hover:bg-teal-600 hover:text-white">
              Course Access
            </button></Link>
          </div>
        </div>
      </div>
      

    </div>
  );
};

export default MyAllCourses;
