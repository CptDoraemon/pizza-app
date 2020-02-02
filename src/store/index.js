import Vue from 'vue'
import Vuex from 'vuex'
import pizzaTemplateState from "./pizza-template";
import customizingPizzaState from "./customizing-pizza";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    pizzaTemplate: pizzaTemplateState,
    customizingPizza: customizingPizzaState
  }
})
