<script lang="ts">
	import TimeLineActivity from './TimeLineActivity.svelte';
	import TimeLineCareerUpdate from './TimeLineCareerUpdate.svelte';
	import type { TimelineData } from '$lib/types/global';
	export let data: TimelineData;
</script>

<div>
	{#each data as timeLine}
		{#if timeLine.type === 'Activity'}
			<TimeLineActivity date={timeLine.date} posts={timeLine.posts} />
		{:else}
			<TimeLineCareerUpdate
				companyLocation={timeLine.details?.companyLocation}
				companyLogo={timeLine.details?.companyLogo}
				companyName={timeLine.details?.companyName}
				joinedDate={timeLine.details?.joinedDate}
				position={timeLine.details?.position}
				employmentType={timeLine.details?.employmentType}
			/>
		{/if}
	{/each}
</div>
