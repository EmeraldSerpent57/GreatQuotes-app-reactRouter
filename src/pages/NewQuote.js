import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useHistory } from "react-router-dom";

import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";

const NewQuote = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory();

  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [status, history]);

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
  };

  return (
    <>
    <Helmet>
      <title>Add a New Quote</title>
      <meta name="description" content="Add a new funny, serious, or thought-provoking quote to the page" />
    </Helmet>
      <QuoteForm
        isLoading={status === "pending"}
        onAddQuote={addQuoteHandler}
      />
    </>
  );
};

export default NewQuote;
