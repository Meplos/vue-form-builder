<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>{{ $appName }}</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-row justify="center">
        <v-col
          class="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 col-xs-12 ps-16 pe-16"
          align-self="center"
        >
          <input-item @submit="onSubmit" label="Input"></input-item>
        </v-col>
        <v-col
          class="col-lg-4 col-md-12col-sm-12 col-xs-12 ps-16 pe-16"
          align-self="center"
        >
          <select-item
            label="select"
            :multiple="true"
            @submit="onSubmit"
            :options="['John', 'Fitzgerald', 'Kenedy']"
          />
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col class="col-lg-4 col-md-4 col-sm-12 col-xs-12 " align-self="auto">
          <v-btn color="primary" @click="getResult">submit</v-btn>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import InputItem from "./components/items/InputItem";
import SelectItem from "./components/items/SelectItem";

export default {
  name: "App",

  components: {
    InputItem,
    SelectItem,
  },

  data: () => ({
    result: {},
  }),
  methods: {
    onSubmit: function(label, input) {
      this.result[label] = input;
    },
    getResult() {
      console.log(this.result);
    },
  },
};
</script>
