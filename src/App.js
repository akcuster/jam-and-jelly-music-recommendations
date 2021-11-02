import Header from "./Header";
import SearchForm from "./SearchForm";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from "react"
import api from "./apiRequest";

const App = () => {

    const [artist, setArtist] = useState('')
    const [recommendations, setRecommendations] = useState([])
    const [fetchError, setFetchError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const handleSearch = () => {
        const fetchRecommendations = async () => {
            try {
                const response = await api.get('/similarartists')
                console.log(response.data.artist[0].name)
                setRecommendations(response.data.artist)
                setFetchError(null)
            } catch (e) {
                setIsLoading(false)
                setFetchError(e.message)
                // console.log(e.response.data)
                // console.log(e.response.status)
                // console.log(e.response.headers)
            } finally {
                setIsLoading(false)
            }
        }

        fetchRecommendations()
        console.log(`Artist searched is ${artist}`)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true)
        handleSearch(artist)
        setArtist('')
    }

    return (
        <div>
            <Header
                title="Jam & Jelly"
            />
            <SearchForm
                artist={artist}
                setArtist={setArtist}
                handleSubmit={handleSubmit}
            />
            <main>
                {isLoading && <p>Loading...</p>}
                {fetchError && <p>{`Error: ${fetchError}`}</p>}
                {!fetchError && !isLoading &&
                <Content
                    artist={artist}
                    recommendations={recommendations}
                />
                }
            </main>
            <Footer />
        </div>
    );
}

export default App;
