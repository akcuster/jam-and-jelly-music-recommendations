import { useState } from 'react'

const Content = ({ artist, handleSearch }) => {

    return (
        <main>
            <h2>Recommending new jams based on music you already love</h2>
            <p>{artist}</p>
            <button onClick={handleSearch}>Click It</button>
        </main>
    )
}

export default Content