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
.card {
  width: 135px;
  height: 240px;
  margin: 20px;
  padding: 0 10px;
  font-size: 32px;
  font-weight: 700;
  background: #fff;
  border-radius: 10px;
  box-shadow: 2px 2px 5px #a797b0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.top {
  align-self: flex-start;
  margin: 5px;
}
.down {
  align-self: flex-end;
  margin: 5px;
  transform: rotate(180deg);
}
.red {
  color: red;
}
</style>
