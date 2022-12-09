import { reactive } from "vue";
import { defineStore } from "pinia";
import { useContacts } from "../api";

export const useContactsStore = defineStore("contacts", () => {
  const state = reactive({
    contacts: [],
    count: 0,
    currentPage: 0,
    pages: 0,
    loading: false,
    error: false,
    errorDetails: {},
  });

  async function getAllContacts(query) {
    try {
      state.loading = true;

      const payload = query || null;
      const { contacts, count, currentPage, pages } =
        await useContacts.getAllContacts(payload);

      state.contacts = contacts;
      state.count = count;
      state.currentPage = currentPage;
      state.pages = pages;
    } catch (error) {
      state.error = true;
      state.errorDetails = error;
    } finally {
      state.loading = false;
    }
  }

  async function editContact(contact_id, payload) {
    try {
      state.loading = true;
      await useContacts.editContact(contact_id, payload);
    } catch (error) {
      state.error = true;
      state.errorDetails = error;
    } finally {
      state.loading = false;
    }
  }

  async function removeContact(contact_id) {
    try {
      state.loading = true;
      state.contacts = state.contacts.filter(
        (contact) => contact._id !== contact_id
      );
      await useContacts.removeContact(contact_id);
    } catch (error) {
      state.error = true;
      state.errorDetails = error;
    } finally {
      state.loading = false;
    }
  }

  return {
    state,
    getAllContacts,
    editContact,
    removeContact,
  };
});
