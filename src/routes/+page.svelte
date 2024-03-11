<script>
	import Navbar from '$lib/components/Navbar/Navbar.svelte';
	import TimeLineSection from '$lib/components/TimeLineSection/TimeLineSection.svelte';
	import ProfileSection from '$lib/components/ProfileSection/ProfileSection.svelte';
</script>

<Navbar />
<main class="my-4 ml-auto mr-auto flex w-[95%] max-w-screen-xl flex-col gap-2.5 gap-4">
	<ProfileSection userImage="https://github.com/shadcn.png" username="Krishna Kiran" />
	<TimeLineSection />
</main>
