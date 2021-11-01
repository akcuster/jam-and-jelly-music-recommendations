import Header from "./Header";
import SearchRecommendations from "./SearchRecommendations";
import Content from "./Content";
import Footer from "./Footer";

const App = () => {

    return (
        <div>
            <Header title="Jam & Jelly" />
            <SearchRecommendations />
            <Content />
            <Footer />
        </div>
    );
}

export default App;
