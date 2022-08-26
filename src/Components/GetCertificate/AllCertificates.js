import React from "react";
import { Link } from "react-router-dom";

const AllCertificates = ({ certificatelist }) => {
  const { name, _id } = certificatelist;
  return (
    <div>
      <div class="card lg:max-w-lg bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <div class="card-actions justify-start mt-12">

            <Link to={`/single-certificate/${_id}`}><button class="py-2 px-2 border rounded border-green-600 text-xs text-green-600 font-bold hover:bg-green-600 hover:text-white">
              Get Certified
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCertificates;
