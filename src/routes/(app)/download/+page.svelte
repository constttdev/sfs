<script lang="ts">
	import { enhance } from '$app/forms';

	let { data } = $props();
</script>

<form
	use:enhance={() => {
		return ({ update, result }) => {
			if (result.type === 'success') {
				window.location.href = data.fileUrl + '?download=1';
			}
			update();
		};
	}}
	method="post"
	action="download?/downloadFile"
>
	<button class="cursor-pointer p-1">download</button>
	<input type="hidden" name="fileId" value={data.fileId} id="fileId" />
</form>
