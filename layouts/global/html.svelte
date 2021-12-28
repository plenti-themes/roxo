<script>
  import Head from './head.svelte';
  import Nav from './nav.svelte';
  import Footer from './footer.svelte';
  
  export let content, allContent, layout, allLayouts, env;
</script>

<html lang="en">
<Head title={content.filename} {env} />
<body>
  <Nav />
  <svelte:component this={layout} {...content.fields} {allLayouts} {allContent} {content} />
<Footer />
</body>
</html>