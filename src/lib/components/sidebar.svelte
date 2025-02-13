<script lang="ts">
	import { page } from '$app/state';
	import Settings from 'lucide-svelte/icons/settings';
	import PanelLeft from 'lucide-svelte/icons/panel-left';
	import { slide } from 'svelte/transition';
	import { innerWidth, innerHeight } from 'svelte/reactivity/window';
	import Upload from 'lucide-svelte/icons/upload';
	import House from 'lucide-svelte/icons/house';

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
			icon: Settings
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
			class="flex h-screen w-52 flex-col justify-between overflow-hidden border-r border-zinc-900 p-2 whitespace-nowrap lg:static"
		>
			<div>
				{#each menuItems as item}
					{@const Icon = item.icon}
					<div class="mt-2 flex items-center gap-2">
						<Icon size="16" />
						<a href={item.href}>
							<span class="text-sm">{item.name}</span>
						</a>
					</div>
				{/each}
			</div>
		</div>
	{/if}
	<div>
		<button
			class="p-1"
			onclick={() => {
				showSidebar = !showSidebar;
			}}><PanelLeft /></button
		>
	</div>
</div>
