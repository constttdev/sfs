<script lang="ts">
	import { enhance } from '$app/forms';

	let inputProps = $props();
</script>

<div class="flex h-[28px] items-center gap-2 rounded-lg bg-blue-300 px-4 py-1 dark:bg-blue-500">
	<p>Public:</p>
	<div class="flex items-center">
		<form action="files?/changePublicState" method="post" use:enhance>
			<input
				onchange={(event: Event) => {
					if (!event.target) return;
					// @ts-expect-error Verified that there is a form element
					event.target.closest('form').requestSubmit();
				}}
				type="checkbox"
				checked={inputProps.publicState}
				name="state"
				id="state"
				class="checked:bg-slate hover:sbg-slate-200 h-4 w-4 rounded border border-slate-300 bg-white shadow"
			/>
			<input
				type="hidden"
				value={inputProps.recordId}
				class="rounded-xl p-1"
				name="recordId"
				id="recordId"
			/>
		</form>
	</div>
</div>
