<script>
    import axios from "axios";

    let actors = [];

    function getActors() {
        axios.get("http://localhost:3001/api/actors").then((response) => {
            actors = response.data;
        });
    }
    getActors();
</script>

<head>
<style>

// Styles für Tabelle und Bottom

#Actors {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#Actors td, #Movie th {
  border: 1px solid #000000;
  padding: 8px;
  background-color: #FFFAF0;
}

#Actors th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #000000;
  color: white;
}

</style>
</head>

<div class="mb-5">
    <h1 class="mt-3">List of all Actors</h1>
    
    <b><a href="#/create-actor" class="btn btn-dark">+ Add Actor</a></b>
    <b><a href="#/delete-actor" class="btn btn-dark">- Delete Actor</a></b>
    <table class="table" id=Actors>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Age</th>
                <th>Nationality</th>
            </tr>
        </thead>
        <tbody>
            {#each actors as actor}
                <tr>
                    <td>
                        <a href={"#/actors/" + actor._id}>
                            {actor._id}
                        </a>
                    </td>
                    <td>
                        {actor.name}
                    </td>
                    <td>
                        {actor.gender}
                    </td>
                    <td>
                        {actor.age}
                    </td>
                    <td>
                        {actor.nationality}
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
