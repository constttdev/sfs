<script lang="ts">
	import { enhance } from '$app/forms';
	import { darkModeState } from '$lib/components/darkModeState.svelte';
	import byteSize from 'byte-size';
	import { confetti } from '@neoconfetti/svelte';
	import { fail } from '@sveltejs/kit';
	import Share_2 from 'lucide-svelte/icons/share-2';
	import Delete from 'lucide-svelte/icons/delete';
	import { Circle } from 'svelte-loading-spinners';

	let iconState: 'dark' | 'light' = $derived(darkModeState.state ? 'dark' : 'light');
	let fileTooLargeError = $state(false);
	let finishedUploading: Boolean = $state(false);
	let uploadedFile: File | undefined = $state();
	let uploadedFileSize: number | undefined = $derived(uploadedFile?.size);
	let pocketbaseRecordId: String = $state('');
	let errorMessage: String = $state('');
	let loadingVar: String = $state('');
	let fileInputValue: HTMLInputElement | undefined = $state();
</script>

<form
	action="upload?/uploadFile"
	enctype="multipart/form-data"
	method="post"
	class="w-screen"
	use:enhance={({ formData, cancel }) => {
		finishedUploading = false;
		loadingVar = 'loading';
		fileTooLargeError = false;
		let file = formData.get('file') as File;
		uploadedFile = formData.get('file') as File;
		if (!file) return;
		if (file.size >= 10737418240) {
			cancel();
			fileTooLargeError = true;
		}

		return async ({ result }) => {
			loadingVar = 'idle';
			finishedUploading = true;
			if (result.type === 'success') {
				if (!result.data) return;
				pocketbaseRecordId = String(result.data.id);
			}
			if (result.type === 'error' || result.type === 'failure') {
				errorMessage = 'Failed to upload!';
			}
		};
	}}
>
	<div class="flex h-screen w-full flex-col items-center justify-center overflow-hidden">
		<input
			class="static h-0 w-0 bg-transparent text-transparent"
			type="file"
			name="file"
			bind:this={fileInputValue}
			id="file"
			onchange={(event: Event) => {
				if (!event.target) return;
				// @ts-expect-error Verified that there is a form element
				event.target.closest('form').requestSubmit();
				if (!fileInputValue) return;
				fileInputValue.value = '';
			}}
		/>
		{#if fileTooLargeError}
			<p class="mb-10 text-red-500">
				The file you tried to upload is too large! (Max file size: 10gb)
			</p>
		{/if}
		{#if loadingVar === 'loading'}
			<Circle size="60" color="#FFFFFF" unit="px" />
		{:else}
			<label
				for="file"
				class="outline-dashed-custom outline outline-zinc-700 {finishedUploading
					? 'hidden'
					: ''} flex h-96 w-2xl items-center justify-center rounded-lg"
			>
				<img class="size-20" src="./upload-{iconState}.png" alt="Upload Icon" />
			</label>
		{/if}
		{#if finishedUploading}
			<div
				class="static"
				use:confetti={{ force: 0.3, particleSize: 0.7, particleCount: 400, colors: ['#82A8A8'] }}
			></div>
			<div class="bg-lcard dark:bg-card absolute h-60 w-3xl rounded-md">
				<div class="p-2">
					<div>
						<p class="rounded-md p-1">
							Name: {uploadedFile?.name}
						</p>
						{#if uploadedFileSize}
							<p class="mt-4 rounded-md p-1">
								Size: {byteSize(uploadedFileSize)}
							</p>
						{/if}
					</div>

					<div class="flex justify-between pt-24">
						<button
							formmethod="post"
							formaction="upload?/deleteFile"
							onclick={() => {
								finishedUploading = false;
							}}
							class="flex h-10 w-20 cursor-pointer items-center gap-3 rounded-lg bg-red-500 p-1"
							><Delete class="size-7" /> Delete</button
						>
						<input type="hidden" value={pocketbaseRecordId} id="recordId" name="recordId" />
						<button
							class="flex h-10 w-20 cursor-pointer items-center gap-3 rounded-lg bg-blue-500 p-1"
							><Share_2 class="size-7" /> Share</button
						>
						<a
							class="mt-2 text-zinc-600 underline"
							href="/upload"
							onclick={() => {
								finishedUploading = false;
							}}>Upload another file</a
						>
					</div>
				</div>
			</div>
		{/if}
	</div>
</form>
