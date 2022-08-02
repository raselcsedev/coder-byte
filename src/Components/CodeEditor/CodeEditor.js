import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/ext-language_tools";
import Editor from "react-run-code";
import ImageUploading from 'react-images-uploading';



function CodeEditor() {

    let [lan, setLan] = useState('')





    function onChange(e) {
        const option = e.target.value.toString()

        console.log(option);
        setLan(option)


    }

    console.log(lan);
    return (
        <div className="bg-slate-900 pt-16">
            <div className="grid grid-cols-7">
                <div className="col-span-2  px-8 h-[95vh] overflow-y-scroll divide divide-y">
                    <div className="mt-6 mb-1">
                        <button className="btn btn-xs btn-success mr-2">Easy</button>
                        <button className="btn btn-xs btn-primary">View Solution</button>
                    </div>

                    <div className="text-white py-5">
                        Given an array of integers, find the sum of its elements.

                        For example, if the array arr=[1,2,3,4] ,1+2+3+4=10 , so return 10 .

                        <p className="font-semibold text-xl my-4">Function Description</p>

                        Complete the simpleArraySum function in the editor below. It must return the sum of the array elements as an integer.

                        simpleArraySum has the following parameter(s):

                        ar: an array of integers
                        <p className="font-semibold text-xl my-4">Input Format</p>


                        The first line contains an integer, , denoting the size of the array.
                        The second line contains  space-separated integers representing the array's elements.


                        <p className="font-semibold text-xl my-4">Constraints</p>

                        <samp>0 {'<'} n, ar[i]{'<'}= 1000</samp>
                        <p className="font-semibold text-xl my-4">Output Format</p>

                        Print the sum of the array's elements as a single integer.

                        <p className="font-semibold text-xl my-4">Sample Input</p>
                        <p className="p-4 bg-slate-600">
                            6 <br />
                            1 2 3 4 10 11
                        </p>
                        <p className="font-semibold text-xl my-4">Sample Output</p>

                        <p className="p-4 bg-slate-600">
                            31
                        </p>
                        <p className="font-semibold text-xl my-4">Explanation</p>


                        We print the sum of the array's elements: 1+2+3+4+10+11=31
                    </div>


                </div>
                <div style={{ zIndex: '1' }} className="col-span-5 relative w-[100%] bg-slate-900 ">


                    {/* <AceEditor className="my-20"
    mode="java"
    theme="dracula"
    onChange={onChange}
    name="UNIQUE_ID_OF_DIV"
    editorProps={{ $blockScrolling: true }}
/> */}

                    <div className=" my-2 overlay rounded-md overflow-hidden w-full h-full shadow-4xl">
                        <div style={{ zIndex: '4' }} class="absolute bottom-[92%] right-[69.5%] form-control w-full max-w-xs bg-slate-900">

                            <select onChange={(e) => onChange(e)} class="select w-[130%] select-bordered bg-slate-600 text-white">
                                <option >Select Language</option>
                                <option value='C'>C</option>
                                <option value='C++' >C++</option>
                                <option value='Go'>Go</option>
                                <option value='Java' >Java</option>
                                <option value='JavaScript'>JavaScript</option>
                                <option value='Kotlin'>Kotlin</option>
                                <option value='Php'>Php</option>
                                <option value='Python'>Python</option>
                                <option value='Ruby'>Ruby on rails</option>
                                <option value='TypeScript'>TypeScript</option>
                            </select>

                        </div>
                        {/* {
                            lan == 'Python' && <iframe className=" h-[99vh] mx-auto  " src="https://repl.it/@lukaneco/AnimatedSufficientCables?lite=true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals" scrolling="no" allowtransparency="true" allowfullscreen="true" width="100%" height="400px" frameborder="0"></iframe>
                                
                        } */}

                        {
                            lan == 'C' && <iframe data-theme="dark" width="100%" className="h-[95vh]" src="https://replit.com/@pavel-genuine/C?lite=true"></iframe>

                        }
                        {
                            lan == '' && <iframe width="100%" className="h-[95vh]" src="https://replit.com/@pavel-genuine/Python?lite=true"></iframe>

                        }
                        {
                            lan == 'C++' && <iframe width="100%" className="h-[95vh]" src="https://replit.com/@pavel-genuine/OPP1-1?lite=true"></iframe>

                        }
                        {
                            lan == 'Java' && <iframe width="100%" className="h-[95vh]" src="https://replit.com/@pavel-genuine/Java?lite=true"></iframe>

                        }
                        {
                            lan == 'Php' && <iframe width="100%" className="h-[95vh]" src="https://replit.com/@pavel-genuine/Php2?lite=true"></iframe>

                        }
                        {
                            lan == 'Python' && <iframe width="100%" className="h-[95vh]" src="https://replit.com/@pavel-genuine/Python?lite=true"></iframe>

                        }
                        {
                            lan == 'JavaScript' && <iframe width="100%" className="h-[95vh]" src="https://replit.com/@pavel-genuine/JavaScript?lite=true"></iframe>

                        }
                        {
                            lan == 'Go' && <iframe width="100%" className="h-[95vh]" src="https://replit.com/@pavel-genuine/Go?lite=true"></iframe>

                        }
                        {
                            lan == 'TypeScript' && <iframe width="100%" className="h-[95vh]" src="https://replit.com/@pavel-genuine/TypeScript?lite=true"></iframe>

                        }
                        {
                            lan == 'Kotlin' && <iframe width="100%" className="h-[95vh]" src="https://replit.com/@pavel-genuine/Kotlin-2?lite=true"></iframe>

                        }
                        {
                            lan == 'Ruby' && <iframe width="100%" className="h-[95vh]" src="https://replit.com/@pavel-genuine/Ruby?lite=true"></iframe>

                        }

                    </div>



                </div>
            </div>
        </div>
    );
}

export default CodeEditor
