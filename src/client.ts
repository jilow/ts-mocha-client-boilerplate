import * as jsend from 'jsend'
import axios from 'axios'

export default class Client {
  public url: string

  constructor(url: string) {
    if (!url) throw new TypeError('url cannot be an empty string!')
    this.url = url
  }

  public async fetch(path?: string): Promise<object> {
    const options = this.generateOptions(path)
    const { data } = await axios.request(options)
    if (!jsend.isValid(data)) throw new TypeError('Response is not valid jsend')
    return data
  }

  private generateOptions(path: string) {
    return {
      url: path,
      method: 'GET',
      baseURL: this.url,
      withCredentials: true,
    }
  }
}
