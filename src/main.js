import App from './app.svelte';

const app = new App({
  target: document.body,
  props: {
    name: 'Svelte',
  },
});

window.app = app;

export default app;
