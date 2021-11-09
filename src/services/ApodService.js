import {apodApi} from './AxiosService'
import { logger } from "../utils/Logger"
import { AppState } from "../AppState"
import { Picture } from "../models/Picture"

const apiKey = 'api_key=fcYfRclDGLL2zVIEAO1anjKkPAkp1kzjmhBCWMvE'

class ApodService{
  async findApod(){
    const res = await apodApi.get()
    const pic = new Picture(res.data)
    AppState.apod = pic
    logger.log(AppState.apod)
  }
}

export const apodService = new ApodService()