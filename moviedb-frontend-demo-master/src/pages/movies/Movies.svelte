<script>
    import axios from "axios";

    let movies = [];

    function getMovies() {
        axios.get("http://localhost:3001/api/movies").then((response) => {
            movies = response.data;
        });
    }
    getMovies();
</script>

<head>
<style>

#Movies {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#Movies td, #Movie th {
  border: 1px solid #000000;
  padding: 8px;
  background-color: #FFFAF0;
}

#Movies th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #000000;
  color: white;
}

</style>
</head>


<div class="mb-5" id = Movies>
    <h1 class="mt-3">List of all Movies</h1>
    <b><a href="#/create-movie" class="btn btn-dark">+ Add Movie</a></b>
    <b><a href="#/delete-movie" class="btn btn-dark">- Delete Movie</a></b>
    <table class="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Released</th>
            </tr>
        </thead>
        <tbody>
            {#each movies as movie}
                <tr>
                    <td>
                        <a href={"#/movies/" + movie._id}>
                            {movie._id}
                        </a>
                    </td>
                    <td>
                        {movie.title}
                    </td>
                    <td>
                        {movie.released}
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
