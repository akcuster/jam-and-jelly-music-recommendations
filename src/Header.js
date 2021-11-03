import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

const Header = ({ title }) => {
    return (
        <Grid
           margin='2rem'
        >
            <Typography
                variant='h2'
                component='h1'
                align='center'
                color='secondary'
            >
                {title}
            </Typography>
            <Typography
                variant='subtitle1'
                align='center'
            >
                Recommending new jams based on music you already love
            </Typography>
        </Grid>
    )
}

export default Header