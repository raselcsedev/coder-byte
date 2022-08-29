import React, { Component } from "react";
import ReactDOM from "react-dom";

import EditorJs from "@natterstefan/react-editor-js";

import { EDITOR_JS_TOOLS } from "./BlogEditorConstants";

class Editorjs extends Component {
  
  async onSave() {
    
    const outputData = await this.editorInstance.save();
    console.log("outputData", outputData);
  }

  render() {
    return (
      <>
        <button onClick={this.onSave.bind(this)} className='btn' type="button">
          Save Content (check console output)  </button>

        <EditorJs
          editorInstance={instance => (this.editorInstance = instance)}
          tools={EDITOR_JS_TOOLS}
          placeholder='Editor'
          // data={blogData}
        />
      </>
    );
  }
}

export default Editorjs;
