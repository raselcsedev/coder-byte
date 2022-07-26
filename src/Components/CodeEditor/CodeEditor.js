import React, { useRef } from "react";
import ReactDOM from "react-dom";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/ext-language_tools";
import Editor from "react-run-code";


function CodeEditor() {


    function onChange(newValue) {
        console.log("change", newValue);
    }

    return (
        <div className="w-[90%] py-20 mx-auto ">
            <AceEditor className="my-20"
                mode="java"
                theme="dracula"
                onChange={onChange}
                name="UNIQUE_ID_OF_DIV"
                editorProps={{ $blockScrolling: true }}
            />

            <div className=" p-[5%] overlay rounded-md overflow-hidden w-full h-full shadow-4xl">
                <iframe className="w-[100%] mx-auto rounded-xl border-slate-400 border-2 " src="https://repl.it/@lukaneco/AnimatedSufficientCables?lite=true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals" scrolling="no" allowtransparency="true" allowfullscreen="true" width="100%" height="400px" frameborder="0"></iframe>


                <iframe width="100%" height="600px" src="https://replit.com/team/joynulpavel/OPP"></iframe>

            </div>



        </div>
    );
}

export default CodeEditor
