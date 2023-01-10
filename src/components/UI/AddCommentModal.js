import classes from './AddCommentModal.module.css';
import Card from './Card';

function Backdrop(props) {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
}

function ModalOverlay(props) {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <button className='btn' onClick={props.onConfirm}>Return to All Quotes</button>
      </footer>
    </Card>
  );
}

function AddCommentModal(props) {
  return (
    <>
        <Backdrop onConfirm={props.onConfirm} />,

        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />
    </>
  );
}

export default AddCommentModal;


