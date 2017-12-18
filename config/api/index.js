import axios from 'axios'

const Api = {
  get: (url) =>
      axios.get(url)
           .then(response => response)
           .catch(error => error)
}

export default Api
