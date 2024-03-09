<script lang="ts">
	export let navItemImage: string;
	export let navItemText: string;
</script>

<div class="flex items-center gap-4">
	<img src={navItemImage} width="16px" height="16px" alt={navItemText} />
	<p class="text-sm font-normal">{navItemText}</p>
</div>
