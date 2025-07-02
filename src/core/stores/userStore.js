// userStore.js
// Svelte store para manejar el estado global del usuario.
import { writable } from 'svelte/store';

export const user = writable(null);
