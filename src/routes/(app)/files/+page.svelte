<script lang="ts">
	import byteSize from 'byte-size';
	import File from 'lucide-svelte/icons/file';

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
			<div class="font-inter p-2 text-[14px]">
				<p class="font-semibold">{file.fileName}</p>
				<p>{byteSize(file.fileSize)}</p>
			</div>
		</div>
	{/each}
</div>
