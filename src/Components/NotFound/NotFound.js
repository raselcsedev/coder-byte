import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="mb-12">
      <h2 className="text-9xl text-center text-goldens h-96 pt-20">404</h2>
      <h2 className="text-2xl text-center mt-5">Opps! PAGE NOT BE FOUND</h2>
      <h2 className="text-xl text-center mt-4">
        Sorry but the page you are looking for does not exist, have been <br /> removed, name changed or is temporarily
        unavailable.
      </h2>
      <div className="flex justify-center mt-12">
        <Link to="/">
          <button class="btn btn-outline btn-warning ">BACK TO HOME PAGE</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;