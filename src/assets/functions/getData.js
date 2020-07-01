import axios from 'axios'

async function getData (url) {
  try {
    const data = await axios({
      method: 'GET',
      url
    })

    return data
  } catch (err) {
    throw new Error(err)
  }
}

export default getData
