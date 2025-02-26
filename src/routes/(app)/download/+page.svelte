<script lang="ts">
	import { enhance } from '$app/forms';

	let formElement: HTMLFormElement | undefined = $state();

	let { data } = $props();
</script>

<form bind:this={formElement} use:enhance method="post" action="download?/downloadFile">
	<a
		onclick={(e) => formElement.requestSubmit}
		href={data.fileUrl + '?download=1'}
		download={data.fileName}>Download please</a
	>
	<input type="hidden" name="fileId" value={data.fileId} id="fileId" />
</form>
