<script>
    import axios from "axios";
  
    export let params = {};
    let movie_id;
    let actor_id;
  
    $: {
      movie_id = params.id;
      getMovies();
      getActors();
    }
  
    let movie = {
      _id: "",
      title: "",
      released: "",
      genres: [],
      actors: [],
    };
  
    let actors = [];
  
    function getMovies() {
      axios.get("http://localhost:3001/api/movies/" + movie_id).then((response) => {
        movie = response.data;
      });
    }
  
    function getActors() {
      axios.get("http://localhost:3001/api/actors").then((response) => {
        actors = response.data;
      });
    }
  
    function addActorToMovie() {
      const selectedActor = actors.find((actor) => actor._id === actor_id);
      if (selectedActor) {
        movie.actors.push(selectedActor);
        axios.put("http://localhost:3001/api/movies/" + movie_id, movie).then((response) => {
          getMovies();
        });
      }
    }
  
    function deleteActorFromMovie(actorId) {
      const updatedActors = movie.actors.filter((actor) => actor._id !== actorId);
      movie.actors = updatedActors;
  
      axios.put("http://localhost:3001/api/movies/" + movie_id, movie).then((response) => {
        getMovies();
      });
    }
  </script>
  
  <style>
    .movie-details {
      background-color: #8f7b7b;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    
    .movie-details h1 {
      font-size: 50px;
    }
    
    .movie-details .actor-name a {
      color: #ffffff;
      text-decoration: none;
    }
    
    .update-actors {
      margin-top: 20px;
    }
    
    .update-actors h2 {
      font-size: 18px;
      margin-bottom: 10px;
    }
    
    .update-actors label {
      font-weight: bold;
    }
    
    .update-actors select {
      margin-bottom: 10px;
    }
  </style>
  
  <div class="movie-details">
    <h1 class="mt-3">{movie.title}</h1>
    <p>ID: {movie._id}</p>
    <p>Release Year: {movie.released}</p>
    <p>Genres:</p>
    <ul class="genres-list">
      {#each movie.genres as genre}
      <li>{genre}</li>
      {/each}
    </ul>
    <p>Actors:</p>
    <ul class="actors-list">
      {#each movie.actors as actor}
      <li>
        <span class="actor-name">
          <a href={`#/actors/${actor._id}`}>{actor.name}</a>
        </span>
        <button class="btn btn-danger" on:click={() => deleteActorFromMovie(actor._id)}>Delete</button>
      </li>
      {/each}
    </ul>
  </div>
  
  <div class="update-actors">
    <h2>Update Actors</h2>
    <label for="actor">Add Actors to movie</label>
    <select class="form-select" bind:value={actor_id} id="actor">
      {#each actors as actor}
      <option value={actor._id}>{actor.name}</option>
      {/each}
    </select>
    <button class="btn btn-primary mt-2" on:click={addActorToMovie}>Update</button>
  </div>
  