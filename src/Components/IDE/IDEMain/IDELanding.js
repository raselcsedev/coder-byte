import React, { useEffect, useState } from "react";
import axios from "axios";
import { languageOptions } from "../constansts/languagesOptions";
import useKeyPress from "../useKeyPress/useKeyPress";
import { defineTheme } from "../lib/defineTheme";
import LanguagesDropdown from "./LanguagesDropdown";
import CodeEditorWindow from "./CodeEditorwindow";
import OutputWindow from "./OutputWindow";
import CustomInput from "./CustomInput";
import ThemeDropdown from "./ThemeDropdown";
import { classnames } from "../utils/general";
import OutputDetails from "./OutputDetails";
import { LoaderIcon } from "react-hot-toast";
import { useCallback } from "react";
import { useRef } from "react";
import Loading from "../../Shared/Loading/Loading";


const codeDefault = `#include<stdio.h>


int main()
{
  int n,d;

  scanf("%d %d",&n,&d);

  int num[n];

  for (int i=0;i<n;i++)
    {
      scanf("%d",&num[i]);
    }

  for(int i=0;i<d;i++)
    {
      int j,temp = num[0];
      for(j=0;j<n-1;j++)
        {
          num[j] = num[j+1];
        }

      num[j] = temp;
    }
  for (int i=0;i<n;i++)
    {
      printf("%d ",num[i]);
    }
  return 0;

}
`;

const IDELanding = () => {
  const [code, setCode] = useState(codeDefault);
  const [customInput, setCustomInput] = useState("");
  const [outputDetails, setOutputDetails] = useState(null);
  const [processing, setProcessing] = useState(null);
  const [theme, setTheme] = useState("cobalt");
  const [language, setLanguage] = useState(languageOptions[4]);

  const enterPress = useKeyPress("Enter");
  const ctrlPress = useKeyPress("Control");

  const onSelectChange = (sl) => {
    console.log("selected Option...", sl);
    setLanguage(sl);
  };




  useEffect(() => {
    if (enterPress && ctrlPress) {
      console.log("enterPress", enterPress);
      console.log("ctrlPress", ctrlPress);
      handleCompile();
    }
  }, [ctrlPress, enterPress]);
  const onChange = (action, data) => {
    switch (action) {
      case "code": {
        setCode(data);
        break;
      }
      default: {
        console.warn("case not handled!", action, data);
      }
    }
  };




  const handleCompile = (customInput) => {
    setProcessing(true);
    const formData = {
      language_id: language.id,
      // encode source code in base64
      source_code: btoa(code),
      stdin: btoa(customInput),
    };

    //post :  'e6a80cb052mshb33f1c854a489c4p188390jsn7ad1bddf2cdc'
    // '1b3d880241msh73bf6100521d0fcp112fd9jsna2b44f7992f0'
    // '02275dcad0mshd52a0ab2f7c8fabp1483e1jsna9afe8cf1868'
    const options = {
      method: "POST",
      url: 'https://judge0-ce.p.rapidapi.com/submissions',
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "content-type": "application/json",
        "Content-Type": "application/json",
        'X-RapidAPI-Key': '02275dcad0mshd52a0ab2f7c8fabp1483e1jsna9afe8cf1868',
        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
      },
      data: formData,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log("res.data", response.data);
        const token = response.data.token;
        checkStatus(token);
      })
      .catch((err) => {
        let error = err.response ? err.response.data : err;
        // get error status
        let status = err.response.status;
        console.log("status", status);
        if (status === 429) {
          console.log("too many requests", status);

        }
        setProcessing(false);
        console.log("catch block...", error);
      });
  };


  //get : 'e6a80cb052mshb33f1c854a489c4p188390jsn7ad1bddf2cdc'
  //'1b3d880241msh73bf6100521d0fcp112fd9jsna2b44f7992f0'
  // '02275dcad0mshd52a0ab2f7c8fabp1483e1jsna9afe8cf1868'
  const checkStatus = async (token) => {
    const options = {
      method: "GET",
      url: 'https://judge0-ce.p.rapidapi.com/submissions' + "/" + token,
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        'X-RapidAPI-Key': '02275dcad0mshd52a0ab2f7c8fabp1483e1jsna9afe8cf1868',
        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
      },
    };
    try {
      let response = await axios.request(options);
      let statusId = response.data.status?.id;

      // Processed - we have a result
      if (statusId === 1 || statusId === 2) {
        // still processing
        setTimeout(() => {
          checkStatus(token);
        }, 2000);
        return;
      } else {
        setProcessing(false);
        setOutputDetails(response.data);
        // showSuccessToast(`Compiled Successfully!`);
        console.log("response.data", response.data);
        return;
      }
    } catch (err) {
      console.log("err", err);
      setProcessing(false);
      //   showErrorToast();
    }
  };


  const allCompilerOutputs = useRef([])
  let count = 0
  const success = useRef(false)
  let dbOutput = useRef('')
  let compilerOutput = useRef('')
  let loading = useRef(true)


  // sample of test cases
  const input = ['2 6 4 4', '2 6 5 5', '2 6 6 6']
  const output = ['4 4', '5 5', '6 6']


  const timer = ms => new Promise(res => setTimeout(res, ms))

  const handleSubmit = async () => {

    console.log('submit');

    for (let i = 0; i < input.length; i++) {

      setOutputDetails(null);

      handleCompile(input[i])

      console.log('compile', i);


      console.log('outputDetails', outputDetails);

      console.log('current output inside', dbOutput);

    }
  }

  if (outputDetails?.stdout) {

    compilerOutput.current = (atob(outputDetails?.stdout).slice(0, -1))
    allCompilerOutputs.current.push(compilerOutput.current)
    const compilerAll = [...new Set(allCompilerOutputs.current)]

    console.log('arr unique compiler', compilerAll);

    for (let i = 0; i < output.length; i++) {
      for (let j = 0; j < output.length; j++) {

        if (output[i] == compilerAll[j]) {
          count++
          console.log('count++');

        }

      }
    }

    loading.current = false
    console.log('load', loading.current);



    console.log('count lastly', count);

    if (count == output.length) {
      success.current = true
    }

    console.log('success', success.current);

  }


  function handleThemeChange(th) {
    const theme = th;
    console.log("theme...", theme);

    if (["light", "vs-dark"].includes(theme.value)) {
      setTheme(theme);
    } else {
      defineTheme(theme.value).then((_) => setTheme(theme));
    }
  }
  useEffect(() => {
    defineTheme("oceanic-next").then((_) =>
      setTheme({ value: "oceanic-next", label: "Oceanic Next" })
    );
  }, []);


  const svg =

    <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 100 100">
      <rect y="25" width="10" height="50" rx="4" ry="4" fill="#ffffff">
        <animate attributeName="x" values="10;100" dur="1.2s" repeatCount="indefinite" />
        <animateTransform attributeName="transform" type="rotate" from="0 10 70" to="-60 100 70" dur="1.2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;1;0" dur="1.2s" repeatCount="indefinite" />
      </rect>
      <rect y="25" width="10" height="50" rx="4" ry="4" fill="#ffffff">
        <animate attributeName="x" values="10;100" dur="1.2s" begin="0.4s" repeatCount="indefinite" />
        <animateTransform attributeName="transform" type="rotate" from="0 10 70" to="-60 100 70" dur="1.2s" begin="0.4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;1;0" dur="1.2s" begin="0.4s" repeatCount="indefinite" />
      </rect>
      <rect y="25" width="10" height="50" rx="4" ry="4" fill="#ffffff">
        <animate attributeName="x" values="10;100" dur="1.2s" begin="0.8s" repeatCount="indefinite" />
        <animateTransform attributeName="transform" type="rotate" from="0 10 70" to="-60 100 70" dur="1.2s" begin="0.8s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;1;0" dur="1.2s" begin="0.8s" repeatCount="indefinite" />
      </rect>
    </svg>


  return (
    <div className="pt-20 bg-slate-900">


      <div className="grid grid-cols-7 ">
        <div className="md:col-span-2 col-span-7 px-8 h-[95vh] overflow-y-scroll divide divide-y">
          <div className="mt-6 mb-1">
            <button className="btn btn-xs btn-success mr-2">beginner</button>
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

        <div className="md:col-span-5 col-span-7">
          <div className="flex md:flex-row bg-slate-800 mb-2 ">
            <div className="px-4 py-2">
              <LanguagesDropdown onSelectChange={onSelectChange} />
            </div>
            <div className="px-4 py-2 md:block hidden">
              <ThemeDropdown handleThemeChange={handleThemeChange} theme={theme} />
            </div>
            <div className="px-4 py-2">
              <button
                onClick={() => handleCompile(customInput)}
                disabled={!code}
                className={classnames(
                  "border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)]  hover:shadow transition duration-200  ",
                  !code ? "opacity-50" : ""
                )}
              >
                {processing ? <button className=" md:block hidden font-bold btn loading px-2  "> Processing</button> : <div className="flex justify-center items-center btn   btn-success "><svg className="" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                </svg><p className="font-bold px-2">Run</p></div>}
              </button>

              <label for="my-modal-4" className=" btn modal-button btn btn-info mx-2 pt-2" onClick={() => handleSubmit()}>Submit</label>
            </div>


            <input type="checkbox" id="my-modal-4" class="modal-toggle" />
            <label for="my-modal-4" class="modal cursor-pointer">

              <div className="bg-slate-900 w-[90vw] md:w-[50vw] p-16 border border-slate-600">
                <div>
                  <p className=" text-info text-xl font-bold underline underline-offset-2">Test Cases Satisfied : {count}/{output.length}</p>
                  <br />
                </div>
                <ul className="list-decimal">
                  {loading.current ?

                    <ul className="list-decimal pl-4">
                      {
                        [...Array(output.length)].map((e, i) => <li className="text-info text-lg font-semibold"> <li className="flex" key={i}> Test Case : processing {svg} <br /> <br /></li></li>)}
                    </ul>
                    :
                    <div>
                      <ul className="list-decimal pl-4">
                        {
                          [...Array(count)].map((e, i) => <li className="text-[#8ee112] text-lg font-semibold"> <li className="flex" key={i}> Test Case : Passed <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg><br /> <br /></li></li>)
                        }
                        {
                          [...Array(output.length - count)].map((e, i) => <li className="text-[red] text-lg font-semibold"> <li className="flex" key={i}> Test Case : Failed <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg><br /> <br /></li></li>)}
                      </ul>
                      <p className=" text-success text-xl font-bold">{success.current ? "Congratulation !!! You've smashed It ." : "Wish You better try next time! "}</p>

                    </div>
                  }
                </ul>
              </div>
            </label>


          </div>

          <div className="grid grid-cols-10">
            <div className="md:col-span-7 col-span-10">
              <CodeEditorWindow
                code={code}
                onChange={onChange}
                language={language?.value}
                theme={theme.value}
              />
            </div>

            <div className="md:col-span-3 col-span-10">
              <div className="">
                <OutputWindow outputDetails={outputDetails} />
                <div className="">
                  <CustomInput
                    input={input}
                    customInput={customInput}
                    setCustomInput={setCustomInput}
                  />
                </div>

                <div className="p-2">
                  {outputDetails && <OutputDetails outputDetails={outputDetails} />}

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default IDELanding;
