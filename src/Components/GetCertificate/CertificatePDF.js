import React from "react";
import ReactDOM from "react-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import Pdf from "react-to-pdf";
import auth from "../../firebase.init";
import { certificatelist } from "./certificateList";

// import "./styles.css";
const ref = React.createRef();

export default function CertificatePDF() {
  const { id } = useParams();

  const certificate = certificatelist?.find((item) => id == item?._id);
  const [user] = useAuthState(auth);

  return (
    <div className="mb-12">
      <Pdf targetRef={ref} filename="certificate.pdf">
        {({ toPdf }) => (
          <button className="btn bg-[brown] w-[30%] ml-[35%] my-5 py-2" onClick={toPdf}>
            Download Certificate{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
          </button>
        )}
      </Pdf>

      <div >
      <div className="border-2 border-[brown] w-[57.3%] mx-auto p-px" ref={ref}>
        <div className="border-2 border-[brown] h-[450px] text-center pb-8">
        <div className="">
        <h1 className="text-2xl font-extrabold mt-4 mb-2">
              coder<span className="text-lime-600">A</span>ccess
            </h1>
          <h1 className="font-medium text-4xl font-mono mb-6">Certificate</h1>
          <h1 className="text-base mb-4">This is to certify that</h1>
          <h1 className=" border-b-2 border-black w-[50%] mx-auto text-2xl font-semibold">{user?.displayName}</h1>
          <h2 className="mt-2">has Successfully cleared the assessment for the skill</h2>
          <h2 className="text-lg font-bold">{certificate?.name}</h2>
          <div className="flex items-center justify-center space-x-64 mt-16">
          <div>
              <p>02-Sep-22</p>
              <h2 className="border-t-2">Date</h2>
          </div>
          <div>
             <h2 className="text-sm text-mono mb-2">Signature of CTO</h2>
              <h2 className="border-t-2">CTO, coderAccess</h2>
          </div>
        </div>
        </div>
        </div>
      </div>
      </div>
    </div>
  );
}
