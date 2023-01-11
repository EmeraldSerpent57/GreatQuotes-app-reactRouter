import { Helmet } from "react-helmet";

const HomePage = () => {
    return (
        <>
            <Helmet>
                <title>Great Quotes</title>
                <meta name="description" content="A website where you can view and add quotes that you love"/>
            </Helmet>
            <div>
                <h1>Welcome to Great Quotes!</h1>
            </div>
        </>
    );
}

export default HomePage;