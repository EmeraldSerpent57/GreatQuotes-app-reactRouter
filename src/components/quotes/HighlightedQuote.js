import { Link } from "react-router-dom";
import classes from "./HighlightedQuote.module.css";
import {BsArrowLeft} from 'react-icons/bs';

const HighlightedQuote = (props) => {
  return (
    <>
      <Link className={classes.backbtn} to="/quotes">
        <BsArrowLeft />
      </Link>
      <figure className={classes.quote}>
        <p>"{props.text}"</p>
        <figcaption>{props.author}</figcaption>
      </figure>
      <div className={classes.divider}></div>
      <figure className={classes.submitted}>
        <figcaption>Submitted By: {props.submitter}</figcaption>
      </figure>
    </>
  );
};

export default HighlightedQuote;
