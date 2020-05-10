<script>
  import Logger from "@models/logger";
  export let module;

  const logger = new Logger("Lazy");
</script>

{#await module()}
  {(logger.log('Loading module: ', module), '')}
  <p>Loading...</p>
{:then comp}
  {(logger.log(comp), '')}
  <svelte:component this={comp.default} {...$$props} />
{:catch error}
  <code>An error occured {error}</code>
{/await}
