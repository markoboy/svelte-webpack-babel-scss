module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  plugins: ['svelte3'],
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
    },
  ],
  extends: 'eslint:recommended',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {},
  settings: {
    'svelte3/ignore-styles': (attributes) =>
      (attributes.lang && attributes.lang.includes('scss')) ||
      (attributes.type && attributes.type.includes('scss')),
  },
};
