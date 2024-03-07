<script>
    import axios from "axios";
    
    export let params = {};
    let actor_id;
    let actor_id1;
  
    $: {
          actor_id = params.id;
          getActor();
          
      }
  
      let actor = [];
  
      function getActor() {
          axios.get("http://localhost:3001/api/actors")
              .then((response) => {
                  actor = response.data;
                  x = response.data;
              });
      }
    
      function deleteActor() {
          axios.delete("http://localhost:3001/api/actors/" + actor_id1)
              .then((response) => {
                  getActor();
                  alert("Actor deleted");
              })
              .catch((error) => {
                  console.log(error);
                  alert(error);
              });
      }
  
  </script>
  
<div class="card h-100" style="padding: 50px; margin: 0 50px">
  <div class="mb-5">
      
      <h1 class="mt-3">- Delete Actor</h1>
      <select class="form-select" bind:value={actor_id1} id="actor">
          {#each actor as actor}
              <option value={actor._id}>{actor.name}</option>
          {/each}
      </select>
      <button class="btn btn-danger mt-2" on:click={deleteActor}>Delete</button>
  </div>

 <h3><a class="btn btn-dark mt-2" href="#/actors">
    Back
</a></h3>
</div>
