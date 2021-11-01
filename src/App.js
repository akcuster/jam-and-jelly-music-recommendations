import Header from "./Header";
import Search from "./Search";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from "react"

const App = () => {

    const [artist, setArtist] = useState('')

    const handleSearch = () => {
        const artists = ["Buddy Holly", "The Beatles", "David Bowie"]
        const int = Math.floor(Math.random() * 3)

        setArtist(artists[int])
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(artist)
        setArtist('')
    }

    return (
        <div>
            <Header
                title="Jam & Jelly"
            />
            <Search
                artist={artist}
                setArtist={setArtist}
                handleSubmit={handleSubmit}
            />
            <Content
                artist={artist}
                handleSearch={handleSearch}
            />
            <Footer />
        </div>
    );
}

export default App;
