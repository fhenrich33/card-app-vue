<script>
export default {
  name: "CardInput",
  props: {
    card: {
      type: Object,
      required: true
    },
    number: {
      type: Number,
      required: false
    },
    haslabel: {
      type: Boolean,
      required: false
    }
  }
};
</script>

<template>
  <div>
    <label v-if="haslabel" for="card">Card {{ number ? number : "" }}</label>
    <input
      v-model="card.card"
      type="text"
      name="card"
      size="2"
      maxlength="2"
      placeholder="Enter card"
      @keyup="card.card = card.card.toUpperCase()"
      @blur="
        card.error = card.card.length
          ? !/[\d|AKQJ][HDCS]/.test(card.card)
          : false
      "
      :class="{ error: card.error }"
    />
  </div>
</template>

<style scoped>
.error {
  border: 2px solid red !important;
}
</style>
