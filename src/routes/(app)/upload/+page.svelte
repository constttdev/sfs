<script lang="ts">
	import { darkModeState } from '$lib/components/darkModeState.svelte';

	let iconState: 'dark' | 'light' = $derived(darkModeState.state ? 'dark' : 'light');
</script>

<div class="flex h-screen w-full items-center justify-center">
	<input class="static h-0 w-0 bg-transparent text-transparent" type="file" name="file" id="file" />
	<label
		for="file"
		class="border-primary absolute flex h-96 w-2xl items-center justify-center rounded-lg border"
	>
		<img class="size-20" src="./upload-{iconState}.png" alt="Upload Icon" />
	</label>
</div>
