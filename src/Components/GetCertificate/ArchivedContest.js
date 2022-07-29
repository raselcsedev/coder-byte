import React from "react";

const ArchivedContest = ({ challange }) => {
  const { name, _id, date } = challange;
  return (
    <div>
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <div className="flex items-center">
          <h2 class="card-title">{name}</h2>
          <p className="flex justify-end mr-4">{date} <span className="text-gray-400 ml-2">Ended</span></p>
          <button class="btn btn-outline btn-success">View Challanges</button>
          </div>
            
        </div>
      </div>
    </div>
  );
};

export default ArchivedContest;
