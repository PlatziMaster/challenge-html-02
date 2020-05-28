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
  .characters {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 8px;
  }
  figure img {
    width: 100%;
    margin: 0;
    filter: grayscale(100%);
  }
  /* .Loading {
    background-color: aqua;
    width: 100px;
    height: 100px;
    animation-name: coloranimate;
    animation-duration: 10s;
  }

  @keyframes coloranimate {
    from {
      background-color: aqua;
    }
    to {
      background-color: tomato;
    }
  } */

  .Loading {
    width: 300px;
    height: 300px;
    background-color: #e1f0fc;
    border-radius: 50%;
    border: 20px solid #9cadd7;
    border-top: 20px solid #2c3687;
    animation: loader 6s linear infinite;
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

<div class="Loading" />
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
