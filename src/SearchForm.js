import { useRef } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

const Search = ({ artist, setArtist, handleSubmit}) => {
    const inputRef = useRef()
    return (
        <Grid
            container
            item
        >
            <Grid
                container
                item
                justifyContent='center'
                component='form'
                className='searchForm'
                onSubmit={handleSubmit}
            >

                <TextField
                    variant='outlined'
                    color='grey'
                    size='small'
                    autoFocus={true}
                    inputRef={inputRef}
                    id='search'
                    type='text'
                    role='searchbox'
                    placeholder='Give Me Artists Like...'
                    required
                    value={artist}
                    onChange={(e) => setArtist(e.target.value)}
                />
                <Button
                    variant='contained'
                    color='success'
                    type='submit'
                    aria-label='Get Recommendations'
                    onClick={() => inputRef.current.focus()}
                >
                    Search
                </Button>

            </Grid>
        </Grid>

    )
}

export default Search