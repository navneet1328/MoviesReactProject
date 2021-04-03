import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import { getTvShowsCategories } from '../services/api'
import TvShowsList from '../components/TvShowsList'

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: '250px',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

class TvShowsContainer extends Component{
  
    state = {
        tvCategory: '',
        tvShows: [],
        isLoading: false
    }

    fetchTvShows =e => {

        const {tvCategory} = this.state

        this.setState({
            tvCategory:e,
            isLoading:true
        })

        console.log(e)
        getTvShowsCategories(e).then(

            tvShows => {

                this.setState({
                    tvShows,
                    isLoading:false
                })

            }
        )
    }

    handleInputChange = (event) => {

        // this.setState({
        //     tvCategory: event.target.value
        // })

        this.fetchTvShows(event.target.value)
    }

    componentDidMount() {
      this.fetchTvShows('airing_today')
    }

    render(){
        
        const { isLoading, tvShows, tvCategory } = this.state
        return (
            <div>
              <FormControl>
                <Select
                  value={tvCategory}
                  variant='outlined'
                  onChange={this.handleInputChange}
                  displayEmpty>
                      
                  <MenuItem value={'airing_today'}>airing_today</MenuItem>
                  <MenuItem value={'on_the_air'}>on_the_air</MenuItem>
                  <MenuItem value={'popular'}>popular</MenuItem>
                  <MenuItem value={'top_rated'}>top_rated</MenuItem>
                </Select>
              </FormControl>

              <TvShowsList tvShows={tvShows} />
              {/* {isLoading ? <Loading /> : <TvShowsList tvShows={tvShows} />} */}
            </div>
          );
    }
  
}

export default TvShowsContainer