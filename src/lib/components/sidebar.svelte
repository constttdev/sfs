<script lang="ts">
	import { page } from '$app/state';
	import Settings from 'lucide-svelte/icons/settings';
	import PanelLeft from 'lucide-svelte/icons/panel-left';
	import { slide } from 'svelte/transition';
	import { innerWidth, innerHeight } from 'svelte/reactivity/window';
	import Upload from 'lucide-svelte/icons/upload';
	import Files from 'lucide-svelte/icons/files';
	import House from 'lucide-svelte/icons/house';
	import { onMount } from 'svelte';

	let selectedItem = $state(false);
	let currentUrl = $derived(page.url.pathname);

	$effect(() => {
		if (Number(innerWidth.current) < 640) {
			showSidebar = false;
		}
	});

	let showSidebar = $state(true);

	const menuItems = [
		{
			name: 'Home',
			href: '/home',
			icon: House
		},
		{
			name: 'Files',
			href: '/files',
			icon: Files
		},
		{
			name: 'Upload',
			href: '/upload',
			icon: Upload
		},
		{
			name: 'Settings',
			href: '/settings',
			icon: Settings
		}
	];
</script>

<div class="flex">
	{#if showSidebar}
		<div
			transition:slide={{ axis: 'x', duration: 500 }}
			class="flex h-screen w-52 flex-col justify-between overflow-hidden p-2 whitespace-nowrap lg:static"
		>
			<div>
				<p class="font-inter font-bold">Svelte File Server</p>
				{#each menuItems as item}
					{@const Icon = item.icon}
					<div
						class="{currentUrl === item.href
							? 'border border-zinc-300 bg-zinc-100 drop-shadow-xs dark:border-zinc-700 dark:bg-zinc-800'
							: ''} mt-2 flex items-center gap-2 overflow-hidden rounded-lg p-1"
					>
						<Icon size="16" />
						<a href={item.href}>
							<span class="font-inter text-sm">{item.name}</span>
						</a>
					</div>
				{/each}
			</div>
		</div>
	{/if}
	<div>
		<button
			class="p-1 opacity-5 dark:opacity-25"
			onclick={() => {
				showSidebar = !showSidebar;
			}}><PanelLeft /></button
		>
	</div>
</div>
