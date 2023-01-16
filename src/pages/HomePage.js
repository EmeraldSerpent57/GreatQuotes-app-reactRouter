import { Fragment } from "react";
import { Helmet } from "react-helmet";
import classes from './HomePage.modules.css';
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
        <body className={classes.hpBackground}>
          <div>
            <h1>Welcome to Great Quotes!</h1>
          </div>
          <div>
            <p>
              Text about what this website does and how to interact with it.
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