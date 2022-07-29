import React from "react";

const Contest = ({contest}) => {
    const {name, _id, date} = contest;
  return (
    <div className="mb-12">
      <div class="card lg:max-w-lg bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <p>{date}</p>
          <div class="card-actions flex justify-center mt-2">
            <button class="btn btn-accent">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contest;
