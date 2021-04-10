<template>
  <div class="formItem">
    <v-text-field
      :label="label"
      :placeholder="placeholder"
      v-model="model"
      :rules="rules"
      :type="type"
      shaped
      filled
    />
  </div>
</template>

<script>
import ItemMixin from "../../mixins/ItemMixin";
export default {
  name: "input-item",
  mixins: [ItemMixin],
  props: {
    placeholder: {
      type: String,
      default: "Enter text here",
    },
    rules: {
      type: Array,
    },
    type: {
      type: String,
      default: "text",
    },
  },
  data: () => ({
    value: null,
  }),
  methods: {},
};
</script>

<style></style>
