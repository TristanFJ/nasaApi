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