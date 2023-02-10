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
        <body className={classes.body}>
          <div className={classes.title}>
            <h1>Welcome to Great Quotes!</h1>
          </div>
          <div className={classes.description1}>
            <h3>We're A Community of Quote Lovers!</h3>
            <p>
              Our community members enjoy sharing the inspiration we get from
              our favorite quotes with others. Whether they are funny,
              reflective, or motivational, we want to hear what quotes inspire
              you the most! Click "Take me to the quotes" to see what other
              community members have shared!
            </p>
          </div>
          <Link className={classes.button1} to={`/quotes`}>
            Take me to the quotes!
          </Link>
          <div className={classes.description2}>
            <h3>Share What Inspires You!</h3>
            <p>
              Everyone has that one quote that they keep on their wall, as their
              wallpaper, or even scribbled on a sticky note on their desk. Share
              your favorite quotes with the rest of the community by clicking
              "Add a quote". You never know what will inspire someone else!{" "}
            </p>
          </div>
          <Link className={classes.button2} to={'/new-quote'}>Add a Quote!</Link>
          <div className={classes.description1}>
            <h3>Need Some Inspiration?</h3>
            <p>Here are our favorite resources to gather quotes from:</p>
            <ul>
              <li>
                For funny quotes &#8594;
                <a
                  className={classes.webBtn}
                  href="https://www.brainyquote.com/topics/funny-quotes"
                  target="blank"
                >
                  brainyquote.com
                </a>
              </li>
              <li>
                For motivational quotes &#8594;
                <a
                  className={classes.webBtn}
                  href="https://www.oberlo.com/blog/motivational-quotes"
                  target="blank"
                >
                  oberlo.com
                </a>
              </li>
              <li>
                For famous quotes &#8594;
                <a
                  className={classes.webBtn}
                  href="https://wavebox.io/knowhow/the-50-most-famous-quotes-of-all-time/"
                  target="blank"
                >
                  wavebox.io
                </a>
              </li>
            </ul>
          </div>
          <footer className={classes.footer}>
            <p>
              Made with &#x2661; by{" "}
              <a
                href="https://www.linkedin.com/in/alaina-harrison-48a4a81b7/"
                target="blank"
              >
                Alaina Harrison
              </a>
            </p>
          </footer>
        </body>
      </Fragment>
    );
}

export default HomePage;