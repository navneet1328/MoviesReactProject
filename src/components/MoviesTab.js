import React, { Component } from 'react'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import { getMoviesCategories } from '../services/api'
// const getStyles = makeStyles(theme => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: '250px',
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
// }));



class MoviesTab extends Component {
  state = {
    tabMoviesName: '',
    tabMovies: [],
    isLoading: false
  }

  fetchMoviesTab = e => {
    const { category } = this.state
    e.preventDefault()

    this.setState({
      isLoading: true
    })

    getMoviesCategories().then(
      tabMovies => {

        this.setState({
          tabMovies,
          isLoading: false
        })

        console.log("TabMoviess", tabMovies)
      })
  }

  
  handleInputChange = e => {

    this.getMoviesCategories();
    // this.setState({
    //  // category: event.target.value,
    //   //tabMoviesName
    // })
  }
  
  render() {

    const { isLoading, tabMovies } = this.state
    return (
      <div>
        
        <FormControl >
          <InputLabel shrink id="demo-simple-select-placeholder-label-label">
            Category
          </InputLabel>
          <Select
            labelId="demo-simple-select-placeholder-label-label"
            id="demo-simple-select-placeholder-label"

            variant='outlined'
            onInputChange={this.handleInputChange}
            displayEmpty>

            <MenuItem value={'now_playing'}>now_playing</MenuItem>
            <MenuItem value={'popular'}>popular</MenuItem>
            <MenuItem value={'top_rated'}>top_rated</MenuItem>
            <MenuItem value={'upcoming'}>upcoming</MenuItem>
          </Select>
        </FormControl>

      
{/* 
        {isLoading ? <Loading /> : <Movies movies={tabMovies} />} */}
      </div>
    )
    
  }

}
  export default MoviesTab


