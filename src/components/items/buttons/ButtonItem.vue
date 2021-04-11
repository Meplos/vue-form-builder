<template>
  <div class="formItem__button">
      <v-btn
       :label="label"
       @click="click"
      >{{label}}</v-btn>
  </div>
</template>

<script>
import ItemMixin from "../../../mixins/ItemMixin";

export default {
  name: "button-item",
  mixins: [ItemMixin],
};
</script>

<style>
</style>