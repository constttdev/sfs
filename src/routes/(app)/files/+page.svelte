<script lang="ts">
	let { data } = $props();
</script>

{#each data.files as file}
	<p>{JSON.stringify(file.file)}</p>
{/each}
