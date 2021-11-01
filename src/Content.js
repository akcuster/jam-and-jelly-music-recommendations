import { useState } from 'react'

const Content = ({ artist, handleRecommendation}) => {

    return (
        <main>
            <h2>Recommending new jams based on music you already love</h2>
            <p>{artist}</p>
            <button onClick={handleRecommendation}>Click It</button>
        </main>
    )
}

export default Content