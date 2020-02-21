<template>
  <div id="app">
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/">
          <img id="flygbild" src="./images/mrpro.png" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                <router-link to="/" id="homenav">Hem</router-link>
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <router-link to="/help">Hjälp</router-link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <router-link to="/contact">Kontakt</router-link>
              </a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </header>

    <!-- Navigation bar with social media icons -->
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
.w3-row-padding {
  margin: 4em 3em 3em 3em;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Oswald";
}
body {
  font-family: "Open Sans";
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
