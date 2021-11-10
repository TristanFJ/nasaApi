import {neoApi} from './AxiosService'
import { logger } from "../utils/Logger"
import { AppState } from "../AppState"
import { Neo } from "../models/Neo"

const apiKey = 'api_key=fcYfRclDGLL2zVIEAO1anjKkPAkp1kzjmhBCWMvE'

class NeoService{
  async findNeo(){
    const res = await neoApi.get()
    // logger.log(res.data.near_earth_objects['2021-11-09'])
    const neo = res.data.near_earth_objects['2021-11-10'].map(n => new Neo(n))
    AppState.neo = neo
    // logger.log(AppState.neo)
  }
}

export const neoService = new NeoService()