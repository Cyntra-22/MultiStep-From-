import { writable } from 'svelte/store';

export const addOnsStore = writable<AddOn[]>([]);
