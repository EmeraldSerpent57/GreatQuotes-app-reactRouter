import { Fragment } from "react";
import { useParams, Route, Link } from "react-router-dom";

import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
    { id: 'q1', author: 'Mitch Hedberg', text: "I'm sick of following my dreams,man. I'm just going to ask where they're going and hook up with 'em later." },
    { id: 'q2', author: 'Will Ferrell', text: "Before you marry a person, you should first make them use a computer with slow internet to see who they really are." },
    { id: 'q3', author: 'Ellen Degeneres', text: "Never follow anyone else's path. Unless you're in the woods and you're lost and you see path. Then by all means follow that path." },
    { id: 'q4', author: 'Anonymous', text: "Insomnia sharpens your math skills because you spend all night calculating how much sleep you'll get if you're able to 'fall asleep right now.'" },
    { id: 'q5', author: 'Anonymous', text: "I walk around like everything's fine, but deep down, inside my shoe, my sock is sliding off." },
  ];

const QuoteDetails = () => {
    const params = useParams();

    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

    if (!quote) {
        return (<p>No quote found!</p>)
    }

    return (
      <Fragment>
        <HighlightedQuote text={quote.text} author={quote.author} />
        <Route path={`/quotes/${params.quoteId}`} exact>
          <div className="centered">
            <Link
              className="btn--flat"
              to={`/quotes/${params.quoteId}/comments`}
            >
              Load Comments
            </Link>
          </div>
        </Route>
        <Route path={`/quotes/${params.quoteId}/comments`}>
          <Comments />
        </Route>
      </Fragment>
    );
};

export default QuoteDetails;