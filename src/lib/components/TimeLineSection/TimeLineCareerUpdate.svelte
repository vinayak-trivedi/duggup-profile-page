<script lang="ts">
	export let companyLogo: string;
	export let companyName: string;
	export let companyLocation: string;
	export let joinedDate: string;
	export let position: string;
	export let employmentType: string;
</script>

<div class="flex flex items-center gap-5">
	<div class="flex w-[120px] shrink-0 flex-col items-end">
		<img src={companyLogo} width="48px" height="48px" alt="{companyName} logo" />
		<p class="color-[#141618] text-base font-bold">{companyName}</p>
		<p class="color-[#7A9299] text-end text-xs font-normal">
			{companyLocation}<br />joined <br />{joinedDate}
		</p>
	</div>
	<img class="self-stretch" src="/icons/timeLineCareerUpdateLine.svg" alt="" />
	<div class="flex flex-col justify-between">
		<p class="color-[#141618] text-xl font-bold">{position}</p>
		<p class="color-[#7A9299] text-xs font-normal">{employmentType}</p>
	</div>
</div>
