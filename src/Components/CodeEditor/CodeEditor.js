import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/ext-language_tools";
import Editor from "react-run-code";
import ImageUploading from 'react-images-uploading';


function CodeEditor() {




    function onChange(newValue) {
        console.log("change", newValue);
    }

    return (
        <div className="bg-slate-900 pt-16">
            <div className="grid grid-cols-7">
                <div className="col-span-2  px-8 h-[100vh] overflow-y-scroll divide divide-y">
                    <div className="mt-6 mb-1">
                        <button className="btn btn-xs btn-success mr-2">Medium</button>
                        <button className="btn btn-xs btn-primary">View Solution</button>
                    </div>

                    <h1 className="text-white pt-4">
                        First Factorial
                        Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it. For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24. For the test cases, the range will be between 1 and 18 and the input will always be an integer.
                        Examples
                        Input: 4
                        Output: 24
                        Input: 8
                        Output: 40320
                        Tags
                        recursionmath fundamentalsfree
                        <h1>
                            First Factorial
                            Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it. For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24. For the test cases, the range will be between 1 and 18 and the input will always be an integer.
                            Examples
                            Input: 4
                            Output: 24
                            Input: 8
                            Output: 40320
                            Tags
                            recursionmath fundamentalsfree
                        </h1>
                        <h1>
                            First Factorial
                            Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it. For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24. For the test cases, the range will be between 1 and 18 and the input will always be an integer.
                            Examples
                            Input: 4
                            Output: 24
                            Input: 8
                            Output: 40320
                            Tags
                            recursionmath fundamentalsfree
                        </h1>
                        <h1>
                            First Factorial
                            Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it. For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24. For the test cases, the range will be between 1 and 18 and the input will always be an integer.
                            Examples
                            Input: 4
                            Output: 24
                            Input: 8
                            Output: 40320
                            Tags
                            recursionmath fundamentalsfree
                        </h1>
                        <h1>
                            First Factorial
                            Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it. For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24. For the test cases, the range will be between 1 and 18 and the input will always be an integer.
                            Examples
                            Input: 4
                            Output: 24
                            Input: 8
                            Output: 40320
                            Tags
                            recursionmath fundamentalsfree
                        </h1>
                        <h1>
                            First Factorial
                            Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it. For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24. For the test cases, the range will be between 1 and 18 and the input will always be an integer.
                            Examples
                            Input: 4
                            Output: 24
                            Input: 8
                            Output: 40320
                            Tags
                            recursionmath fundamentalsfree
                        </h1>

                    </h1>
                    <h1>
                        First Factorial
                        Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it. For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24. For the test cases, the range will be between 1 and 18 and the input will always be an integer.
                        Examples
                        Input: 4
                        Output: 24
                        Input: 8
                        Output: 40320
                        Tags
                        recursionmath fundamentalsfree
                    </h1>


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
                        <div style={{ zIndex: '4' }} class="absolute bottom-[93.25%] right-[69.5%] form-control w-full max-w-xs bg-slate-900">

                            <select class="select select-sm select-bordered bg-slate-800 text-white">
                                <option selected>C</option>
                                <option>C++</option>
                                <option>Java</option>
                                <option>Python</option>
                                <option>JavaScript</option>
                                <option>Go</option>
                                <option>TypeScript</option>
                                <option>Ruby on rails</option>
                                <option>Kotlin</option>
                            </select>

                        </div>
                        <iframe className=" h-[99vh] mx-auto  " src="https://repl.it/@lukaneco/AnimatedSufficientCables?lite=true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals" scrolling="no" allowtransparency="true" allowfullscreen="true" width="100%" height="400px" frameborder="0"></iframe>


                        {/* <iframe width="100%" height="600px" src="https://replit.com/team/joynulpavel/OPP"></iframe> */}

                    </div>



                </div>
            </div>
        </div>
    );
}

export default CodeEditor
