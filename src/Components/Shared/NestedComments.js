
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
    <div className="bg-white pt-10 px-6 space-y-2 min-h-[100vh]">
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
        <div className="mb-3 mt-5" style={{ textAlign: "left" }}><p className="font-medium flex items-center"> <img className="w-6 h-6 rounded-full mr-2 border border-[brown]" src="https://i.stack.imgur.com/frlIf.png" alt="" /> {user?.displayName}</p>{commentText}</div>
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
                cols="30" rows="4"
              ></textarea>{" "}
              <button className="btn btn-xs btn-outline" onClick={onAdd}>Submit</button>
            </>
          ) : (
            <a className=""
              style={{ cursor: "pointer", fontSize: "0.7rem", color: "blue" }}
              onClick={() => setShowAddComponet(true)}
            ><p className="flex  justify-center items-center btn btn-xs btn-success  w-[120px]"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 mr-1 mb-1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
          </svg>

          Add a reply</p>
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
