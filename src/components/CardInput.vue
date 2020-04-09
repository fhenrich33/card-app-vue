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
          ? !/[345678920|AKQJ][HDCS]/.test(card.card)
          : false
      "
      :class="{ error: card.error }"
    />
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  list-style-type: none;
}
label {
  margin: 5px 5px;
  color: #b1b1b1;
  font-size: 12px;
  text-transform: uppercase;
  align-self: flex-start;
}
input[type="text"] {
  width: 200px;
  height: 35px;
  margin: 0px 5px;
  padding: 5px;
  background: white;
  border: solid 1px #ced2e0;
  border-radius: 5px;
  box-shadow: 0px 0px 10px #ddd;
}
.error {
  border: 2px solid red !important;
}
</style>
