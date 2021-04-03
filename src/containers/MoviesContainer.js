import React, { Component } from 'react'
import Form from '../components/Form'
import { getMovies } from '../services/api'
import Movies from '../components/Movies'

class MoviesContainer extends Component {
    state = {
        moviesName: '',
        movies: [],
        isLoading: false
    }


    fetchMovies = e => {

        const { movieName } = this.state
        e.preventDefault()

        this.setState({
            isLoading: true
        })

        getMovies(movieName).then(

            movies => {
                this.setState({
                    movies,
                    isLoading: false
                })
                console.log('Movies', movies)

                { <Movies movies={movies} /> }

            }


        )
    }


    handleInputChange = movieName => {

        this.setState({
            movieName
        })
    }

    render() {
        const { isLoading, movies } = this.state

        return (

            <div>

                <Form
                    onInputChange={this.handleInputChange}
                    onSubmit={this.fetchMovies}
                />

                <Movies movies={movies} />

            </div>
        )

    }
}

export default MoviesContainer