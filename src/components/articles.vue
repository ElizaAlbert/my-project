<template>
  <div id="app">
    <!-- Header -->

    <!-- Image header -->
    <header class="w3-display-container w3-wide" id="home">
      <img class="w3-image" src="../images/rednews.png" alt="Fashion Blog" />
      <div class="w3-display-left w3-padding-large">
        <h1 class="w3-text-white">
          <span class="w3-tag">#1 Online</span>
        </h1>
        <h1 class="w3-jumbo w3-text-white w3-hide-small">
          <b>Nyhetssida!</b>
        </h1>
        <h6>
          <button
            class="w3-button w3-white w3-padding-large w3-large w3-opacity w3-hover-opacity-off"
            onclick="document.getElementById('subscribe').style.display='block'"
          >SUBSCRIBE</button>
        </h6>
      </div>
    </header>
    <div id="allarticles">
      <div class="assonot" v-if="articles !== null">
        <div v-for="article in articles.slice(0, 6)" :key="article.title" class="divenstyle">
          <!---------------------------------- PROPS USED  ---------------------------------->
          <h5>
            <arttitel class="newstitle" :msg="article.title" />
          </h5>
          <img
            :src="article.urlToImage"
            alt
            style="width:25em; height: 15em"
            class="w3-hover-opacity"
          />
          <div class="w3-container w3-white">
            <h6 class="authors" style="align-text: left">{{article.author}}</h6>
            <p class="venne">{{article.description}}</p>
            <!-- <p class="venne">{{article.content}}</p> -->
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="page-footer font-small blue">
      <!-- Copyright -->
      <div class="footer-copyright text-center py-3">
        © 2020 Copyright:
        <a
          href="https://mdbootstrap.com/education/bootstrap/"
        >MorningRecordsPRO.com</a>
      </div>
      <!-- Copyright -->
    </footer>
    <!-- Footer -->
    <router-view></router-view>
  </div>
</template>

<script>
import arttitel from "./arttitel.vue";

export default {
  name: "home",
  components: {
    arttitel
  },
  data() {
    return {
      articles: null
    };
  },
  created() {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=320147ce186046a2be72279678009747"
    )
      .then(response => response.json())
      .then(result => {
        this.articles = result.articles;
        console.log(result.articles[0]);
        console.log(result.articles[1].author);
      });
  }
};
</script>

<style>
.authors {
  text-align: right;
}

.venne {
  font-family: "Candara";
  font-size: 17px;
}
.w3-hover-opacity {
  width: 24em;
  box-shadow: 0px 0px 33px -4px rgba(0, 0, 0, 0.747);
  border-radius: 10px;
  margin-top: 1em;
}

.w3-row-padding {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 5fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}
.assonot {
  width: 275px;
  display: inline-block;
  *display: inline;
  zoom: 1;
  vertical-align: top;
  margin: 0 38px 0 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}

.divenstyle {
  margin: 1em;
}

.w3-image {
  width: 1600px;
  height: 400px;
}
.newstitle {
  font-size: 20px;
  font-family: "Cambria";
}

#app {
  font-family: "Candara";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: white;
  text-shadow: 5px 5px 5px rgba(148, 150, 150, 0.315);
}
body {
  font-size: 15px;
  line-height: 26px;
  background-image: "images/blbk.jpg";
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 700;
  line-height: 1.4;
  color: #111111;
}

#bild {
  width: 24em;
  border-radius: 5px;
}

#allarticles {
  width: 1220px;
  margin: auto;
}
</style>
