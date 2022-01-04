<template>
  <div>
    <speaker
      v-for="(speaker, index) in speakers"
      :key="index"
      :speaker="speaker"
    />
  </div>
</template>

<script>
import Speaker from "./Speaker";

export default {
  components: {
    Speaker,
  },
  props: {
    speakers: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style></style>
