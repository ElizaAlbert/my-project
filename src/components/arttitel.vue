// HÄR ANVÄNDS EN PROP SOM SKRIVER UT ARTICLE.TITLE I ARTICLES.VUE
<template>
  <div id="app">{{ msg }}</div>
</template>

<script>
export default {
  name: "arttitel",
  props: {
    msg: String
  }
};
</script>

<style scoped>
</style>