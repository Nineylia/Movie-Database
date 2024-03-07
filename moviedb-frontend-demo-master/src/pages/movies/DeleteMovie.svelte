<script>
    import axios from "axios";
    
    export let params = {};
    let movie_id;
    let movie_id1;
  
    $: {
          movie_id = params.id;
          getMovie();
          
      }
  
      let movie = [];
  
      function getMovie() {
          axios.get("http://localhost:3001/api/movies")
              .then((response) => {
                  movie = response.data;
                  x = response.data;
              });
      }
      function deleteMovie() {
          axios.delete("http://localhost:3001/api/movies/" + movie_id1)
              .then((response) => {
                  getMovie();
                  alert("Movie deleted");
              })
              .catch((error) => {
                  console.log(error);
                  alert(error);
              });
      }
  
  </script>
  
<div class="card h-100" style="padding: 50px; margin: 0 50px">
  <div class="mb-5">
      
      <h1 class="mt-3">- Delete Movie</h1>
      <select class="form-select" bind:value={movie_id1} id="movie">
          {#each movie as movie}
              <option value={movie._id}>{movie.title}</option>
          {/each}
      </select>
      <button class="btn btn-danger mt-2" on:click={deleteMovie}>Delete</button>
  </div>

 <h3><a class="btn btn-dark mt-2" href="#/movies">
    Back
</a></h3>
</div>
