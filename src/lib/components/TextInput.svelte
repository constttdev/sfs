<script>
	let inputProps = $props();
</script>

<div class="flex justify-between gap-2">
	<input
		class="border-primary bg-secondary text-text font-inter rounded-md border p-2 outline-none {inputProps.font} w-96"
		type="text"
		name={inputProps.name}
		placeholder={inputProps.placeholder}
		required={inputProps.required}
	/>
</div>
