export default class AnswerService {
  constructor (axios) {
    this._axios = axios
  }

  async createAnswer (body, uri, token) {
    try {
      const config = {
        method: 'POST',
        url: uri,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`
        },
        data: body
      }

      const response = await this._axios(config)

      return response.data
    } catch (err) {
      throw err
    }
  }

  async updateAnswer (body, uri, token) {
    try {
      const config = {
        method: 'PUT',
        url: uri,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`
        },
        data: body
      }

      const response = await this._axios(config)

      return response.data
    } catch (err) {
      throw err
    }
  }

  async deleteAnswer (uri, token) {
    try {
      const config = {
        method: 'DELETE',
        url: uri,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`
        }
      }

      const response = await this._axios(config)

      return response.data
    } catch (err) {
      throw err
    }
  }
}
