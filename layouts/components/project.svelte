<script>
  export let title, body, items, image, link;
</script>

<section class="site-project" id="project">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-title">
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
        </div>
        
        {#each items as item}
        <div class="col-lg-6 col-md-10 mx-auto">
          <div class="site-project-item">
            <div class="site-project-item-thumb">
              <img src="assets/{item.image}" alt="">
            </div>
            <div class="site-project-item-content">
              <span>{item.title}</span>
              <h3>{item.body}</h3>
              <a href="item.url" class="read-more">view project</a>
            </div>
          </div>
        </div>
        {/each}
        
        <div class="col-12 text-center text-lg-left">
          <a href="{link.url}" class="site-project-cta">{link.title}</a>
        </div>
      </div>
    </div>
  </section>