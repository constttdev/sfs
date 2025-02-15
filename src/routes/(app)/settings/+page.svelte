<script>
	import { enhance } from '$app/forms';
</script>

<form method="post" use:enhance action="?/logout">
	<button class="text-dwhite dark:text-text cursor-pointer bg-red-500 p-2">Logout</button>
</form>
