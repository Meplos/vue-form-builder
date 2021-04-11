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
    change: function() {
      this.$emit("change", this.label, this.model);
    },
    click: function () {
      this.$emit("click");
    }
  },
  watch: {
    model: function() {
      this.change();
    },
  },
};

export default ItemMixin;
