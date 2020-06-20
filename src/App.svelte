<script>
  import { onMount } from "svelte";
  const API = "https://rickandmortyapi.com/api/character";
  let data = [];
  let characters = [];
  onMount(async () => {
    const response = await fetch(API);
    data = await response.json();
    characters = data.results;
  });

  window.onload = function (){
    var contenedor = document.getElementById('content');

    contenedor.style.visibility = 'hidden'
    contenedor.style.opacity = '0'
  }
</script>

<style>

  .Loading {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background: #0C0F0A;
    border: 20px solid snow;
    border-top: 20px solid #00b0c8;
    animation: loader 4s linear infinite;
    box-shadow: 0 0 20px 3px #5cc95e;
  }

  .characters {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 8px;
    text-align: center;
  }
  figure img {
    width: 100%;
    margin: 0;
    filter: grayscale(100%);
    box-shadow: 0 0 10px 5px #00b0c8;
    border-radius: 5%;
  }

  figure img:hover {
    filter: none;
    transition: 4s;
  }



  @keyframes loader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>

  <div id="content">
    <div class="Loading" />
  </div>
  	<div class="content-image">
		  <img src="title-h1.png" alt="" id="image-title">
	</div>
<div class="characters">
  {#each characters as character}
    <figure>
      <img src={character.image} alt={character.name} />
      <figcaption>{character.name}</figcaption>
    </figure>
  {:else}
    <div class="Loading" />
  {/each}
</div>

