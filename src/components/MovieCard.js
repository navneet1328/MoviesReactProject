import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import  Button  from '@material-ui/core/Button'
import Card  from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardActions from '@material-ui/core/CardActions'
import CardMedia from '@material-ui/core/CardMedia'

import { CardContent } from '@material-ui/core'

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


const MovieCard = props => {
    const classes = getStyles()
    const {key, id, imageUrl, name, desc, relDate, popul } = props

    return (
        
        <Card className={classes.root}>

        <CardMedia className={classes.media} image={imageUrl}/>

        <div className={classes.mainContent}>
            <CardHeader title={name} subheader={'Release Date: '+relDate+ '| Popularity: '+popul}/>
            
            <CardContent className={classes.content}>{desc}</CardContent>

            </div>

        </Card>
    )
}

export default MovieCard