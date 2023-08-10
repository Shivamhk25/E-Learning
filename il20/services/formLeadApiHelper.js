import axios from 'axios'
import { configs } from '../constants'
export const leadApiHelper = async (data) => {
  try {
    // console.log(process.env.NEXT_ENV)
    console.log({ configs })
    // const response=await axios.post(`${configs.API_ENDPOINT}/leadsquare/lead`,data);
    const response = await axios.post(
      `${configs.API_ENDPOINT}/leadsquare/lead`,
      data
    )
    return response.data.data
  } catch (error) {
    console.log(error)
    if (error.response) {
      return Promise.reject(error.response.data.message)
    }
    return Promise.reject('Something went wrong')
  }
}
