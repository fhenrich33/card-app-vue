<script>
export default {
  name: "CardImage",
  props: {
    card: {
      type: String,
      required: true,
      validator: function(value) {
        return /[\d|AKQJ][HDCS]/.test(value);
      }
    }
  },
  data: function() {
    return {
      suitEnum: {
        S: "♠️",
        C: "♣︎",
        D: "♦",
        H: "♥︎"
      },
      suitColor: {
        S: false,
        C: false,
        D: true,
        H: true
      }
    };
  }
};
</script>

<template>
  <div class="card">
    <div class="top" :class="{ red: suitColor[card[1]] }">
      {{ card[0] + " " + suitEnum[card[1]] }}
    </div>
    <div class="down" :class="{ red: suitColor[card[1]] }">
      {{ card[0] + " " + suitEnum[card[1]] }}
    </div>
  </div>
</template>

<style scoped>
.red {
  color: red;
}
</style>
