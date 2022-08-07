import React from 'react';
import AllCertificates from './AllCertificates';

const AllCertificate = () => {

    const certificatelist = [
        {
          _id: 1,
          name: "Java(Basic)",
        },
        {
            _id: 2,
            name: "JavaScript(Intermediate)",
          },
          {
            _id: 3,
            name: "c#(Basic)",
          },
          {
            _id: 4,
            name: "CSS",
          },
          {
            _id: 5,
            name: "Node.Js(Basic)",
          },
          {
            _id: 6,
            name: "Phython(Basic)",
          },
          {
            _id: 7,
            name: "Python(Intermediate)",
          },
          {
            _id: 8,
            name: "React(Basic)",
          },
          {
            _id: 9,
            name: "Rest API(Intermediate)",
          },
          {
            _id: 10,
            name: "SQL(Basic)",
          },
          {
            _id: 11,
            name: "SQL(Intermediate)",
          },
          {
            _id: 12,
            name: "SQL(Advanced)",
          }
       
      ];

    return (
        <div className='sm:mx-24 lg:mx-32 pt-20 mb-12'>
            <div>
            <h1 className="text-2xl font-extrabold">
              coder<span className="text-lime-600">A</span>ccess
            </h1>
            <h1 className="text-sm font-semibold">Develop your skills</h1>
            <div class="divider"></div>
          </div>

          <div className='flex bg-blue-600 py-12 px-8 space-x-4 rounded'>
                <div>
                    <h2 className='text-xl font-bold text-white mb-2'>Stand out from the crowd</h2>
                    <p className='text-sm text-white'>Get certified in technical skills by taking the HackerRank Skills Certification Test</p>
                </div>
                <div>
                   <h2 className='text-xl font-bold text-white mb-2'>Standardised Assessment</h2>
                   <p className='text-sm text-white'>Assessments are organised around specific skills and are carefully curated based on years of recruiting data from 2000+ companies</p>
                </div>
                <div>
                     <h2 className='text-xl font-bold text-white mb-2'>Enrich your profile</h2>
                     <p className='text-sm text-white'>Upon successfully clearing an assessment, you can promote yourself using the HackerRank certificate to peers and employers</p>
                </div>
            </div>

            <div>
        <h1 className="text-xl font-bold mt-12 mb-5">Get Your Skills Certified</h1>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
        {certificatelist.map((certificatelist) => (
          <AllCertificates key={certificatelist._id} certificatelist={certificatelist}></AllCertificates>
        ))}
      </div>
        </div>
    );
};

export default AllCertificate;