<script lang="ts">
	import { enhance } from '$app/forms';
	import { darkModeState } from '$lib/components/darkModeState.svelte';

	let iconState: 'dark' | 'light' = $derived(darkModeState.state ? 'dark' : 'light');
	import { confetti } from '@neoconfetti/svelte';
	import { fail } from '@sveltejs/kit';
	import { Footprints } from 'lucide-svelte';

	let finishedUploading = $state(false);
	let fileTooLargeError = $state(false);
	let uploadedFile: File | undefined = $state();
</script>

<form
	action="upload?/uploadFile"
	enctype="multipart/form-data"
	method="post"
	class="w-screen"
	use:enhance={({ formData, cancel }) => {
		finishedUploading = false;
		fileTooLargeError = false;
		let file = formData.get('file') as File;
		uploadedFile = formData.get('file') as File;
		if (!file) return;
		if (file.size >= 10737418240) {
			cancel();
			fileTooLargeError = true;
		}

		return async ({ result }) => {
			finishedUploading = true;
			if (result.type === 'error' || result.type === 'failure') {
				return fail(400, { message: 'Failed to upload!' });
			}
		};
	}}
>
	<div class="flex h-screen w-full flex-col items-center justify-center overflow-hidden">
		<input
			class="static h-0 w-0 bg-transparent text-transparent"
			type="file"
			name="file"
			id="file"
			onchange={(event: Event) => {
				if (!event.target) return;
				// @ts-expect-error Verified that there is a form element
				event.target.closest('form').requestSubmit();
			}}
		/>
		{#if fileTooLargeError}
			<p class="mb-10 text-red-500">
				The file you tried to upload is too large! (Max file size: 10gb)
			</p>
		{/if}
		<label
			for="file"
			class="border-primary {finishedUploading
				? 'hidden'
				: ''} flex h-96 w-2xl items-center justify-center rounded-lg border"
		>
			<img class="size-20" src="./upload-{iconState}.png" alt="Upload Icon" />
		</label>
		{#if finishedUploading}
			<div
				class="static"
				use:confetti={{ force: 0.3, particleSize: 0.7, particleCount: 400, colors: ['#82A8A8'] }}
			></div>
			<div class="bg-dbackground dark:bg-background absolute h-60 w-3xl rounded-xl">
				<div class="p-2">
					<p class="text-dtext dark:text-text">{JSON.stringify(uploadedFile)}</p>
				</div>
			</div>
		{/if}
	</div>
</form>
