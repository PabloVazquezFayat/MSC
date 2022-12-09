export default class API {
  constructor(httpClient, endpoint) {
    this.endpoint = endpoint;
    this.get = httpClient.get;
    this.put = httpClient.put;
    this.delete = httpClient.delete;
  }
}
