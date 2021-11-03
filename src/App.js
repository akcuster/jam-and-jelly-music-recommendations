import Header from "./Header";
import SearchForm from "./SearchForm";
import Content from "./Content";
import { useState } from "react"
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

import api from "./apiRequest";


const App = () => {

    const [artist, setArtist] = useState('')
    const [searchedArtist, setSearchedArtist] = useState('')
    const [recommendations, setRecommendations] = useState([])
    const [fetchError, setFetchError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const handleSearch = () => {
        const fetchRecommendations = async () => {
            let response = null
            try {
                response = await api.get(`/2.0/?method=artist.getsimilar&artist=${encodeURIComponent(artist)}&limit=5&api_key=${process.env.REACT_APP_API_KEY}&format=json`)
                response.data.similarartists.artist && setRecommendations(response.data.similarartists.artist)

                setFetchError(null)
            } catch (err) {
                if (response) {
                    setFetchError(response.data.message)
                } else {
                    setFetchError(err.message)
                }
            } finally {
                setIsLoading(false)
            }
        }

        fetchRecommendations()
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true)
        handleSearch(artist)
        setSearchedArtist(artist)
        setArtist('')
    }

    return (
        <Container
            component='main'
            maxWidth='sm'
        >
            <Grid
                container
                item
                justifyContent='center'
            >

                <Header
                    title="Jam & Jelly"
                />

                <Grid
                    container
                    item
                >
                    <SearchForm
                        artist={artist}
                        setArtist={setArtist}
                        handleSubmit={handleSubmit}
                    />

                    {isLoading && <p>Loading...</p>}
                    {fetchError && <p>{`Error: ${fetchError}`}</p>}
                    {!fetchError && !isLoading &&
                    <Content

                        searchedArtist={searchedArtist}
                        recommendations={recommendations}
                    />
                    }
                </Grid>
            </Grid>
        </Container>
    );
}

export default App;
