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
    margin-top: 3px;
    margin-left: 3px;
    box-shadow: none;
    filter: grayscale(100%);
    transition: filter 4s;
  }

  img:hover {
    margin-top: 0px;
    margin-left: 0px;
    box-shadow: 0px 4px 6px 2px #999;
    filter: grayscale(0%);
  }

  .Loading {
    width: 80px;
    height: 80px;
    margin: 0 auto;
    background-color: #A8DADC;
    border-radius: 50%;
    border: 10px solid #457B9D;
    border-top: 20px solid #1D3557;
    animation: loader 2s linear infinite;
    animation-timing-function: ease-in-out;
  }

  @keyframes loader {
    0% {
      transform: rotate(-45deg);
    }
    20% {
      transform: rotate(-45deg);
    }
    100% {
      transform: rotate(315deg);
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
