<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar';
	export let username: string;
	export let userImage: string;
</script>

<div class="flex items-center gap-3 cursor-pointer">
	<Avatar.Root class="h-12	w-12 border-[0.5px] border-[#4D4D4D]">
		<Avatar.Image src={userImage} alt="userImage" />
		<Avatar.Fallback>{username.slice(0, 2)}</Avatar.Fallback>
	</Avatar.Root>
	<p class="text-lg font-medium text-[#4D4D4D]">{username}</p>
	<img src="/icons/chevron_down.svg" alt="chevron down" />
</div>
