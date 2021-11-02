const Content = ({ artist, recommendations }) => {

    return (
        <>
            <h2>Recommending new jams based on music you already love</h2>
            <p>{artist}</p>
            <ol>
                {recommendations.map((artist, index) => <li key={index}>{artist.name}</li>)}
            </ol>


        </>
    )
}

export default Content