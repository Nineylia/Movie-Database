<script>
    import axios from "axios";

    let actor = {
        name: "",
        gender: "",
        age: "",
        nationality: "",
    };

    function addActor() {
        axios.post("http://localhost:3001/api/actors", actor)
            .then((response) => {
                alert("Actor added");
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });
    }
</script>

<div class="mb-5">
    <h1 class="mt-3">Add an Actor</h1>

    <form>
        <div class="mb-3">
            <label for="" class="form-label">Name</label>
            <input class="form-control" type="text" bind:value={actor.name} />
            <small class="form-text text-muted">Enter full name (e.g. Emma Watson)</small>
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Gender</label>
            <input class="form-control" type="text" bind:value={actor.gender} />
            <small class="form-text text-muted">Enter gender (Female, Male or Non-Binary)</small>
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Age</label>
            <input class="form-control" type="text" bind:value={actor.age} />
            <small class="form-text text-muted">Enter age</small>
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Nationality</label>
            <input class="form-control" type="text" bind:value={actor.nationality} />
            <small class="form-text text-muted">Enter nationality (e.g. Italien)</small>
        </div>
        <button on:click={addActor} type="button" class="btn btn-primary">
            Add Actor
        </button>
    </form>
</div>
