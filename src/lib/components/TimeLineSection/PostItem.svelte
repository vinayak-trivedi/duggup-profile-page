<script lang="ts">
	export let postImage: string;
	export let postText: string;
</script>

<div class="w-[49%] rounded-xl border-[0.5px] border-solid border-[#D0D5DD]">
	<img class="rounded-t-xl" src={postImage} width="100%" height="136px" alt="post" />
	<p class="p-6 text-sm font-normal">{postText}</p>
</div>
