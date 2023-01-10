import classes from "./HighlightedQuote.module.css";

const HighlightedQuote = (props) => {
  return (
    <>
      <figure className={classes.quote}>
        <p>{props.text}</p>
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
