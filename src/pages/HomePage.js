import { Fragment } from "react";
import { Helmet } from "react-helmet";
import classes from './HomePage.module.css';
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
      <Fragment>
        <Helmet>
          <title>Great Quotes</title>
          <meta
            name="description"
            content="A website where you can view and add quotes that you love"
          />
        </Helmet>
        <body className={classes.home}>
          <div className={classes.title}>
            <h1>Welcome to Great Quotes!</h1>
          </div>
          <div className={classes.description}>
            <p>
              I wanted to create a place where we can all come together to share funny, serious, and thought-provoking quotes. You can browse all of the quotes, comment on quotes others have submitted, and even add your own quote! 
              <br />
              <br />
              Whether you're here to add a quote or browse our collection of user contributions, I hope you enjoy your time on this site! 
              <br />
              <br />
              Alaina
            </p>
          </div>
          <Link className="btn" to={`/quotes`}>
            Take me to the quotes!
          </Link>
        </body>
      </Fragment>
    );
}

export default HomePage;