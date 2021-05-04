import React from "react";
import ReactDOM from "react-dom";
import { fetchAllPokemon } from "./util/api_util"
import { receiveAllPokemon } from "./actions/pokemon_actions"


document.addEventListener('DOMContentLoaded', () => {

    window.receiveAllPokemon = receiveAllPokemon ;
    window.fetchAllPokemon = fetchAllPokemon;
    window.store = store;
    window.getState = store.getState; 
    window.dispatch = store.dispatch;

    const rootEl = document.getElementById('root');
    const store = configureStore();
    ReactDOM.render(<Root store={store}/>, rootEl);
  });