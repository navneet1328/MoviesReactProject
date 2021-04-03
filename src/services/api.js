import axios from 'axios'
import { APP_KEY, BASE_URL, SEARCH_URL,MOVIES_BASE, TV_SHOWS_BASE } from '../config/api_config'

export const getMovies = async (movieName) => {
    const url = BASE_URL + SEARCH_URL

    try {
        const response = await axios.get(url, {
            params: {
                api_key: APP_KEY,
                query: movieName
            }
        })

        const movies = response.data.results

        return movies

    } catch (error) {
        throw error
    }

}


export const getMoviesCategories = async (category) => {
    const url = MOVIES_BASE + category

    try {
        const response = await axios.get(url, {
            params: {
                api_key: APP_KEY,
                language: 'en-US',
            }
        })

        const tabMovies = response.data.results

        return tabMovies

    } catch (error) {
        throw error
    }

}

export const getTvShowsCategories = async (tvCategory) => {
    const url = TV_SHOWS_BASE + tvCategory
   
    try {
        const response = await axios.get(url, {
            params: {
                api_key: APP_KEY,
                language: 'en-US',
            }
        })

        const tvShows = response.data.results
   
        return tvShows

    } catch (error) {
        throw error
    }

}



