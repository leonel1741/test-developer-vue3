<script setup>
import axios from "axios";
import { computed, ref } from "vue";
import { useFavoritesStore } from "../store/favorites";

const movie = ref({});
const movieTitle = ref("");
const isVisible = ref(false);
const favoritesMovieList = useFavoritesStore();

const fetch = () => {
  const params = {
    t: movieTitle.value,
  };
  axios
    .get(`https://www.omdbapi.com/?apikey=d008d647`, { params })
    .then((res) => {
      movie.value = res.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

const searchName = () => {
  fetch();
  movieTitle.value = "";
};
</script>

<template>
  <div class="home-container">
    <img src="../assets/imagen-peliculas.jpeg" alt="" />
    <h1>Movies</h1>
    <form>
      <input
        class="input-search"
        type="text"
        placeholder="Search Movie"
        v-model="movieTitle"
      />
      <button class="btn btn-dark btn-hover" @click.prevent="searchName">
        Search
      </button>
    </form>
    <router-link to="/favorites" class="mt-3 favorites-btn">
      <button class="btn btn-danger m-2 btn-hover">Favorites Movies</button>
    </router-link>
    <ul class="list-group movies--list-container" v-if="movie.Title">
      <li class="list-group-item img-container">
        <img class="image--card-home" :src="movie.Poster" :alt="movie.Title" />
      </li>
      <li class="list-group-item"><b>Title: </b>{{ movie.Title }}</li>
      <li class="list-group-item"><b>Released: </b>{{ movie.Released }}</li>
      <li class="list-group-item"><b>Director: </b>{{ movie.Director }}</li>
      <li class="list-group-item"><b>Actors: </b>{{ movie.Actors }}</li>
      <li class="list-group-item btn-container">
        <button
          class="btn btn-primary btn-hover"
          @click="favoritesMovieList.addMovie(movie)"
        >
          Save Movie
        </button>
      </li>
    </ul>
  </div>
</template>

<style>
.btn-hover {
  transition: 0.4s linear;
}
.btn-hover:hover {
  transform: scale(1.2);
}
.home-container {
  display: grid;
  flex-direction: column;
  place-content: center;
  justify-content: center;
  gap: 10px;
  padding-bottom: 20px;
}

.home-container img {
  width: 100%;
}

.home-container h1 {
  text-align: center;
  font-size: 2.5rem;
}

.home-container form {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
}

.input-search {
  width: 100%;
  max-width: 400px;
  padding: 6px;
  border-radius: 5px;
  border-color: rgb(128, 127, 126);
}

.movies--list-container {
  padding: 20px;
}

.favorites-btn {
  margin: 0 auto;
}

.home-container ul {
  margin: 0 auto;
}

.img-container,
.btn-container {
  display: flex;
  justify-content: center;
}
</style>