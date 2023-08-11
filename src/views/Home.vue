<script setup>
import axios from "axios";
import { ref } from "vue";
import { useFavoritesStore } from "../store/favorites";

const movieDetail = ref({});
const movieTitle = ref("");
const favoritesMovieList = useFavoritesStore();

const fetch = () => {
  const params = {
    t: movieTitle.value,
  };
  axios
    .get(`https://www.omdbapi.com/?apikey=d008d647`, { params })
    .then((res) => {
      movieDetail.value = res.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

const searchName = () => {
  fetch();
  movieTitle.value = "";
};

const checkMovie = (movieDetail) => {
  const result = favoritesMovieList.favorites.find(
    (movie) => movie.Title === movieDetail.Title
  );
  if (!result) {
    favoritesMovieList.addMovie(movieDetail);
  } else {
    alert("La pelicula ya se agrego a favoritos");
  }
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
    <ul class="list-group movies--list-container" v-if="movieDetail.Title">
      <li class="list-group-item img-container">
        <img
          class="image--card-home"
          :src="movieDetail.Poster"
          :alt="movieDetail.Title"
        />
      </li>
      <li class="list-group-item"><b>Title: </b>{{ movieDetail.Title }}</li>
      <li class="list-group-item">
        <b>movieDetail: </b>{{ movieDetail.Released }}
      </li>
      <li class="list-group-item">
        <b>Director: </b>{{ movieDetail.Director }}
      </li>
      <li class="list-group-item"><b>Actors: </b>{{ movieDetail.Actors }}</li>
      <li class="list-group-item btn-container">
        <button
          class="btn btn-primary btn-hover"
          @click="checkMovie(movieDetail)"
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