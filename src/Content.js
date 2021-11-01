import { useState } from 'react'

const Content = () => {
    const [artist, setArtist] = useState('Give Me Artists Like...')

    const handleRecommendation = () => {
        const artists = ["Buddy Holly", "The Beatles", "David Bowie"]
        const int = Math.floor(Math.random() * 3)

        setArtist(artists[int])
    }

    return (
        <main>
            <h2>Recommending new jams based on music you already love</h2>
            <p>{artist}</p>
            <button onClick={handleRecommendation}>Click It</button>
        </main>
    )
}

export default Content