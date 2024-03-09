<script>
	import { NAV_ITEMS } from './navbar.constant';
	import NavbarItem from './NavbarItem.svelte';
</script>

<div class="flex justify-between border-b-2 border-dotted px-8 py-4">
	<img src={'/icons/brand_logo.svg'} alt="duggup" />

	<div class="flex gap-6">
		{#each NAV_ITEMS as navItem}
			<NavbarItem navItemText={navItem.text} navItemImage={navItem.icon} />
		{/each}
	</div>
</div>
