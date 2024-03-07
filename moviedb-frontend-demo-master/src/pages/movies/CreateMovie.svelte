<script>
    import axios from "axios";

    let movie = {
        title: "",
        released: "",
        genres: "",
        actors: [],
    };

    function addMovie() {
        axios.post("http://localhost:3001/api/movies", movie)
            .then((response) => {
                alert("Movie added");
            })
            .catch((error) => {
                console.log(error);
                alert(error);
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
</script>

<div class="mb-5">
    <h1 class="mt-3">Add Movie</h1>

    <form>
        <div class="mb-3">
            <label for="" class="form-label">Title</label>
            <input class="form-control" type="text" bind:value={movie.title} />
            <small class="form-text text-muted">Enter movie title (e.g. Harry Potter)</small>
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Release Date</label>
            <input class="form-control" type="text" bind:value={movie.released} />
            <small class="form-text text-muted">Enter release year (e.g. 2003)</small>
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Genre</label>
            <input class="form-control" type="text" bind:value={movie.genres} />
            <small class="form-text text-muted">Enter multiple genres separated by commas (e.g., Action, Drama, Comedy)</small>
        </div>
        <button on:click={addMovie} type="button" class="btn btn-primary">
            Add Movie
        </button>
    </form>
</div>
