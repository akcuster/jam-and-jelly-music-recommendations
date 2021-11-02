import { useRef } from 'react'

const Search = ({ artist, setArtist, handleSubmit}) => {
    const inputRef = useRef()
    return (
        <form className='searchForm' onSubmit={handleSubmit}>
            {/*TODO: style label to be hidden*/}
            {/*<label htmlFor='search'>Get Recommendations</label>*/}
            <input
                autoFocus
                ref={inputRef}
                id='search'
                type='text'
                role='searchbox'
                placeholder='Give Me Artists Like...'
                required
                value={artist}
                onChange={(e) => setArtist(e.target.value)}
            />
            <button
                type='submit'
                aria-label='Get Recommendations'
                onClick={() => inputRef.current.focus()}
            >
                Get Recommendations
            </button>

        </form>
    )
}

export default Search