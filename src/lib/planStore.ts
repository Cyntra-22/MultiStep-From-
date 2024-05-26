import { writable } from 'svelte/store';

export const planStore = writable({
  name: '',
  price: '',
  isYearly: false
});
