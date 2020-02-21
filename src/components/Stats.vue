<template>
  <div id="stats">
    <p>Du föreslår: {{ countLinks.join(' , ') }}. Tryck på knappen nedan för att skicka in!</p>

    <button v-on:click="removeAllLinks">Skicka</button>
    <p>{{ mesaj }}</p>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "Stats",
  data() {
    return {
      mesaj: ""
    };
  },
  computed: {
    ...mapGetters(["countLinks"])
    //otherstuff
  },
  methods: {
    ...mapMutations(["REMOVE_ALL"]),
    ...mapActions(["removeAll"]),
    removeAllLinks() {
      this.removeAll().then(() => {
        this.mesaj = "Tack för medverkan!";
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
