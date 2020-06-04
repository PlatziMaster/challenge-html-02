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
    position: relative;
    box-sizing: border-box;
    width: 100%;
    padding: 9px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 12px;
  }
  figure{
    transition: 0.4s ease-in-out;
    background-color: white;
    border-radius: 6px;
    overflow: hidden;
  }
  figure img {
    width: 100%;
    margin: 0;
    cursor: pointer;
    transition: 0.4s ease-in-out;
    filter: grayscale(100%);
  }
  figure figcaption{
    padding: .6em;
  }

  figure:hover{
    z-index: 9999;
    transform: scale(1.06);
    box-shadow: 0 0 12px 6px rgba(0,0,0,0.1);
  }
  figure:hover img{
    filter: none;
  }

  .loading{
    box-sizing: border-box;
    position: absolute;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #2c3687
  }

  .loading__animation{
    height: 260px;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .loading__circle {
    position: absolute;
    width: 160px;
    height: 160px;
    border-radius: 50%;
    border: 6px solid #9cadd7;
    border-top: 6px solid #2c3687;
    border-left: 6px solid #2c3687;
    border-right: 6px solid #2c3687;
    animation: loader 3s linear infinite;
  }

  .loading__circle--otherside{
    animation-direction: reverse; 
  }

  .loading__bar{
    position: relative;
    width: 300px;
    height: 6px;
    background-color: #9cadd7;
  }

  .loading__bar::after{
    position: absolute;
    content: '';
    width: 0px;
    height: 100%;
    left: 0;
    background-color: #208d45;
    animation: loader_bar 3s ease-in-out forwards;
  }

  .loading span{
    padding: 1em;
    color: white;
    font-weight: 700;
    letter-spacing: 0.1em;
  }
  @keyframes loader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes loader_bar{
    0%{
      width: 0%;
    }

    30%{
      width: 30%
    }

    60%{
      width: 60%;
    }

    90%{
      width: 90%;
    }
    100%{
      width: 100%;
    }


  }
</style>

<div class="characters">
  {#each characters as character}
    <figure>
      <img src={character.image} alt={character.name} />
      <figcaption>{character.name}</figcaption>
    </figure>
  {:else}
  <section class='loading'>
    <div class='loading__animation'>
      <div class="loading__circle loading__circle--otherside" />
      <div class="loading__circle" />
    </div>
    <div class="loading__bar" />
    <span>Rick And Morty</span>
  </section>
  {/each}
</div>
