const ItemMixin = {
  props: {
    label: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    model: [],
  }),
  methods: {
    submit: function() {
      this.$emit("submit", this.label, this.model);
    },
  },
  watch: {
    model: function() {
      this.submit();
    },
  },
};

export default ItemMixin;
