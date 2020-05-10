import { writable } from 'svelte/store';

const store = writable(0);

/**
 * Reset the store value
 */
function resetValue() {
  store.set(0);
}

/**
 * Increase the store value by the given number
 * @param {number} val The value to increase
 */
function increaseBy(val) {
  store.update((n) => n + val);
}

/**
 * Decrease the store value by the given number
 * @param {number} val The value to decrease
 */
function decreaseBy(val) {
  store.update((n) => n - val);
}

export { store, resetValue, increaseBy, decreaseBy };
