<script>
	export let components, allLayouts, allContent, content;

	$: currentProjectPage = content.pager;
	let allProjects = allContent.filter(content => content.type == "projects");
	let projectsPerPage = 4;
	let totalProjects = allProjects.length;
	let totalProjectPages = Math.ceil(totalProjects / projectsPerPage);
	$: projectRangeHigh = currentProjectPage * projectsPerPage;
	$: projectRangeLow = projectRangeHigh - projectsPerPage;
</script>

{#if components}
{#each components as {name, fields}}
	<svelte:component this={allLayouts["layouts_components_" + name + "_svelte"]}
		{...fields}
		{allContent}
		{content}
		{currentProjectPage}
		{allProjects}
		{totalProjectPages}
		{projectRangeHigh}
		{projectRangeLow}
	/>
{/each}
{/if}