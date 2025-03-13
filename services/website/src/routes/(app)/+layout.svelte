<script lang="ts">
	import '../../app.css';
	import Sidebar from '$lib/components/sidebar.svelte';
	import DarkModeSwitcher from '$lib/components/darkModeSwitcher.svelte';

	let { children, data } = $props();
</script>

<div class="flex">
	{#if data.user}
		<Sidebar />
	{/if}
	<DarkModeSwitcher />
	{@render children?.()}
</div>
