import React from "react";
import ReactDOM from "react-dom";

// import Dante from "Dante2/src";


console.log("wtf");

var content = null;
var test = window.localStorage.getItem(content);
content = test;
export default function BlogEdit() {
  return (
 
      <div>


        {/* <Dante
        content={test}
        body_placeholder={"hello"}
        data_storage={{
          interval: 1000,
          save_handler: (context, content) => {
            console.log(context);
            console.log("ddddddddd", JSON.stringify(content));
            window.localStorage.setItem("context", context);
          }
        }}
        read_only={false}
      /> */}


      </div>
 
  );
}


