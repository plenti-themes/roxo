<script>
  import Head from './head.svelte';
  import Nav from './nav.svelte';
  import Footer from './footer.svelte';
  
  export let content, layout, allLayouts;
</script>

<html lang="en">
<Head title={content.filename} />
<body>
  <Nav />
  <svelte:component this={layout} {...content.fields} {allLayouts} />
<Footer />
</body>
</html>