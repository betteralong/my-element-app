import axios from 'ts-axios-new'

const urlMap = {
  development: 'http://47.98.162.231:3000/elm/',
  production: 'http://47.98.162.231:3000/elm/'
}

const baseUrl = urlMap[process.env.NODE_ENV]
const ERR_OK = 0

export function get(url) {
  return function (params = {}) {
    return axios.get(baseUrl + url, {
      params
    }).then((res) => {
      const { errno, data } = res.data
      if (errno === ERR_OK) {
        return data
      }
    }).catch((e) => {
      console.log(e)
    })
  }
}
