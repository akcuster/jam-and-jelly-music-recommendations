import List from '@mui/material/List'
import Grid from '@mui/material/Grid'
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";

const Content = ({ searchedArtist, recommendations }) => {

    return (
        <Grid
            container
            item
            justifyContent='center'
            margin='3rem'
        >

                {searchedArtist &&
                <Typography
                    variant='h5'
                >
                    Artists Like {searchedArtist}
                </Typography>
                }
                <List>
                    {recommendations.map((artist, index) =>
                        <ListItem
                            key={index}
                        >
                            {artist.name}
                        </ListItem>)
                    }
                </List>

        </Grid>
    )
}

export default Content