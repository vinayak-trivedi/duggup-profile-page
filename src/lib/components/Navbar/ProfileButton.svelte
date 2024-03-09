<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar';
	export let username: string;
	export let userImage: string;
</script>

<div class="flex items-center gap-3">
	<Avatar.Root>
		<Avatar.Image class="h-12	w-12" src={userImage} alt="userImage" />
		<Avatar.Fallback class="h-12	w-12">Vi</Avatar.Fallback>
	</Avatar.Root>
	<p class="text-lg font-medium text-[#4D4D4D]">{username}</p>
	<img src="/icons/chevron_down.svg" alt="chevron down" />
</div>
