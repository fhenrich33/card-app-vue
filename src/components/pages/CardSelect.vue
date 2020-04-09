<script>
import { mapActions } from "vuex";
import AppHeader from "@/components/AppHeader.vue";
import CardInput from "@/components/CardInput.vue";

export default {
  name: "CardSelect",
  components: {
    "app-header": AppHeader,
    "card-input": CardInput
  },
  data() {
    return {
      loading: false,
      errors: [],
      rotationCard: { card: "", error: false },
      cards: [
        { card: "", error: false },
        { card: "", error: false },
        { card: "", error: false },
        { card: "", error: false },
        { card: "", error: false },
        { card: "", error: false },
        { card: "", error: false },
        { card: "", error: false },
        { card: "", error: false },
        { card: "", error: false }
      ]
    };
  },
  methods: {
    ...mapActions(["newDeck"]),
    checkForm: async function(e) {
      e.preventDefault();
      this.errors = [];

      if (!this.rotationCard.card) {
        this.errors.push("Pick a rotation card.");
      }
      if (!this.cards.some(c => c.card)) {
        this.errors.push("Pick at least one valid card.");
      }
      if (this.cards.some(c => c.error) || this.rotationCard.error) {
        this.errors.push(
          "Pick only valid cards with signature RankSuit (e.g. KH 2S 6C)"
        );
      }

      if (!this.errors.length) {
        this.loading = true;
        const cards = this.cards.map(c => c.card).filter(c => c.length);
        let deckId;

        try {
          deckId = await this.newDeck({
            cards,
            rotationCard: this.rotationCard.card
          });

          this.$router.push(`/pile-info/${deckId}`);
        } catch (error) {
          this.loading = false;
          alert(
            "We couldn't finish setting up your cards, are you offline? 🔌"
          );
        }
      }
    }
  }
};
</script>

<template>
  <div>
    <app-header>Cards</app-header>
    <form @submit="checkForm" novalidate="true">
      <h3 class="error-message-header" v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul class="error-message">
          <li :key="error" v-for="error in errors">{{ error }}</li>
        </ul>
      </h3>
      <div>
        <ul>
          <li v-for="(card, index) in cards" :key="index">
            <card-input
              :card="card"
              :number="index + 1"
              :haslabel="true"
            ></card-input>
          </li>
        </ul>
      </div>
      <div class="rotation-card">
        <h1>Rotation Card</h1>
        <card-input :card="rotationCard"></card-input>
      </div>
      <input
        class="submit"
        type="submit"
        :value="loading ? 'Loading...' : 'Submit'"
        :disabled="loading"
      />
    </form>
  </div>
</template>

<style scoped>
input,
button,
submit {
  border: none;
}
form {
  max-width: 1050px;
  margin: auto;
}
ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
li {
  margin: 20px 0px;
  flex: 0 0 20%;
  list-style-type: none;
}
.error-message-header {
  margin: 30px 0px;
  animation: fadein 2s;
}
.error-message {
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: fadein 2s;
}
.rotation-card {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 50px 0px;
}
.rotation-card h1 {
  margin: 0 15px;
}
.submit {
  font-family: inherit;
  background: #1c0063;
  color: #fbe500;
  font-size: 30px;
  font-weight: 700;
  border-radius: 20px;
  padding: 10px 50px;
}
.submit:active {
  background: #471eaf;
}
@keyframes fadein {
  from {
    color: red;
  }
  to {
    opacity: black;
  }
}
</style>
