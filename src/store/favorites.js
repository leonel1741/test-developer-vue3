import { defineStore } from "pinia";

export const useFavoritesStore = defineStore('favoritesStore', {
    state: () => ({
        favorites: []
    }),
    getters: {
        getFavoritesList(state) {
            return state.favorites;
        }
    },
    actions: {
        addMovie(movie) {

            this.favorites.push(movie);
        }
    }
})