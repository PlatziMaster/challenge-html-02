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
  :root {
    --darkGreen: hsl(131, 47%, 37%);
    --lightGreen: hsl(83, 54%, 56%);
    --veryLightGreen: hsl(59, 80%, 60%);
    --titleBlue: hsl(189, 100%, 40%);
  }
  .characters {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 8px;
  }
  figure img {
    display: block;
    width: 100%;
    margin: 0;
    filter: hue-rotate(200deg);
    transition: filter 0.5s linear;
  }

  figure img:hover {
    filter: hue-rotate(0deg);
  }

  figure figcaption {
    display: block;
    padding: 0.5rem;
    text-align: center;
    color: var(--veryLightGreen);
    background-color: var(--titleBlue);
  }

  .Loading {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 8px solid var(--darkGreen);
    border-top-color: var(--lightGreen);
    background-color: transparent;
    animation: loader 2s linear infinite;
    box-sizing: border-box;
    box-shadow: 0 0 10px var(--darkGreen), 0 0 10px var(--darkGreen) inset;
    transform: translate(0, 50%);
  }

  @keyframes loader {
    0% {
      transform: rotate(0deg);
      border-top-color: rgba(211, 223, 87, 1);
    }
    50% {
      transform: rotate(180deg);
      border-top-color: rgba(211, 223, 87, 1);
    }
    100% {
      transform: rotate(360deg);
      border-top-color: rgba(211, 223, 87, 1);
    }
  }
</style>

<!-- <div class="Loading" /> -->
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
