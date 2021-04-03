import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { IMAGE_BASE_URL } from '../config/api_config'
import Card  from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import { CardContent } from '@material-ui/core'


const url = IMAGE_BASE_URL
const getStyles = makeStyles(theme => ({
    
    root: {
        display: 'flex',
        margin: '10px',
        height: '300px',
        width: '100%'
    },
    media: {
        width: '30%',
        height: '100%'
    },
    mainContent: {
        flex: '1',
        fontSize: '10px',
        margin: 'auto'
      },
      content: {
          color: 'grey',
          textAlign: 'left'
      }

}))

const TvShowsList = props => {
    const classes = getStyles()

    console.log("===================",props)
    return (

        <div className='container'>
            <Grid container className={classes.root} spacing={3}>
                {props.tvShows.map(tabMovies => {

                    return (

                            <Card className={classes.root}>
                                
                            <CardMedia className={classes.media} image={url + (tabMovies.poster_path)} />
                               
                               <div className={classes.mainContent}>
                                <CardHeader title={tabMovies.title} subheader={'Release Date: '+tabMovies.first_air_date+ '| Popularity: '+tabMovies.popularity} />
                                <CardContent className={classes.content}>{tabMovies.overview}</CardContent>
                                </div>

                            </Card>


                    )
                })}

            </Grid>
        </div>
    )
}

export default TvShowsList