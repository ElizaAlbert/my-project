<template>
  <div id="app">
    <div id="terms"></div>

    <div class="mycode">
      <h1>{{ title }}</h1>
      <form @submit.prevent="addLink">
        <input class="link-input" type="text" placeholder="ex. AftonBladet..." v-model="newLink" />
      </form>

      <ul>
        <li v-for="(link, index) in links" v-bind:key="index">
          {{ link }}
          <button @click="removeLinks(index)" class="rm">Radera</button>
        </li>
      </ul>
    </div>

    <div class="mycode2">
      <stats />
    </div>
  </div>
</template>



<script>
import Stats from "@/components/Stats.vue";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  name: "help",
  components: {
    Stats
  },
  computed: {
    ...mapState(["title", "links"])
    //otherstuff
  },
  methods: {
    ...mapMutations(["ADD_LINK"]),
    ...mapActions(["removeLink"]),
    addLink: function() {
      this.ADD_LINK(this.newLink);
      this.newLink = "";
    },
    removeLinks: function(link) {
      this.removeLink(link);
    }
  },
  data() {
    return {
      checkedTerms: [],
      newLink: ""
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body {
  background-color: #f4f4f4;
  margin: 0;
  height: 100%;
}

#terms {
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: 100%;
  grid-template-areas: "left right";
  height: 100%;
}

.mycode,
.mycode2 {
  padding: 30px;
}

ul {
  list-style-type: none;
  padding: 0;
}
ul li {
  padding: 20px;
  background: white;
  margin-bottom: 8px;
}

.right {
  grid-area: right;
  background-color: #e9e9e9;
}
</style>
