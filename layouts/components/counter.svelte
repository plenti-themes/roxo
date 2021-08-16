<script>
    export let title, items, body;
</script>

<section class="site-counter" id="counter">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-title">
            <h2 class="text-white">{title}</h2>
          </div>
        </div>
        
        {#each items as item}
        <div class="col-lg-3 col-md-6">
          <div class="site-counter-item">
            <span class="site-counter-item-title">{item.body}</span>
            <h3 class="site-counter-item-number">{item.title}</h3>
          </div>
        </div>
        {/each}       
      </div>
    </div>
  </section>