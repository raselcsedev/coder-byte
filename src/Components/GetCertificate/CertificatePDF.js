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
    <div>
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

      <div ref={ref}>
      <div className="border-4 border-[brown] grid grid-cols-8 h-[300px] text-center mb-20 py-10 w-[57.3%] mx-auto">
        <div className="col-span-2 bg-[brown]">
          <h1 className="flex flex-start text-white text-2xl font-semibold text-center">
            coder <span className="text-]">A</span>ccess
          </h1>
        </div>
        <div className="col-span-5">
          <h1 className="font-semibold text-3xl">CERTIFICATE</h1>
          <h1 className="text-lg">Of Completion</h1>
          <h1 className=" border-b-2 border-black w-[50%] mx-auto text-2xl font-semibold">{user?.displayName}</h1>
          Has Successfully Completed the <span className="text-[brown] font-semibold">{certificate?.name}</span> online Skill Test
        </div>
      </div>
      </div>
    </div>
  );
}
