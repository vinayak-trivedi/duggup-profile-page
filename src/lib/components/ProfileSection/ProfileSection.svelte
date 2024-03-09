<script lang="ts">
	export let username: string;
	export let userImage: string;
	import { Button } from '$lib/components/ui/button';
	import * as Avatar from '$lib/components/ui/avatar';
	import CurrentDesignationDetails from './CurrentDesignationDetails.svelte';
</script>

<div class="flex items-center gap-8">
	<div class="flex flex-col items-center">
		<Avatar.Root class="h-32 w-32 border-[5px] border-[#EAEFF5]">
			<Avatar.Image class="h-32	w-32" src={userImage} alt="userImage" />
			<Avatar.Fallback class="h-32	w-32">Vi</Avatar.Fallback>
		</Avatar.Root>
		<p class="text-center text-2xl font-bold">{username}</p>
	</div>
	<div class="flex w-3/5 flex-col justify-between gap-5">
		<p class="text-sm font-normal">
			Co-Founder and CEO at Duggup - Social network for people in tech. Ex-Amazon Head of
			Engineering. I write hot-takes on building a business, shipping delightful products and
			accelerating product and career growth.
		</p>
		<Button class="max-w-28">Followed</Button>
	</div>
	<CurrentDesignationDetails />
</div>
