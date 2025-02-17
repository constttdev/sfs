<script lang="ts">
	let { data } = $props();
</script>

<div class="flex flex-col">
	{#each data.files as file}
		<div class="p-1">
			<p>{JSON.stringify(file)}</p>
		</div>
	{/each}
</div>
