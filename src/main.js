import Vue from 'vue'
//const Vue = require("vue") raden ovan och den här raden gör samma sak
import Vuex from 'vuex'
import App from './App.vue'
import VueRouter from 'vue-router'
import articles from './components/articles.vue'
import help from './components/help.vue'

Vue.use(VueRouter)
Vue.use(Vuex)

Vue.config.productionTip = false
// Raden ovan är onödig men gör konsolen mer clean.

const router = new VueRouter({
  routes: [{
    component: articles, path: '/'
  },
  {
    component: help, path: '/help'
  }],
})

const store = new Vuex.Store({
  state: {
    title: 'Vilka Nyhetssidor ska vi inkludera på vår sida härnäst?',
    links: [
      "New York Times",
    ]
  },
  getters: {
    countLinks: state => {
      return state.links
    }
  },
  mutations: {
    ADD_LINK: (state, link) => {
      state.links.push(link)
    },
    REMOVE_LINK: (state, link) => {
      state.links.splice(link, 1)
    },
    REMOVE_ALL: (state) => {
      state.links = [];
    }
  },
  actions: {
    removeLink: (context, link) => {
      context.commit("REMOVE_LINK", link)
    },
    removeAll({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('REMOVE_ALL')
          resolve()
        }, 1500)
      })
    }
  }
})



new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
