<script lang="ts">
	import '../../app.css';
	import Sidebar from '$lib/components/sidebar.svelte';
	import DarkModeSwitcher from '$lib/components/darkModeSwitcher.svelte';

	let { children } = $props();
</script>

<div class="flex">
	<Sidebar />
	<DarkModeSwitcher />
	{@render children?.()}
</div>
