<script>
	import { enhance } from '$app/forms';
</script>

<div class="p-2">
	<form method="post" use:enhance action="?/logout">
		<button class="text-dwhite dark:text-text cursor-pointer rounded-lg bg-red-500 p-2"
			>Logout</button
		>
	</form>
</div>
