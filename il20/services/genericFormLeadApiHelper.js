import axios from 'axios'
import { configs } from '../constants'

const url = ''

export const genericFormLeadApiHelper = async (maildata) => {
  try {
    const response = await axios.post(
      `${configs.API_ENDPOINT}/leadsquare/customlead`,
      maildata
    )
    return response.data
  } catch (error) {
    console.log(error)
    if (error.response) {
      return Promise.reject(error.response.data.message)
    }
    return Promise.reject('Something went wrong')
  }
}
