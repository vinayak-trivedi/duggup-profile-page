<script>
	import { NAV_ITEMS } from './navbar.constant';
	import NavbarItem from './NavbarItem.svelte';
	import ProfileButton from './ProfileButton.svelte';
	import { Button } from '$lib/components/ui/button';
</script>

<div class="flex justify-between border-b-2 border-dotted px-8 py-4">
	<img src={'/icons/brand_logo.svg'} alt="duggup" />

	<div class="flex gap-10">
		{#each NAV_ITEMS as navItem}
			<NavbarItem navItemText={navItem.text} navItemImage={navItem.icon} />
		{/each}
		<Button>
			<img src="/icons/add_icon.svg" alt="add" />
			Post
		</Button>
		<ProfileButton userImage="/common/user.svg" username="Krishna Kiran" />
	</div>
</div>
