import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import MovieCard from './MovieCard'
import { IMAGE_BASE_URL } from '../config/api_config'

const url = IMAGE_BASE_URL
const getStyles = makeStyles(theme => ({
    root: {
        margin: '1em 0',
        justifyContent: 'center'
    }

}))

const Movies = props => {

    const classes = getStyles()

    return (
        <div className='container'>

            <Grid container className={classes.root} spacing={3}>

                {props.movies.map(movie => {
                    const { poster_path, title, overview, release_date, popularity } = movie


                    return (

                        <Grid>
                            <MovieCard
                                imageUrl={url + poster_path}
                                name={title}
                                desc={overview}
                                relDate={release_date}
                                popul={popularity}
                            />
                        </Grid>

                    )
                })


                }


            </Grid>
        </div>
    )


}
export default Movies
