<script>
	import TimeLineActivity from './TimeLineActivity.svelte';
	let data = [
		{
			date: 'Dec 2023',
			posts: [
				{
					text: 'No amount of technology can convert a bad story into a good story.',
					image: '/postImages/jobs.svg'
				},
				{
					text: `Most people don't have original ideas. Here is how Sam Altman pushes himself to have unpopular ideas.`,
					image: '/postImages/sam.svg'
				}
			]
		}
	];
</script>

<div>
	{#each data as timeLine}
		<TimeLineActivity date={timeLine.date} posts={timeLine.posts} />
	{/each}
</div>
