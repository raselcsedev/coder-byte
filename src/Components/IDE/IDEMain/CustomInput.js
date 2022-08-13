import React from "react";
import { classnames } from "../utils/general";

const CustomInput = ({ customInput, setCustomInput,input }) => {
    const submit =true
    

    return (
        <>
            <div className="flex border-slate-700 border-t-2 ">
                <button className="btn-tiny bg-[#1e293b] text-slate-400 py-1 px-2">
                    Custom Input
                </button>
                <p className="bg-slate-900 w-[65.5%]"> </p>
            </div>
            <textarea
                rows="5"
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                // placeholder={`Custom input`}
                className={classnames(
                    "text-slate-200 focus:outline-none w-full border-2 border-black z-10 rounded-b  px-4 py-2 hover:shadow transition duration-200 bg-[#1e293b]"
                )}
            ></textarea>
        </>
    );
};

export default CustomInput;
