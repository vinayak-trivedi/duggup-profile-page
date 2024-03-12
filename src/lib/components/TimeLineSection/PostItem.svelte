<script lang="ts">
	export let postImage: string;
	export let postText: string;
</script>

<div class="w-[344px] rounded-xl border-[0.5px] border-solid border-[#D0D5DD] cursor-pointer">
	<img class="rounded-t-xl w-[100%]" src={postImage} width="100%" height="136px" alt="post" />
	<p class="p-6 text-sm font-normal color-[#141618]">{postText}</p>
</div>
