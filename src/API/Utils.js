export default class Utils {
  static clearArrFromDuplicate = (arr) => {
    if (arr) {
      const strObj = arr.reduce((uniques, item) => {
        const item02 = JSON.stringify(item)
        return uniques.includes(item02) ? uniques : [...uniques, item02]
      }, [])

      return strObj.map((obj) => JSON.parse(obj))
    }
    return null
  }

  static checkStatus = (response) => {
    if (response.status >= 200 && response.status < 300) {
      return response
    }
    const error = new Error(response.statusText)

    error.response = response
    throw error
  }

  static parseJSON = (response) => {
    return response.json()
  }

  static fetchJSON = (url) =>
    fetch(url).then(this.checkStatus).then(this.parseJSON)
}

// 59CDafTnK5TeXMtpaRwlrBGoJJ0WoLciNEVfIe5z
