<script lang="ts">
	export let date: string | null;
	export let posts: any;
	import PostItem from './PostItem.svelte';
</script>

<div class="flex items-center gap-5">
	<p class="w-[120px] shrink-0 text-end">{date}</p>
	<img class="self-stretch" src="/icons/timeLineActivityLine.svg" alt="" />
	<div class="flex justify-between">
		{#each posts as post}
			<PostItem postImage={post.image} postText={post.text} />
		{/each}
	</div>
</div>
