import classes from './Modal.module.css';

function ModalOverlay(props) {
  return (
    <div className={classes.modalOverlay}>
      <div className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <button className="btn" onClick={props.onConfirm}>
            Return to All Quotes
          </button>
        </footer>
      </div>
    </div>
  );
}

function AddCommentModal(props) {
  return (
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />
  );
}

export default AddCommentModal;