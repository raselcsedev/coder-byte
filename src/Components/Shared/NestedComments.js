
import { faReply } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { v4 as uuidv4 } from "uuid";
import auth from "../../firebase.init";

const getNewComment = (commentValue, isRootNode = false, parentNodeId) => {



  return {
    id: uuidv4(),
    commentText: commentValue,
    childCommments: [],
    isRootNode,
    parentNodeId,
  };
};

const initialState = {};

function NestedComments() {
const [comments, setComments] = useState(initialState);
  const [rootComment, setRootComment] = useState("");
  const addComment = (parentId, newCommentText) => {
    let newComment = null;
    if (parentId) {
      newComment = getNewComment(newCommentText, false, parentId);
      setComments((comments) => ({
        ...comments,
        [parentId]: {
          ...comments[parentId],
          childCommments: [...comments[parentId].childCommments, newComment.id],
        },
      }));
    } else {
      newComment = getNewComment(newCommentText, true, null);
    }
    setComments((comments) => ({ ...comments, [newComment.id]: newComment }));
  };
  const commentMapper = (comment) => {
    return {
      ...comment,
      childCommments: comment.childCommments
        .map((id) => comments[id])
        .map((comment) => commentMapper(comment)),
    };
  };
  const enhancedComments = Object.values(comments)
    .filter((comment) => {
      return !comment.parentNodeId;
    })
    .map(commentMapper);
  const onAdd = () => {
    addComment(null, rootComment);
    setRootComment("");
  };
  const [user] = useAuthState(auth)
  return (
    <div className="bg-white pt-10 px-6 space-y-2 pb-5 ">
      <header className="font-semibold text-xl mb-5">Response here</header>
      <div className="comments-container drop-shadow-lg border-t  bg-white p-4 rounded">
        <div>
          <p className="font-medium flex items-center"> <img className="w-8 h-8 rounded-full mr-2 border border-[brown]" src="https://i.stack.imgur.com/frlIf.png" alt="" /> {user?.displayName}</p>
          <textarea
            className="outline-0 pt-3 font-normal"
            name="" id=""
            value={rootComment}
            onChange={(e) => setRootComment(e.target.value)}
            cols="39" rows="5"
            placeholder="What're your thoughts"
          ></textarea>
          {" "}
          <br />

          <button className="btn btn-xs bg-[brown] border-0 text-white " onClick={onAdd}>response</button>

        </div>
      </div>


      <div>
        {enhancedComments.map((comment, key) => {
          return (
            <Comment key={key} comment={comment} addComment={addComment} />
          );
        })}
      </div>
    </div>
  );
}

const Comment = ({ comment, addComment }) => {
  const { commentText, childCommments, id } = comment;
  const [childComment, setChildComment] = useState("");
  const [show, setShow] = useState(true);
  const [showAddComponet, setShowAddComponet] = useState(false);
  const onAdd = () => {
    addComment(id, childComment);
    setChildComment("");
    setShowAddComponet(false);
  };
  const [user] = useAuthState(auth)
  return (
    <div className="Comment pl-5 py-5 border-l  border-b overflow-auto">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div className="my-5" style={{ textAlign: "left" }}><p className="font-medium flex items-center"> <img className="w-6 h-6 rounded-full mr-2 border border-[brown]" src="https://i.stack.imgur.com/frlIf.png" alt="" /> {user?.displayName}</p>
        <p className="mt-2 ">{commentText}</p></div>
        &nbsp;
        {childCommments.length > 0 && (
          <button onClick={() => setShow((show) => !show)}>
            {show ? <button className="btn btn-xs btn-outline">Hide</button> : <button className="btn btn-xs btn-outline">Show</button>}
          </button>
        )}
      </div>
      <div>
        <div>
          {showAddComponet ? (
            <>
              <textarea
                className="outline-0 pt-3 font-normal"
                value={childComment}
                onChange={(e) => setChildComment(e.target.value)} F
                name="" id=""
                cols="25" rows="3"
              ></textarea>{" "}
              <button className="btn btn-xs " onClick={onAdd}>Submit</button>
            </>
          ) : (
            <a className=""
              style={{ cursor: "pointer", fontSize: "0.7rem", color: "blue" }}
              onClick={() => setShowAddComponet(true)}
            ><p className="flex   btn btn-xs btn-success spacce-x-2  w-[75px]">
              <FontAwesomeIcon icon={faReply} />
          <span className="ml-2">Reply</span></p>
            </a>
          )}
        </div>
      </div>
      {show &&
        childCommments.map((childCommentEl, key) => {
          return (
            <Comment
              key={key}
              comment={childCommentEl}
              addComment={addComment}
            />
          );
        })}
    </div>
  );
};

export default NestedComments;
