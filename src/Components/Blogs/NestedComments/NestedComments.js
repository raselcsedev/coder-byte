
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

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
  return (
    <div >
      <div className="comments-container">
        <input className="my-16"
          type="text"
          value={rootComment}
          onChange={(e) => setRootComment(e.target.value)}
          placeholder="Comment here" />{" "}
        <button onClick={onAdd} className='btn btn-xs'>Add</button>
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
  return (
    <div className="Comment">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div style={{ textAlign: "center" }}>{commentText}</div>
        &nbsp;
        {childCommments.length > 0 && (
          <button onClick={() => setShow((show) => !show)}>
            {show ? <button className="btn btn-xs">hide</button> : <button className="btn btn-xs">Show </button>}
          </button>
        )}
      </div>
      <div>
        <div>
          {showAddComponet ? (
            <>
              <input
                type="text"
                value={childComment}
                onChange={(e) => setChildComment(e.target.value)}
                placeholder="add comment"
              />{" "}
              <button className="btn btn-xs" onClick={onAdd}>Submit</button>
            </>
          ) : (
            <a
              style={{ cursor: "pointer", fontSize: "0.7rem", color: "blue" }}
              onClick={() => setShowAddComponet(true)}
            >
              Add a reply
            </a>
          )}
        </div>
      </div>
      {show &&
        childCommments.map((childCommentEl, key) => {
          return (
            <Comment className=''
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