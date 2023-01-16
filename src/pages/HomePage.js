import { Fragment } from "react";
import { Helmet } from "react-helmet";
import classes from './HomePage.modules.css';

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
          <button className="btn">Take me to the quotes!</button>
        </body>
      </Fragment>
    );
}

export default HomePage;