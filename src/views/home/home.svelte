<script>
  import { store, increaseBy, decreaseBy, resetValue } from "@stores/counter";
  import setDocTitle from "@utils/set-doc-title";

  export let title = "";

  setDocTitle(title);
</script>

<style src="./home.scss">

</style>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap"
    rel="stylesheet" />
</svelte:head>

<main>
  <h1>Welcome to Svelte</h1>

  <img src="https://svelte.dev/svelte-logo-outline.svg" alt="Svelte Logo" />

  <div class="links">
    <h3>Here are some links to help you get started:</h3>

    <ul>
      <li>
        <a target="_blank" href="/#">Check this template on GitHub</a>
      </li>
      <li>
        <a target="_blank" href="https://svelte.dev/">Svelte main page</a>
      </li>
      <li>
        <a target="_blank" href="https://svelte.dev/tutorial/basics">
          Svelte tutorials
        </a>
      </li>
      <li>
        <a target="_blank" href="https://svelte.dev/examples#hello-world">
          Svelte examples
        </a>
      </li>
    </ul>
  </div>

  <div class="example">
    <h4>A simple counter example using Svelte store</h4>
    <p>Counter value: {$store}</p>
    <input type="number" bind:value={$store} />
    <button on:click={() => decreaseBy(1)}>-1</button>
    <button on:click={() => increaseBy(1)}>+1</button>
    <button on:click={resetValue}>Reset</button>
  </div>
</main>
