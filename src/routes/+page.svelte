<script lang="ts">
	import type { TimelineData } from '$lib/types/global';
	import Navbar from '$lib/components/Navbar/Navbar.svelte';
	import TimeLineSection from '$lib/components/TimeLineSection/TimeLineSection.svelte';
	import ProfileSection from '$lib/components/ProfileSection/ProfileSection.svelte';

	const data: TimelineData = [
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
				employmentType: 'Full-time · Remote'
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
				employmentType: 'Full-time'
			}
		}
	];
	const introduction = `Co-Founder and CEO at Duggup - Social network for people in tech. Ex-Amazon Head of
			Engineering. I write hot-takes on building a business, shipping delightful products and
			accelerating product and career growth.`;
	const username = 'Krishna Kiran';
	const userImage = '/common/user.svg';
</script>

<Navbar {userImage} {username} />
<img src={'/common/line.svg'} width="100%" alt="" />
<main class="my-4 ml-auto mr-auto flex w-[95%] max-w-screen-xl flex-col gap-2.5 gap-4">
	<ProfileSection {introduction} {userImage} {username} />
	<TimeLineSection {data} />
</main>
