<template>
  <div class="formItem">
    <multiselect
      :placeholder="label"
      :multiple="multiple"
      v-model="model"
      :options="options"
      :searchable="true"
    />
  </div>
</template>

<script>
import ItemMixin from "../../mixins/ItemMixin";

import Multiselect from "vue-multiselect";
export default {
  name: "select-item",
  mixins: [ItemMixin],
  components: {
    Multiselect,
  },
  props: {
    multiple: Boolean,
    options: Array,
  },
  data: () => ({}),
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style></style>
