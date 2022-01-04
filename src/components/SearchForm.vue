<template>
  <div>
    <input type="text" v-model="inputData" />
    <button @click="fetchSpeaker(inputData)">Add speaker</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      inputData: "Speaker",
    };
  },
  methods: {
    ...mapActions({
      fetchSpeaker: "FETCH_SPEAKER",
    }),
  },
};
</script>

<style></style>
