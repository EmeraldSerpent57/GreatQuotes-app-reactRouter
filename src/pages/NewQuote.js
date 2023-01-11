import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useHistory, /*Route*/ } from "react-router-dom";

import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";
//import AllQuotes from "./AllQuotes";
import Modal from "../components/UI/Modal";



const NewQuote = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory();
  const [showModal, setShowModal] = useState();

  useEffect(() => {
    if (status === "completed") {
      setShowModal({
        title: "Your quote has been added",
        message: "Thank you for your contribution!",
      });
      
    }
  }, [status]);

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
  };

  const commentConfirmHandler = () => {
    history.push("/quotes");
    /*return (
      <Route>
        <AllQuotes path="/quotes" exact />
      </Route>
    ); */
  };

  return (
    <>
      <Helmet>
        <title>Add a New Quote</title>
        <meta
          name="description"
          content="Add a new funny, serious, or thought-provoking quote to the page"
        />
      </Helmet>
      <QuoteForm
        isLoading={status === "pending"}
        onAddQuote={addQuoteHandler}
      />
      {showModal && (
        <Modal
          title={showModal.title}
          message={showModal.message}
          onConfirm={commentConfirmHandler}
        />
      )}
    </>
  );
};

export default NewQuote;
