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
</script>

<style>
  .header {
    padding: 10px;
    border-radius: 6px;
    background-color: #e1f0fc;
  }
  .header img {
    display: block;
    width: 50%;
    margin: 0 auto;
  }
  .characters {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 8px;
  }
  figure {
    transition: transform .3s ease-in-out;
  }
  figure:hover {
    transform: scale(1.2)
  }
  figure img {
    width: 100%;
    margin: 0;
    filter: grayscale(100%);
    transition: filter .6s ease-in;
  }
  figure img:hover {
    filter: grayscale(0);
  }
  figcaption {
    padding: 3px;
    text-align: center;
    color: white;
    background-color: lightblue;
  }

  .Loading {
    position: absolute;
    left: calc((100vw - 300px) / 2);
    top: calc((100vh - 300px) / 2);
    z-index: 500;
    width: 300px;
    height: 300px;
    background-color: #FA8BFF;
    background-image: linear-gradient(0deg, #FA8BFF 0%, #2BD2FF 52%, #2BFF88 80%);
    border-radius: 50%;
    border: 0px solid #9cadd7;
    border-top: 40px solid #2BFF88;
    animation: loader 5s linear infinite;
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

<header class="header">
  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg" alt="Rick and Morty">
</header>
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
