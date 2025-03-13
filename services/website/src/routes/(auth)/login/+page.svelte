<script>
	import { enhance } from '$app/forms';
	import PasswordInput from '$lib/components/PasswordInput.svelte';
	import TextInput from '$lib/components/TextInput.svelte';

	let { form } = $props();
</script>

<div class="grid h-screen items-center justify-center">
	<form class="flex flex-col gap-4" action="/login?/login" method="POST" use:enhance>
		<h1 class="font-inter text-3xl font-bold">Login</h1>
		<TextInput placeholder="email@email.com" font="font-JBMono" required="true" name="email" />
		<PasswordInput
			placeholder="supersecretpassword"
			font="font-inter"
			required="true"
			name="password"
		/>
		<button class="bg-primary text-text cursor-pointer rounded-lg p-3">Login</button>
		{#if form?.error}<p class="text-red-500">{form?.error}</p>{/if}
	</form>
</div>
