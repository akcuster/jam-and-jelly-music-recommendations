import Header from "./Header";
import SearchRecommendations from "./SearchRecommendations";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from "react"

const App = () => {

    const [artist, setArtist] = useState('')

    const handleRecommendation = () => {
        const artists = ["Buddy Holly", "The Beatles", "David Bowie"]
        const int = Math.floor(Math.random() * 3)

        setArtist(artists[int])
    }

    const handleSubmit = (e) => {
        console.log('submitted')
    }

    return (
        <div>
            <Header
                title="Jam & Jelly"
            />
            <SearchRecommendations
                artist={artist}
                setArtist={setArtist}
                handleSubmit={handleSubmit}
            />
            <Content
                artist={artist}
                handleRecommendation={handleRecommendation}
            />
            <Footer />
        </div>
    );
}

export default App;
