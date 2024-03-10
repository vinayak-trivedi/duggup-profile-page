<script>
	import Navbar from '$lib/components/Navbar/Navbar.svelte';
	import TimeLineSection from '$lib/components/TimeLineSection/TimeLineSection.svelte';
	import ProfileSection from '$lib/components/ProfileSection/ProfileSection.svelte';
</script>

<Navbar />
<main class="my-4 ml-auto mr-auto w-[95%] max-w-screen-lg gap-2.5">
	<ProfileSection userImage="https://github.com/shadcn.png" username="Krishna Kiran" />
	<TimeLineSection />
</main>
