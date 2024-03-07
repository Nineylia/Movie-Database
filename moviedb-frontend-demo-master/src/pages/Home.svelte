<head>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
  <link
    rel="stylesheet"
    href="https://www.w3schools.com/lib/w3-theme-black.css"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />

  <style>
    body {
      margin: 0;
      font-family: Arial, Helvetica, sans-serif;
    }

    #movieimage {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      opacity: 0.5;
    }

    #title {
      background-color: #696969;
      text-align: center;
      position: absolute;
      top: 25%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      z-index: 1;
    }

    #carouselExampleCaptions {
      width: 50%;
      height: 50%;
      position: absolute;
      top: 60%;
      left: 50%;
      transform: translate(-50%, -50%);
      
    }

  </style>
</head>

<body>
  <!-- Backround image -->
  <div class="movie-image" id=movieimage>
    <img
      src="/images/100-Greatest-Movies-Variety.png"
      class="d-block w-100"
      alt="Movie"
    />
  </div>

  <!-- Title -->
  <div class="container-md" id="title">
    <h1 style="font-size:100px">Wellcome to the online Movie Catalogue!</h1>
  </div>

  <!-- Carousel von Bootstrap -->
  <div id="carouselExampleCaptions" class="carousel slide">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="/images/HarryPotter.jpg" class="d-block w-100" alt="Harry Potter">
        <div class="carousel-caption d-none d-md-block">
          <h5>Find your Movie to watch!</h5>
          <p>We have the biggest Movie Database in the Internet!.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="/images/Tribute.jpg" class="d-block w-100" alt="Hunger Games">
        <div class="carousel-caption d-none d-md-block">
          <h5>Bored?</h5>
          <p>Watch the Hunger Games!</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="/images/JohnnyDepp.jpg" class="d-block w-100" alt="Johnny Depp">
        <div class="carousel-caption d-none d-md-block">
          <h5>We have all the Movies!</h5>
          <p>Scroll through our catalogue for inspiration</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</body>



