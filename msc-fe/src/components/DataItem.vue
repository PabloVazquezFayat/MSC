<template>
  <li class="data-item">
    <DataField
      v-for="(value, i) in filteredContact"
      :key="`${i}-${value}`"
      :keyName="i"
      :label="labels[i]"
      :field-data="value"
      :is-editable="isEditable"
      @input="handleInput"
    />
    <button v-if="!isEditable" @click="handleEditClick">edit</button>
    <button v-else @click="handleSaveClick">save</button>
    <button @click="handleRemoveClick">remove</button>
  </li>
</template>

<script setup>
import { ref } from "vue";
import DataField from "./DataField.vue";
import { useContactsStore } from "@/stores/contacts";

const contactsStore = useContactsStore();
const isEditable = ref(false);
const editedContact = {};

const props = defineProps({
  contact: {
    type: Object,
    required: true,
  },
});

const labels = {
  name: "name",
  address: "address",
  phoneNumber: "phone number",
  email: "email",
};

const filteredContact = ref({
  name: props.contact.name,
  address: props.contact.address || "n/a",
  phoneNumber: props.contact.phoneNumber || "n/a",
  email: props.contact.email,
});

function setIsEditable() {
  isEditable.value = !isEditable.value;
}

function handleInput(e) {
  const { value, keyName } = e;
  editedContact[keyName] = value;
}

function handleEditClick() {
  setIsEditable();
}

function handleSaveClick() {
  setIsEditable();
  const payload = {
    ...filteredContact.value,
    ...editedContact,
  };
  contactsStore.editContact(props.contact._id, payload);
  filteredContact.value = payload;
}

function handleRemoveClick() {
  contactsStore.removeContact(props.contact._id);
}
</script>

<style lang="css" scoped>
.data-item {
  padding: 4px 10px;
  margin: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid var(--gray);
  border-radius: 2px;
}

.data-item button {
  width: 75px;
  background: none;
  border: none;
  color: var(--drk-gray);
  text-decoration: underline;
  text-transform: capitalize;
  cursor: pointer;
}
</style>
