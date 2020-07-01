import axios from 'axios'
import getData from './getData'

async function getDataFromArray (selectedIds) {
  try {
    const dataSet = await axios.all(selectedIds.map(async id => {
      const data = await getData(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
      return data
    }))
    const response = dataSet.map(res => res.data)

    return response
  } catch (err) {
    throw new Error(err)
  }
}

export default getDataFromArray
