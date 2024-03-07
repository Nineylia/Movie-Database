<script>
	import Router from "svelte-spa-router";
	import routes from "./routes";
</script>

<!-- This part is always displayed -->

<head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<style>
	body {margin: 0;}
	
	ul.topnav {
	  list-style-type: none;
	  margin: 0;
	  padding: 0;
	  overflow: hidden;
	  background-color: #333;
	}
	
	ul.topnav li {float: left;}
	
	ul.topnav li a {
	  display: block;
	  color: white;
	  text-align: center;
	  padding: 14px 16px;
	  text-decoration: none;
	}
	
	ul.topnav li a:hover:not(.active) {background-color: #111;}
	
	ul.topnav li a.active {background-color: #808080;}
	
	ul.topnav li.right {float: right;}
	
	@media screen and (max-width: 600px) {
	  ul.topnav li.right, 
	  ul.topnav li {float: none;}
	}
	</style>
	</head>
	<body>
	
		<ul class="topnav">
			<li><a class="active" href="#/">Home</a></li>
			<li><a href="#/movies">Movies</a></li>
			<li><a href="#/actors">Actors</a></li>
		  </ul>
	
	</body>
	
<div class="container mt-3">
	<!-- Here we load the page depending on the current URL -->
	<Router {routes} />
</div>
