import httpClient from "./httpClient";
import endpoints from "./endpoints";
import Contacts from "./api.contacts";

const useContacts = new Contacts(httpClient, endpoints.contacts);

export { useContacts };
