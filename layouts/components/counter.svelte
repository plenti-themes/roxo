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

  <style>

    .site-counter {
      padding: 85px 0;
      color: #fff;
      background: #add6d2;
    }

    .section-title h2 {
      font-weight: 300;
      letter-spacing: 2px;
      text-transform: uppercase;
      margin-bottom: 15px;
    }

    
    .site-counter-item-title {
      font-size: 20px;
      font-weight: 300;
      font-family: 'josefin sans',sans-serif;
    }

    .site-counter-item-number {
      color: #fff;
      font-size: 60px;
      margin-bottom: 0;
      font-weight: 700;
      font-family: 'montserrat',sans-serif;
    }

    .section-title h2 {
      font-weight: 300;
      letter-spacing: 2px;
      text-transform: uppercase;
      margin-bottom: 15px;
      font-size: 50px;
      font-family: "montserrat", sans-serif;
    }

  </style>