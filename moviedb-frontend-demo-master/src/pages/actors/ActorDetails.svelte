<script>
    import axios from "axios";

    export let params = {};

    let id;

    $: {
        // "Reactive Statement":
        // This block of is executed whenever the value of a variable in it changes.
        // See https://svelte.dev/tutorial/reactive-statements
        id = params.id;
        getActors();
    }

    let actor = {};

    function getActors() {
        axios.get("http://localhost:3001/api/actors/" + id)
            .then((response) => {
                actor = response.data;
            });
    }
</script>

<style>
    .actor-details {
        background-color: #8f7b7b;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .actor-name {
        font-size: 50px;
        margin-bottom: 10px;
    }

    .update-button {
        margin-bottom: 15px;
    }

    .actor-info {
        margin-bottom: 10px;
    }

    .info-label {
        font-weight: bold;
    }
</style>

<div class="mb-5 actor-details">
    <h1 class="mt-3 actor-name">{actor.name}</h1>
    <b><a href={`#/update-actor/${id}`} class="btn btn-dark update-button">Update Actor</a></b>
    <p class="actor-info"><span class="info-label">ID:</span> {id}</p>
    <p class="actor-info"><span class="info-label">Gender:</span> {actor.gender}</p>
    <p class="actor-info"><span class="info-label">Age:</span> {actor.age}</p>
    <p class="actor-info"><span class="info-label">Nationality:</span> {actor.nationality}</p>
</div>

