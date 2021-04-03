import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import { getMoviesCategories } from '../services/api'
import Loading from '../components/Loading'
import MoviesList from '../components/MoviesList'

const getStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: '250px',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


class MoviesTabContainer extends Component {
    
    state = {
        category: '',
        tabMovies: [],
        isLoading: false
    }

    fetchMoviesTab = e => {
        const { category } = this.state
        //e.preventDefault()

        this.setState({
            category:e,
            isLoading: true,
        })

        
        getMoviesCategories(e).then(
            
            tabMovies => {

                this.setState({
                    tabMovies,
                    isLoading: false,
                    
                })

            })
    }


    handleInputChange = (event) => {

        this.fetchMoviesTab(event.target.value)
        
    }

    componentDidMount() {
        // const {category} = this.state
        // this.setState({
        //     category:'now_playing',
        //     isLoading:false
        // })
        this.fetchMoviesTab('now_playing')
    }
    
    render() {
        const { isLoading, tabMovies, category } = this.state
        return (

            <div>

                <FormControl>

                    <Select
                        value={category}
                        variant='outlined'
                        onChange={this.handleInputChange}
                        displayEmpty>

                        <MenuItem value={'now_playing'}>now_playing</MenuItem>
                        <MenuItem value={'popular'}>popular</MenuItem>
                        <MenuItem value={'top_rated'}>top_rated</MenuItem>
                        <MenuItem value={'upcoming'}>upcoming</MenuItem>
                        
                    </Select>
                </FormControl>

                {/* {isLoading ? <Loading /> : <MoviesList tabMovies={tabMovies} />} */}

                <MoviesList tabMovies={tabMovies}/>
                
            </div>
        )
    }

}
export default MoviesTabContainer


