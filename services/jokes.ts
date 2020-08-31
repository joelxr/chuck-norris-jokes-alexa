import axios from 'axios'

const URL = 'https://api.chucknorris.io/jokes/random'

export const random = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    axios.get(URL).then((response) => {
      resolve(response.data.value)
    })
  })
}
