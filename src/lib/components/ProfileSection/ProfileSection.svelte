<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Avatar from '$lib/components/ui/avatar';

	export let username: string;
	export let userImage: string;
	export let introduction: string;

	let isFollowed = false;

	function toggleFollow() {
		isFollowed = !isFollowed;
	}
</script>

<div class="ml-auto mr-auto mt-7 flex w-[85%] items-center gap-10">
	<div class="flex flex-col items-center">
		<Avatar.Root class="h-[120px] w-[120px] border-[5px] border-[#EAEFF5]">
			<Avatar.Image src={userImage} alt="userImage" />
			<Avatar.Fallback>{username.slice(0, 2)}</Avatar.Fallback>
		</Avatar.Root>
		<p class="color-[#141618] text-center text-2xl font-bold">{username}</p>
	</div>
	<div class="color-[#141618] flex w-[60%] flex-col justify-between gap-6">
		<p class="text-sm font-normal">
			{introduction}
		</p>
		<Button on:click={toggleFollow} class="max-w-28">{isFollowed ? 'Followed' : 'Follow'}</Button>
	</div>
	<div class="flex flex-col items-end gap-3">
		<div class="flex flex-col items-end gap-[0.5px]">
			<img src="/icons/brand_icon_round.svg" alt="brand icon" width="35px" height="35px" />
			<p class="text-base font-bold">Duggup</p>
			<p class="text-xs font-normal text-[#7A9299]">Co-Founder and CEO</p>
		</div>
		<div class="flex items-center gap-4">
			<div class="flex cursor-pointer items-center gap-2 whitespace-nowrap">
				<p class="color-[#4D4D4D] text-sm font-normal">My website</p>
				<img src="/icons/external_open.svg" width="16px" height="16px" alt="expert open" />
			</div>
			<img
				class="cursor-pointer"
				src="/icons/more_icon.svg"
				width="16px"
				height="16px"
				alt="more icon"
			/>
		</div>
	</div>
</div>
