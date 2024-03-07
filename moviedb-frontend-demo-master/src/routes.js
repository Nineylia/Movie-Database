// Pages
import Home from "./pages/Home.svelte";

import Movies from "./pages/movies/Movies.svelte"
import MovieDetails from "./pages/movies/MovieDetails.svelte"
import CreateMovie from "./pages/movies/CreateMovie.svelte"
import DeleteMovie from "./pages/movies/DeleteMovie.svelte"

import Actors from "./pages/actors/Actors.svelte"
import ActorDetails from "./pages/actors/ActorDetails.svelte"
import CreateActor from "./pages/actors/CreateActor.svelte"
import DeleteActor from "./pages/actors/DeleteActor.svelte"
import UpdateActor from "./pages/actors/UpdateActor.svelte"


export default {
    // Home
    '/': Home,
    '/home': Home,

    // Movies
    '/movies': Movies,
    '/movies/:id': MovieDetails,
    '/create-movie' : CreateMovie,
    '/delete-movie' : DeleteMovie,
    
    // Actors
    '/actors': Actors,
    '/actors/:id': ActorDetails,
    '/create-actor': CreateActor,
    '/delete-actor': DeleteActor,
    '/update-actor/:id': UpdateActor
}