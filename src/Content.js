import { useState } from 'react'

const Content = ({ artist }) => {

    return (
        <main>
            <h2>Recommending new jams based on music you already love</h2>
            <p>{artist}</p>

        </main>
    )
}

export default Content