<script lang="ts">
	import byteSize from 'byte-size';
	import File from 'lucide-svelte/icons/file';
	import Share_2 from 'lucide-svelte/icons/share-2';
	import Delete from 'lucide-svelte/icons/delete';
	import Download from 'lucide-svelte/icons/download';
	import { enhance } from '$app/forms';
	import PublicStateButton from '$lib/components/publicStateButton.svelte';

	let { data } = $props();
</script>

<div class="mt-20 flex flex-col gap-4">
	{#each data.files as file}
		<div class="flex gap-4">
			<div
				class="font-inter flex w-13 items-center justify-center rounded-md bg-zinc-200 dark:bg-zinc-900"
			>
				<File />
			</div>
			<div class="font-inter flex w-4xl justify-between p-2 text-[14px]">
				<div>
					<p class="font-semibold">{file.fileName}</p>
					<p>{byteSize(file.fileSize)}</p>
				</div>
				<div class="flex gap-4">
					<a
						href="/download?file={file.id}"
						class="flex h-[27.7px] cursor-pointer items-center gap-3 rounded-lg bg-green-300 p-1 px-2 py-1 dark:bg-green-500"
						><Download class="size-5" /> Download</a
					>
					<form action="files?/deleteFile" method="post" use:enhance>
						<button
							class="flex cursor-pointer items-center gap-3 rounded-lg bg-red-300 p-1 px-2 py-1 dark:bg-red-500"
							><Delete class="size-5" /> Delete</button
						>
						<input type="hidden" value={file.id} id="recordId" name="recordId" />
					</form>
					<PublicStateButton recordId={file.id} publicState={file.publicState} />
				</div>
			</div>
		</div>
	{/each}
</div>
