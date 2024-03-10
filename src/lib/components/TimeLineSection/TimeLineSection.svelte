<script>
	import TimeLineActivity from './TimeLineActivity.svelte';
	import TimeLineCareerUpdate from './TimeLineCareerUpdate.svelte';
	let data = [
		{
			type: 'Activity',
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
		},
		{
			type: 'career_update',
			date: null,
			details: {
				companyLogo: '/icons/brand_icon_round.svg',
				companyName: 'Duggup',
				companyLocation: 'San Francisco Bay Area',
				joinedDate: 'Nov 2023',
				position: 'Co-Founder and CEO',
				exploymentType: 'Full-time · Remote'
			}
		},
		{
			type: 'Activity',
			date: 'Dec 2023',
			posts: [
				{
					text: `Startup Lesson I am reflecting. Don't build for the "average person"`,
					image: '/postImages/startup.svg'
				},
				{
					text: `Your biggest regrets at 80 will be acts of omission.`,
					image: '/postImages/regrets.svg'
				}
			]
		},
		{
			type: 'career_update',
			date: null,
			details: {
				companyLogo: '/icons/better_up_logo.svg',
				companyName: 'BetterUp',
				companyLocation: 'San Francisco Bay Area',
				joinedDate: 'Sep 2022',
				position: 'VP Engineering',
				exploymentType: 'Full-time'
			}
		}
	];
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
				exploymentType={timeLine.details?.exploymentType}
			/>
		{/if}
	{/each}
</div>
