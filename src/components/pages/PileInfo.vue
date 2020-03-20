<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import { PICK_CARDS } from "@/store/types";
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
    ...mapMutations([PICK_CARDS]),
    ...mapActions(["getFromPile"])
  },
  async created() {
    const pileRes = await this.getFromPile();
    const cards = pileRes.data.piles.my_little_pile.cards.map(
      cards => cards.code
    );
    this.PICK_CARDS(cards);
  }
};
</script>

<template>
  <div>
    <app-header>Ordered Pile</app-header>
    <div>
      <div v-for="(card, index) in sortedPile" :key="index">
        <card-image :card="card"></card-image>
      </div>
    </div>
    <div>
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

<style scoped></style>
