<script lang="ts">
	export let username: string;
	export let userImage: string;
	import { Button } from '$lib/components/ui/button';
	import * as Avatar from '$lib/components/ui/avatar';
</script>

<div class="ml-auto mr-auto flex w-[85%] items-center gap-10">
	<div class="flex flex-col items-center">
		<Avatar.Root class="h-32 w-32 border-[5px] border-[#EAEFF5]">
			<Avatar.Image class="h-32	w-32" src={userImage} alt="userImage" />
			<Avatar.Fallback class="h-32	w-32">Vi</Avatar.Fallback>
		</Avatar.Root>
		<p class="text-center text-2xl font-bold">{username}</p>
	</div>
	<div class="flex w-[65%] flex-col justify-between gap-5">
		<p class="text-sm font-normal">
			Co-Founder and CEO at Duggup - Social network for people in tech. Ex-Amazon Head of
			Engineering. I write hot-takes on building a business, shipping delightful products and
			accelerating product and career growth.
		</p>
		<Button class="max-w-28">Followed</Button>
	</div>
	<div class="flex flex-col items-end gap-3">
		<div class="flex flex-col items-end gap-[0.5px]">
			<img src="/icons/brand_icon_round.svg" alt="brand icon" width="35px" height="35px" />
			<p class="text-base font-bold">Duggup</p>
			<p class="text-xs font-normal text-[#7A9299]">Co-Founder and CEO</p>
		</div>
		<div class="flex items-center gap-4">
			<div class="flex items-center gap-2">
				<p class="color-[#4D4D4D] text-sm font-normal">My website</p>
				<img src="/icons/external_open.svg" width="16px" height="16px" alt="expert open" />
			</div>
			<img src="/icons/more_icon.svg" width="16px" height="16px" alt="more icon" />
		</div>
	</div>
</div>
