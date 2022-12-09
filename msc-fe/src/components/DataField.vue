<template>
  <div class="data-field">
    <label class="data-field__label">{{ label }}</label>
    <div class="data-field__editor">
      <span v-if="!isEditable">{{ fieldData }}</span>
      <input v-else type="text" :value="value" @input="handleInput" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  keyName: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  fieldData: {
    type: String,
    required: true,
  },
  isEditable: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const value = ref(formatValue(props.fieldData));

const emit = defineEmits(["input"]);

function formatValue(value) {
  if (!value || value === "n/a") return "";
  return value;
}

function handleInput(e) {
  const eventData = { value: e.target.value, keyName: props.keyName };
  emit("input", eventData);
}
</script>

<style lang="css" scoped>
.data-field {
  width: 240px;
}

.data-field__label {
  padding-left: 10px;
  font-size: 11px;
  text-transform: capitalize;
  color: var(--drk-gray);
}

.data-field__editor {
  min-height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}

.data-field__editor span {
  min-height: 40px;
  margin: 0;
  padding: 10px;
  font-size: 12px;
  font-weight: 600;
  color: var(--drk-gray);
}

.data-field__editor input {
  width: 100%;
  height: 39px;
  padding: 0 8px;
  margin: 0;
  font-size: 12px;
  font-weight: 600;
  color: var(--drk-gray);
}

.data-field input::placeholder {
  font-size: 12px;
  font-weight: 600;
  color: var(--drk-gray);
}

.data-field input:focus {
  outline: none !important;
  border: 1px solid red;
  color: var(--drk-gray);
}
</style>
