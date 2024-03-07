<script>
    import axios from "axios";
    
    export let params = {};

    let actor_id;

    $: {
        actor_id = params.id;
        getActor();
    }

    let actor = {
        _id: "",
        name: "",
        gender: "",
        age: "",
        nationality: ""
    };

    function updateActor() {
        axios.put("http://localhost:3001/api/actors/" + actor_id, actor)
            .then((response) => {
                alert("actor updated successfully");
                actorView();
            })
            .catch((error) => {
                alert(error);
            });
    }

    function getActor(){
        axios.get("http://localhost:3001/api/actors/getById/" + actor_id)
            .then((response) => {
                actor = response.data;
            });
    }

    function actorView(){
        window.location.href = '#/actors/' + actor_id;
    }
</script>

<div class="mb-5">
    <h1 class="mt-3">{actor.name} update</h1>
    <form>
    <div class="mb-3">
            <label for="" class="form-label">Name</label>
            <input class="form-control" type="text" bind:value={actor.name}/>
            <small class="form-text text-muted">Enter name (e.g. Johnny Depp)</small>
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Age</label>
            <input class="form-control" type="text" bind:value={actor.age} />
            <small class="form-text text-muted">Enter age (e.g. 35)</small>
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Nationality</label>
            <input class="form-control" type="text" bind:value={actor.nationality} />
            <small class="form-text text-muted">Enter nationality (e.g. Italien)</small>
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Gender</label><br>
            <input type="radio" bind:group={actor.gender} value="Male" /> Male<br>
            <input type="radio" bind:group={actor.gender} value="Female" /> Female<br>
            <input type="radio" bind:group={actor.gender} value="Non-Binary" /> Non-Binary
        </div>
        <div class="d-flex align-items-center justify-content-between">
            <button on:click={updateActor} type="button" class="btn btn-dark">Confirm</button>
            <button class="btn btn-dark mt-2" on:click={actorView}>Back</button>
        </div>
    </form>
</div>
