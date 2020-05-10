<script>
  import Logger from "@models/logger";
  import LazyComponent from "@components/lazy/lazy.svelte";

  export let name;

  const logger = new Logger("App");

  $: logger.log(name);
</script>

<style src="./App.scss" global>

</style>

<LazyComponent
  module={() => import('@views/home/home.svelte')}
  title="Home page" />
