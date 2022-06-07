export default class QuestionService {
  constructor (axios) {
    this._axios = axios
  }

  handleStoreQuestionError (e, toast) {
    if (e.response.data.status_code === 400) {
      const errs = e.response.data.details

      for (const err of errs) {
        toast.error(err.message)
      }
    } else {
      toast.error('Submit question failed, something went wrong')
    }
  }

  async storeQuestion (question, uri, token) {
    try {
      const config = {
        method: 'POST',
        url: uri,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`
        },
        data: question
      }

      const response = await this._axios(config)

      return response.data
    } catch (err) {
      throw err
    }
  }

  async showQuestion (uri, token) {
    try {
      const config = {
        method: 'GET',
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

  async getQuestions (uri, token, params) {
    try {
      const config = {
        method: 'GET',
        url: uri,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`
        },
        params: {
          sort: params.sort || 'id,desc',
          per_page: 12,
          ...params
        }
      }

      const response = await this._axios(config)

      return response.data
    } catch (err) {
      throw err
    }
  }

  async updateQuestion (uri, token, body) {
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

  async deleteQuestion (uri, token) {
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
