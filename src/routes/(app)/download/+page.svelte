<script lang="ts">
	import { enhance } from '$app/forms';
	import byteSize from 'byte-size';

	let { data, form } = $props();
</script>

<div class="flex h-screen w-full items-center justify-center">
	<div
		class="text-dtext dark:text-text items-center justify-center rounded-xl bg-zinc-900 px-40 py-20 dark:bg-zinc-200"
	>
		<h1>{data.fileName.replace('inline; filename=', '')}</h1>
		<p>{byteSize(data.fileSize)}</p>
		<form use:enhance method="post" action="?/downloadFile">
			<button class="text-text cursor-pointer rounded-xl bg-zinc-300 p-2">Download</button>
			<input type="hidden" name="fileId" id="fileId" value={data.fileId} />
		</form>
	</div>
</div>
