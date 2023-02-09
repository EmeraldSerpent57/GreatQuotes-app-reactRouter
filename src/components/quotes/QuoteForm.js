import { Fragment, useRef, useState } from "react";
import { Prompt } from "react-router-dom";
import { Link } from "react-router-dom";

import { BsArrowLeft } from "react-icons/bs";
import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";

const isEmpty = value => value.trim() === '';

const QuoteForm = (props) => {
  const [isEntering, setIsEntering] = useState(false);
  const [formValidity, setFormValidity] = useState({
    author: true,
    submitter: true,
    text: true,
  });

  const authorInputRef = useRef();
  const textInputRef = useRef();
  const submittedByInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    //reading form values
    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;
    const submittedBy = submittedByInputRef.current.value;
    
    //validating input
    const enteredAuthorIsValid = !isEmpty(enteredAuthor);
    const enteredTextIsValid = !isEmpty(enteredText);
    const submitterIsValid = !isEmpty(submittedBy);

    setFormValidity({
      author: enteredAuthorIsValid,
      submitter: submitterIsValid,
      text: enteredTextIsValid,
    })

    const formIsValid = enteredAuthorIsValid && enteredTextIsValid && submitterIsValid;

    if (!formIsValid) {
      return;
    }

    props.onAddQuote({ author: enteredAuthor, text: enteredText, submitter: submittedBy });

    //clear form after submission
    authorInputRef.current.value = '';
    textInputRef.current.value = '';
    submittedByInputRef.current.value = '';
  }

  const formFocusedHandler = () => {
    setIsEntering(true);
  };

  const finishedEnteringHandler = () => {
    setIsEntering(false);
  };

  return (
    <Fragment>
      <Prompt
        when={isEntering}
        message={(location) =>
          "Are you sure you want to leave? All changes will be lost!"
        }
      />
      <Link className={classes.backbtn} to="/quotes">
        <BsArrowLeft />
      </Link>
      <Card>
        <form
          onFocus={formFocusedHandler}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}
          <div
            className={`${classes.control} ${
              formValidity.author ? "" : classes.invalid
            }`}
          >
            <label htmlFor="author">Author</label>
            <input type="text" id="author" ref={authorInputRef} />
            {!formValidity.author && (
              <p className={classes.errorText}>Field must not be empty.</p>
            )}
          </div>
          <div
            className={`${classes.control} ${
              formValidity.text ? "" : classes.invalid
            }`}
          >
            <label htmlFor="text">Text</label>
            <textarea id="text" rows="5" ref={textInputRef}></textarea>
            {!formValidity.text && (
              <p className={classes.errorText}>Field must not be empty.</p>
            )}
          </div>
          <div
            className={`${classes.control} ${
              formValidity.submitter ? "" : classes.invalid
            }`}
          >
            <label htmlFor="submitter">
              Submitted By (can enter a unique username)
            </label>
            <input type="text" id="submitter" ref={submittedByInputRef} />
            {!formValidity.submitter && (
              <p className={classes.errorText}>Field must not be empty.</p>
            )}
          </div>
          <div className={classes.actions}>
            <button onClick={finishedEnteringHandler} className="btn">
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default QuoteForm;