import API from "./api";

export default class Contacts extends API {
  constructor(httpClient, endpoint) {
    super(httpClient, endpoint);
  }

  async getAllContacts(payload) {
    const query = payload
      ? `?page=${payload.page}&search=${payload.search}`
      : "";
    const endpoint = `${this.endpoint}${query}`;
    return this.get(endpoint);
  }

  async editContact(contact_id, payload) {
    const endpoint = `${this.endpoint}/${contact_id}`;
    return this.put(endpoint, payload);
  }

  async removeContact(contact_id) {
    const endpoint = `${this.endpoint}/${contact_id}`;
    return this.delete(endpoint);
  }
}
