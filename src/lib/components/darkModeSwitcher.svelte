<script>
	import { onMount } from 'svelte';
	import { darkModeState } from './darkModeState.svelte';

	function toggleDarkmode() {
		darkModeState.state = !darkModeState.state;
		const darkMode = document.cookie.includes('darkmode=true');
		document.cookie = `darkmode=${!darkMode};path=/`;
		document.body.classList.toggle('dark');
	}

	onMount(() => {
		if (document.cookie.includes('darkmode')) {
			darkModeState.state = document.cookie.includes('darkmode=true');
		} else {
			const darkMode =
				window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
			if (darkMode) {
				toggleDarkmode();
			}
		}
	});
</script>

<label
	class="fixed right-0 bottom-0 z-10 m-8 cursor-pointer items-center rounded-lg bg-zinc-200 p-4 text-black dark:bg-black dark:text-white"
>
	<input type="checkbox" class="sr-only" onclick={toggleDarkmode} checked={darkModeState.state} />
	<div>{darkModeState.state ? '🌙' : '☀️'}</div>
</label>
