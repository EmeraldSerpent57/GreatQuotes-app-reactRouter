import { useRef, useEffect, useState } from "react";

import classes from "./NewCommentForm.module.css";
import useHttp from "../../hooks/use-http";
import { addComment } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";

const isEmpty = (value) => value.trim() === "";

const NewCommentForm = (props) => {
  const [inputValidity, setInputValidity] = useState(true);

  const commentTextRef = useRef();

  const { sendRequest, status, error } = useHttp(addComment);

  const { onAddedComment } = props;

  useEffect(() => {
    if (status === "completed" && !error) {
      onAddedComment();
    }
  }, [status, error, onAddedComment]);

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredText = commentTextRef.current.value;

    //validating input here
    const commentIsValid = !isEmpty(enteredText);

    setInputValidity({
      text: commentIsValid,
    });

    if (!commentIsValid) {
      return;
    }

    sendRequest({ commentData: { text: enteredText }, quoteId: props.quoteId });
    
    //clear form after submission
    commentTextRef.current.value = '';
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {status === "pending" && (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
      <div className={`${classes.control} ${inputValidity.text ? "" : classes.invalid}`} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment:</label>
        <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
        {!inputValidity.text && (<p className={classes.errorText}>Please enter a comment.</p>)}
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
