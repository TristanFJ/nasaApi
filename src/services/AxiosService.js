import Axios from 'axios'
import { baseURL } from '../env'

export const api = Axios.create({
  baseURL,
  timeout: 8000
})

export const apodApi = Axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod?api_key=fcYfRclDGLL2zVIEAO1anjKkPAkp1kzjmhBCWMvE', 
  timeout: 8000
})

export const neoApi = Axios.create({
  baseURL: 'https://www.neowsapp.com/rest/v1/feed?start_date=2021-11-9&detailed=false&api_key=fcYfRclDGLL2zVIEAO1anjKkPAkp1kzjmhBCWMvE', 
  timeout: 8000
})