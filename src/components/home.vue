<template>
  <div id="app">
    <!-- NIVO SLIDER CODE DELETED -->
    <!-- <h1>hej</h1>
    <section>
      <div id="line">
        <div class="dline"></div>
        <h1 style="font-size: 40px; text-shadow: 0px 0px 15px rgba(150, 150, 148, 1);">BBC NEWS</h1>
        <div class="dline"></div>
      </div>

      <div v-if="articles !== null" id="ourserv">
        <div v-for="article in articles" :key="article.title">
          <article id="forsta" style="grid-gap: 20px;">
            <h1 class="titlarna">{{article.title}}</h1>
            <arttitel :msg="article.title" />
            <h2 class="forfattare">{{article.author}}</h2>
            <img id="bild" :src="article.urlToImage" />
            <p class="beskrivning">{{article.description}}</p>
            <p class="content">{{article.content}}</p>
          </article>
        </div>
      </div>

      <div id="sline" style="margin: 6em 0 5em 165px; ">
        <div class="sdline"></div>
        <h1 style="font-size: 40px; text-shadow: 0px 0px 15px rgba(150, 150, 148, 1);;">EXPRESSEN</h1>
        <div class="sdline"></div>
      </div>
      <div id="latestp">
        <article
          id="andra"
          style="display: grid; grid-template-columns: repeat(3, 1fr); grid-gap: 20px; grid-auto-rows: minmax(100px, auto);"
        ></article>
      </div>
    </section>

    <footer>
      <p>
        Copyright
        <a href="https://newsapi.org/">MorningRecord.news</a>. All Rights Reserved.
      </p>
    </footer>

    <h1>ok</h1>-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "home",
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  font-size: 15px;
  line-height: 26px;
  background-color: #ffffff;
}

h1,
h2,
h3,
h4,
h5,
body,
p,
.topbar-section,
.navbar-inverse .navbar-nav .nav-link,
.header .dropdown-menu,
.navbar-nav .nav-link {
  font-family: "Roboto", serif;
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

#ourserv {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 5fr);
  grid-column-gap: 21px;
  grid-row-gap: 19px;
}
</style>
