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
import { Modal } from 'react-responsive-modal';
import { useParams } from "react-router-dom";
import DynamicTpicGetHook from "../../../Component/COUSTOMHOOK/DynamicTpicGetHook";
import { useQuery } from "@tanstack/react-query";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";




const IDEDynamic = () => {

  const [code, setCode] = useState('');
  const [customInput, setCustomInput] = useState("");
  const [outputDetails, setOutputDetails] = useState(null);
  const [processing, setProcessing] = useState(null);
  const [theme, setTheme] = useState("cobalt");
  const [language, setLanguage] = useState(languageOptions[4]);

  const [open, setOpen] = useState(false);

  const enterPress = useKeyPress("Enter");
  const ctrlPress = useKeyPress("Control");

  const onSelectChange = (sl) => {
    console.log("selected Option...", sl);
    setLanguage(sl);
  };


const {id} =useParams()


const url = `http://localhost:5000/TopicAlgo/${id}`


const fetcher = async () => {
    const data =  axios.get(url)
console.log(data, data.data,'d');

    return (await data).data
}

let { data, isLoading } = useQuery(["data",id], () => fetcher())

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

  const allCompilerOutputs = useRef([])

  const uniqueComileOutput = useRef([])

  let count = 0
  let compilerOutput = useRef('')
  let loading = useRef(true)




  // sample of test cases
//   const testCaseInput = ['2 6 4 4', '2 6 5 5', '2 6 6 6','2 6 7 7','2 6 8 8','2 6 9 9','2 6 10 10','2 6 11 11','2 6 12 12','2 6 13 13','2 6 14 14','2 6 15 15','2 6 16 16','2 6 17 17','2 6 18 18']
//   const testCaseOutput = ['4 4', '5 5', '6 6','7 7','8 8','9 9','10 10','11 11','12 12','13 13','14 14','15 15','16 16','17 17','18 18']


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
    // '90893d417fmshb93419358c1d91cp1e4ceejsnea97587d77ee'
    const options = {
      method: "POST",
      url: 'https://judge0-ce.p.rapidapi.com/submissions',
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "content-type": "application/json",
        "Content-Type": "application/json",
        'X-RapidAPI-Key': 'e6a80cb052mshb33f1c854a489c4p188390jsn7ad1bddf2cdc',
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
  // '90893d417fmshb93419358c1d91cp1e4ceejsnea97587d77ee'
  const checkStatus = async (token) => {
    const options = {
      method: "GET",
      url: 'https://judge0-ce.p.rapidapi.com/submissions' + "/" + token,
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        'X-RapidAPI-Key': 'e6a80cb052mshb33f1c854a489c4p188390jsn7ad1bddf2cdc',
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

        // console.log('res',outputDetails);
        // showSuccessToast(`Compiled Successfully!`);

        if (response.data?.stdout) {
          console.log('current compiled', atob(response.data?.stdout));
          compilerOutput.current = (atob(response.data?.stdout).slice(0, -1))
          allCompilerOutputs.current.push(compilerOutput.current)
          const compilerAll = [...new Set(allCompilerOutputs.current)]

          console.log('arr unique compiler', compilerAll);
          uniqueComileOutput.current = compilerAll
        }


        console.log("response.data", response.data);
        return;
      }
    } catch (err) {
      console.log("err", err);
      setProcessing(false);
      //   showErrorToast();
    }
  };


  for (let i = 0; i < uniqueComileOutput.current.length; i++) {
    // console.log('outer,', i);
    for (let j = 0; j < uniqueComileOutput.current.length; j++) {
      // console.log('inner', j);
      // console.log('compilerAll[i]', uniqueComileOutput.current[i]);
      // console.log('testCaseOutput[j]', testCaseOutput[j]);

      if (uniqueComileOutput.current[i] == data?.testCaseOutput[j]) {
        count++
        console.log('count++', count);
      }
    }
  }

  loading.current = false
  console.log('load', loading.current);
  console.log('count lastly', count);
  
console.log('data',data);
console.log('testcase output', data?.testCaseOutput);

  const timer = ms => new Promise(res => setTimeout(res, ms))

  const [submission,setSubmission]=useState(false)

  const handleSubmit = () => {

    setSubmission(true)

    console.log('submit');

    for (let i = 0; i < data?.testCaseInput.length; i++) {

      // setOutputDetails(null);

      uniqueComileOutput.current=[]
      allCompilerOutputs.current = []

      handleCompile(data?.testCaseInput[i])


      timer(3000)
      console.log('compile', i);

      // console.log('outputDetails', outputDetails);
    }
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

  const [showElement, setShowElement] = React.useState(true)
  useEffect(() => {
    setTimeout(function () {
      setShowElement(false)
    }, 5000);
  },
    [])

    const [user] =useAuthState(auth)

    if(submission && !isLoading){
        let submissionData;
        if(data?.testCaseOutput?.length - count == 0){
        submissionData ={data,success:true,user:user?.email}
        }
        submissionData={data,success:false,user:user?.email}
        fetch(`http://localhost:5000/submissions/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(submissionData)
        })
            .then(res => res.json())
            .then(result => {
                console.log('res',result)

            })
    }
 
    if( !data?.testCaseOutput || !data?.testCaseOutput.length)
    {
        return <p className="pt-20 font-bold text-3xl w-[30%] h-96 mx-auto text-success bg-slate-800 h-[120vh] pt-40 w-[100vw] text-center "> Checking Test-cases Validity...</p>
    }
    console.log('output',  data?.testCaseOutput,'len',data?.testCaseOutput.length);
    console.log('output',  ['4','4'],'len',['4','4'].length);

    if(isLoading){
        return <p>loading...</p>
    }


  return (
    <div className="pt-20 bg-slate-900">


      <div className="grid grid-cols-7 ">
        <div className="md:col-span-2 col-span-7 px-8 h-[95vh] overflow-y-scroll divide divide-y">
          <div className="mt-6 mb-1">
            <button className="btn btn-xs btn-success mr-2">type:{data?.type}</button>
            <button className="btn btn-xs btn-primary">View Solution</button>
          </div>

          <div className="text-white py-5">
           

            <p className="font-semibold text-xl my-4">{data?.title}</p>

          <p className="text-white">{data?.Problem}</p>
            <p className="font-semibold text-xl my-4">Constraints</p>

            <samp>0 {'<'} n, ar[i]{'<'}= 1000</samp>
            <p className="font-semibold text-xl my-4">Output Format</p>

            Print the sum of the array's elements as a single integer.

            <p className="font-semibold text-xl my-4">Sample Input</p>
            <p className="p-4 bg-slate-600">
            {data?.example}
            </p>
           
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
                
                className={classnames(
                  "border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)]  hover:shadow transition duration-200  ",
                  
                )}
              >
                {processing ? <button className=" md:block hidden font-bold btn "> Processing...</button> : <div className="flex justify-center items-center btn   btn-success "><svg className="" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                </svg><p className="font-bold px-2">Run</p></div>}
              </button>

              <button className=" btn modal-button btn btn-info pt-1 mx-2" onClick={() => {
                setOpen(true)
                handleSubmit()
              }}>Submit</button>
            </div>

            <Modal classNames={{
              overlay: 'customOverlay',
              modal: 'customModal',
            }} open={open} onClose={() => setOpen(false)}>

              <div className="  md:w-[40vw] md:px-10 md:py-3 ">
                <div>
                  <p className=" text-info text-xl font-bold underline underline-offset-2">Test Cases Satisfied : {count}/{data?.testCaseOutput.length}</p>
                  <br />
                </div>
                <ul className="list-decimal md:grid grid-cols-2">
                  {showElement ?

                    <ul className="list-decimal md:grid grid-cols-2 gap-2 w-[110%] md:w-[250%] mx-auto px-10">
                      {
                        [...Array(data?.testCaseOutput.length)].map((e, i) => <li className="text-info text-lg font-semibold"> <li className="flex" key={i}> Test Case : processing {svg} <br /> <br /></li></li>)}
                    </ul>
                    :
                    <div>
                      <ul className="list-decimal md:grid grid-cols-2 gap-2 w-[110%] md:w-[250%] mx-auto px-10">
                        {
                          [...Array(count)].map((e, i) => <li className="text-[#8ee112] text-lg font-semibold"> <li className="flex" key={i}> Test Case : Passed <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg><br /> <br /></li></li>)
                        }
                        {
                          [...Array(data?.testCaseOutput.length - count)].map((e, i) => <li className="text-[red] text-lg font-semibold"> <li className="flex" key={i}> Test Case : Failed <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg><br /> <br /></li></li>)}
                      </ul>
                    </div>
                  }
                </ul>
                {
                  showElement ? <p className=" text-success text-xl font-bold">Please wait, We're working on your submission.</p> : <p className=" text-success text-xl font-bold">{data?.testCaseOutput.length - count == 0 ? "Congratulation !!! You've smashed It ." : "Wish You better try next time! "}</p>

                }
              </div>

            </Modal>


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

            <div className="md:col-span-3 col-span-10 z-10">
              <div className="">
                <OutputWindow outputDetails={outputDetails} />
                <div className="">
                  <CustomInput
                    input={data?.testCaseInput}
                    customInput={customInput}
                    setCustomInput={setCustomInput}
                  />
                  <div className="p-2">
                  {outputDetails && <OutputDetails outputDetails={outputDetails} />}

                </div>
                </div>

                

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default IDEDynamic;