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


const javascriptDefault = `/**
* Problem: Binary Search: Search a sorted array for a target value.
*/

// Time: O(log n)
const binarySearch = (arr, target) => {
 return binarySearchHelper(arr, target, 0, arr.length - 1);
};

const binarySearchHelper = (arr, target, start, end) => {
 if (start > end) {
   return false;
 }
 let mid = Math.floor((start + end) / 2);
 if (arr[mid] === target) {
   return mid;
 }
 if (arr[mid] < target) {
   return binarySearchHelper(arr, target, mid + 1, end);
 }
 if (arr[mid] > target) {
   return binarySearchHelper(arr, target, start, mid - 1);
 }
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 5;
console.log(binarySearch(arr, target));
`;

const IDELanding = () => {
  const [code, setCode] = useState(javascriptDefault);
  const [customInput, setCustomInput] = useState("");
  const [outputDetails, setOutputDetails] = useState(null);
  const [processing, setProcessing] = useState(null);
  const [theme, setTheme] = useState("cobalt");
  const [language, setLanguage] = useState(languageOptions[0]);

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
  const handleCompile = () => {
    setProcessing(true);
    const formData = {
      language_id: language.id,
      // encode source code in base64
      source_code: btoa(code),
      stdin: btoa(customInput),
    };
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
                onClick={handleCompile}
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
            </div>
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
