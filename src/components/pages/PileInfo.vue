<script>
import { mapState, mapGetters, mapActions } from "vuex";
import AppHeader from "@/components/AppHeader.vue";
import CardImage from "@/components/CardImage.vue";

export default {
  name: "PileInfo",
  components: {
    "app-header": AppHeader,
    "card-image": CardImage
  },
  computed: {
    ...mapState(["rotationCard"]),
    ...mapGetters(["sortedPile", "highestCard", "fullHouseCombo"])
  },
  methods: {
    ...mapActions(["getFromPile"])
  },
  created() {
    this.getFromPile(this.$route.params.deckId);
  }
};
</script>

<template>
  <div>
    <app-header>Ordered Pile</app-header>
    <div class="pile-container">
      <div v-for="(card, index) in sortedPile" :key="index">
        <card-image :card="card"></card-image>
      </div>
    </div>
    <div class="info-container">
      <div>
        <h2>Rotation Card:</h2>
        <span>{{ rotationCard }}</span>
      </div>
      <div>
        <h2>High Card:</h2>
        <span>{{ highestCard }}</span>
      </div>
      <div>
        <h2>Full House Combos:</h2>
        <ul>
          <span v-if="!fullHouseCombo.length">None</span>
          <li v-for="(combo, index) in fullHouseCombo" :key="index">
            <span>{{ combo.toString().replace(/(\,)/g, ", ") }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
h2,
span {
  display: inline-block;
  margin: 5px;
}
li {
  list-style-type: none;
}
.pile-container {
  background: #d8d8d8;
  border: solid 2px #979797;
  max-width: 1000px;
  padding: 20px;
  margin: 50px auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
.info-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 1000px;
  padding: 20px 100px;
  margin: 0 auto;
}
</style>
