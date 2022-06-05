export default class AuthService {
  constructor (axios) {
    this.axios = axios
  }

  handleLoginError (e, toast) {
    if (e.response.data.message === 'Password is invalid') {
      toast.error('Invalid Credentials')
    } else if (e.response.data.message === 'User not found') {
      toast.error('User not found, please register')
    } else if (e.response.data.status_code === 400) {
      const errs = e.response.data.details

      for (const err of errs) {
        toast.error(err.message)
      }
    } else {
      toast.error('Login Failed, something went wrong')
    }
  }

  async login (email, password, uri) {
    try {
      console.log('logging in...')
      const config = {
        method: 'POST',
        url: uri,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        data: {
          email,
          password
        }
      }

      const response = await this.axios(config)

      return response.data
    } catch (err) {
      throw err
    }
  }
}
