import React from "react";
import ArchivedContest from "./ArchivedContest";
import Contest from "./Contest";

const Contests = () => {

  const contests = [
    {
      _id: 1,
      name: "DTCC CODE-A-THON...",
      date: "Jul 30th, 9:30 am +06",
    },
    {
      _id: 2,
      name: "Akamai Edge Hackathon 2022",
      date: "Jul 30th, 9:30 am +06",
    },
    {
      _id: 3,
      name: "ProjectEuler+",
      date: "Aug 30th, 9:30 am +06",
    }
  ];

  const archived = [
    {
      _id: 1,
      name: "National Disability Independence Day 2021 Coding...",
      date: "Jul 30th, 9:30 am +06",
    },

    {
      _id: 3,
      name: "COVID-19 Relief for India Coding Challenge",
      date: "Sept 30th, 9:30 am +06",
    },
    {
      _id: 4,
      name: "Celebrate Juneteenth 2021 Coding Contest",
      date: "Aug 30th, 8:30 am +06",
    },
    {
      _id: 5,
      name: "Asian Pacific American Heritage Month 2021 Co...",
      date: "Jul 30th, 9:30 am +06",
    },
    {
      _id: 6,
      name: "International Women's Day Coding Contest 2021",
      date: "Aug 30th, 10:30 am +06",
    },
    {
      _id: 7,
      name: "Black History Month Coding Contest 2021",
      date: "Jul 30th, 8:30 am +06",
    },
    {
      _id: 8,
      name: "Hack the Interview VII (U.S.)",
      date: "Sept 30th, 10:30 am +06",
    },
    {
      _id: 9,
      name: "Amazon Last Mile Coding Challenge 2022",
      date: "Aug 30th, 9:30 am +06",
    }
  ];

  return (
    <div className="pt-20 mx-32">
      <h1 className=" text-lg">All Contests</h1>
      <h1 className="text-3xl font-bold">Contests</h1>
      <div class="divider"></div>
      <div>
        <h1 className="text-2xl mt-2 mb-2">Active Contests</h1>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {contests.map((contest) => (
          <Contest key={contest._id} contest={contest}></Contest>
        ))}
      </div>

      <div>
        <h1 className="text-2xl mt-2 mb-2">Archived Contests</h1>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2 mb-12">
        {archived.map((challange) => (
          <ArchivedContest  key={challange._id} challange={challange}></ArchivedContest>
        ))}
      </div>
    </div>
  );
};

export default Contests;
