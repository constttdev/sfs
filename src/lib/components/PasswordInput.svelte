<script lang="ts">
	import Eye from 'lucide-svelte/icons/eye';
	import EyeClosed from 'lucide-svelte/icons/eye-closed';

	let eyesOpen = $state(false);
	let inputProps = $props();
</script>

<div class="flex justify-between gap-2">
	<input
		class="border-primary bg-secondary text-text font-inter rounded-md border p-2 outline-none {inputProps.font} w-96"
		type={eyesOpen ? 'text' : 'password'}
		name={inputProps.name}
		placeholder={inputProps.placeholder}
		required={inputProps.required}
		minlength={inputProps.minlenght}
	/>
	<button
		onclick={() => {
			eyesOpen = !eyesOpen;
		}}
		type="button"
	>
		{#if eyesOpen}
			<EyeClosed class="text-secondary size-6 font-thin" />
		{:else}
			<Eye class="text-secondary size-6 font-thin" />
		{/if}
	</button>
</div>
