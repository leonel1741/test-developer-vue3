<script setup>
import { useFavoritesStore } from "../store/favorites";

const favoritesMovieList = useFavoritesStore();
</script>

<template>
  <div class="movies--list-container">
    <div>
      <router-link to="/" class="mt-3 favorites-btn">
        <button class="btn btn-dark m-2 btn-hover">Back</button>
      </router-link>
      <h1>Favorites Movies</h1>
      <ul className="grid text-center card-container">
        <li
          className="card-item"
          v-for="(movie, index) in favoritesMovieList.favorites"
          v-bind:key="index"
        >
          <div>
            <img :src="movie.Poster" alt="" />
            <p><b>Title: </b>{{ movie.Title }}</p>
            <p><b>Released: </b>{{ movie.Released }}</p>
            <p><b>Director: </b>{{ movie.Director }}</p>
            <p><b>Actors: </b>{{ movie.Actors }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>


<style scoped>
.movies--list-container {
  padding: 20px;
}
.btn-hover {
    transition: 0.4s linear;
}
.btn-hover:hover {
    transform: scale(1.2);
}
.movies--list-container h1 {
  text-align: center;
}

.card-container {
  list-style: none;
  padding: 0px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 0.4fr));
  justify-content: center;
  gap: 26px;
}

.card-item {
  width: 100%;
  max-width: 450px;
  margin: 0 auto;
  padding: 10px 1.5rem;
  background-color: aliceblue;
  border-radius: 2rem;
  box-shadow: 0 0 2px 2px rgb(154, 173, 189);
}

.card-item img {
  width: 100%;
  max-width: 150px;
}

.card-item p {
  margin: 0;
  padding: 10px;
  display: flex;
  gap: 0.7rem;
}
</style>