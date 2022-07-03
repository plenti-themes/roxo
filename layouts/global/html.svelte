<script>
  import Head from './head.svelte';
  import Nav from './nav.svelte';
  import Footer from './footer.svelte';
  
  export let content, allContent, layout, allLayouts, env, user, adminMenu;
</script>

<html lang="en">
<Head title={content.filename} {env} />
<body>
  {#if user && $user.isAuthenticated}
    <svelte:component this={adminMenu} {user} bind:content={content} />
  {/if}
  <main>
    <Nav />
    <svelte:component this={layout} {...content.fields} {allLayouts} {allContent} {content} />
    <Footer />
  </main>
</body>
</html>
