import React from "react";

const OutputWindow = ({ outputDetails }) => {
    const getOutput = () => {
        let statusId = outputDetails?.status?.id;

        if (statusId === 6) {
            // compilation error
            return (
                <pre className="px-2 py-1 font-normal text-xs text-red-500">
                    {atob(outputDetails?.compile_output)}
                </pre>
            );
        } else if (statusId === 3) {
            return (
                <pre className="px-2 py-1 font-normal text-xs text-green-500">
                    {atob(outputDetails.stdout) !== null
                        ? `${atob(outputDetails.stdout)}`
                        : null}
                </pre>
            );
        } else if (statusId === 5) {
            return (
                <pre className="px-2 py-1 font-normal text-xs text-red-500">
                    {`Time Limit Exceeded`}
                </pre>
            );
        } else {
            return (
                <pre className="px-2 py-1 font-normal text-xs text-red-500">
                    {atob(outputDetails?.stderr)}
                </pre>
            );
        }
    };
    return (
        <>

            <div className="w-full h-[55vh] bg-[#1e293b] rounded-t text-white font-normal text-sm overflow-y-auto">
               <div className="flex  border-slate-700 border-b-2">
               <button className="btn-tiny text-slate-400 py-1 px-2">
                    Console
                </button>
                <p className="bg-slate-900 w-96"> </p>
               </div>

                {outputDetails ? <>{getOutput()}</> : null}
            </div>
        </>
    );
};

export default OutputWindow;
