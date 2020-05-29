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
    cursor: pointer;
    filter: grayscale(100%);
    transform: scale (1.2);
    transition: 3s;
  }
  figure img:hover {
    filter: grayscale(0%);
    transform: scale(1.2);
    animation-name: escala;
    animation-duration: 4s;
    animation-timing-function: linear;
    animation-iteration-count: 1;
  }
  @keyframes escala {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1.2);
    }
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
    display: inline-block;
    position: relative;
    width: 150px;
    height: 150px;
    background-color: #e1f0fc;
    border-radius: 50%;
  }

  .Loading div {
    position: absolute;
    width: 110px;
    height: 110px;
    border-radius: 50%;
    border: 20px solid #9cadd7;
    border-top: 20px solid #2c3687;
    animation: loader 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #2c3687 transparent transparent transparent;
  }

  .Loading div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .Loading div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .Loading div:nth-child(3) {
    animation-delay: -0.15s;
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

<div class="Loading">
  <div />
  <div />
  <div />
  <div />
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
