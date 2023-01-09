import { Helmet } from "react-helmet";

const NotFound = () => {
  return (
    <>
    <Helmet>
      <title>Page Not Found!</title>
      <meta name="description" content="Error page" />
    </Helmet>
      <div className="centered">
        <p>Oops! Page Not Found!</p>
      </div>
    </>
  );
};

export default NotFound;

//Fallback page to show if the URL is not valid
