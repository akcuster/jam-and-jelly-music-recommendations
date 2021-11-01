const SearchRecommendations = () => {
    return (
        <form className='searchForm'>
            {/*TODO: style label to be hidden*/}
            {/*<label htmlFor='search'>Get Recommendations</label>*/}
            <input
                autoFocus
                id='search'
                type='text'
                placeholder='Give Me Artists Like...'
                required
            />
            <button
                type='submit'
                aria-label='Get Recommendations'
            >
                Get Recommendations
            </button>

        </form>
    )
}

export default SearchRecommendations