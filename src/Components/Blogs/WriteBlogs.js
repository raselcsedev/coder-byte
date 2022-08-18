import React, { Component } from "react";

import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertToRaw, EditorState } from "draft-js";
import draftToHtml from "draftjs-to-html";

export default class WriteBlogs extends Component {
  state = {
    editorState: EditorState.createEmpty(),
  };

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    const { editorState } = this.state;
    console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    return (
      <div className="border shadow-xl">
        <div>
          <form>
            <div>
            <h2 className="ml-3 mb-2 mt-4 font-bold">Title</h2>
            <h2 className="text-xs ml-3 mb-3">Be specific and imagine you’re asking a question to another person</h2>
            <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-lg ml-3 mb-2" />
            <h2 className="ml-3 mb-2 mt-4 font-bold">Body</h2>
            <h2 className="text-xs ml-3 mb-3">Include all the information someone would need to answer your question</h2>
            </div>
            <Editor
              placeholder="Write your blog here"
              editorState={editorState}
              toolbarClassName="toolbarClassName ml-3"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName border ml-3"
              onEditorStateChange={this.onEditorStateChange}
            />
            <textarea
              className="w-full max-w-lg border mt-24 ml-3"
              disabled
              value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
            ></textarea>
            <div>
            <h2 className="ml-3 mb-2 mt-2 font-bold">Tags</h2>
            <h2 className="text-xs ml-3 mb-3">Add up to 5 tags to describe what your question is about</h2>
            <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-lg ml-3 mb-2" />
            </div>
            <button class="py-2 px-4 border rounded border-green-600 text-white text-sm bg-sky-500 mt-4 mb-5 ml-3">Submit Your Blogs</button>
          </form>
        </div>
      </div>
    );
  }
}
