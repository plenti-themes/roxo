<script>
    export let title, body, items;
</script>

<section class="site-client">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-title">
            <h2>{title}</h2>
          </div>
          <div class="site-client-wrapper">
            
            <div class="site-client-item">
              <img src="assets{items.item1}" alt="client-logo">
            </div>
            
            <div class="site-client-item">
              <img src="assets{items.item2}">
            </div>
            
            <div class="site-client-item">
              <img src="assets{items.item3}" alt="client-logo">
            </div>
            
            <div class="site-client-item">
              <img src="assets{items.item4}" alt="client-logo">
            </div>
            
            <div class="site-client-item">
              <img src="assets{items.item5}" alt="client-logo">
            </div>
            
            <div class="site-client-item">
              <img src="assets{items.item6}" alt="client-logo">
            </div>
            
            <div class="site-client-item">
              <img src="assets{items.item7}" alt="client-logo">
            </div>
            
            <div class="site-client-item">
              <img src="assets{items.item8}" alt="client-logo">
            </div>
            
            <div class="site-client-item">
              <img src="assets{items.item9}" alt="client-logo">
            </div>
            
            <div class="site-client-item">
              <img src="assets{items.item10}" alt="client-logo">
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </section>

<style>
    .section-title h2 {
        font-weight: 300;
        letter-spacing: 2px;
        text-transform: uppercase;
        margin-bottom: 15px;
        font-size: 50px;
        font-family: 'montserrat', sans-serif;
    }
    .site-client {
        padding: 100px 0 50px;
    }
    .site-client .section-title {
        margin-bottom: 100px;
    }
    .site-client-wrapper {
        display: flex;
        flex-wrap: wrap;
    }
    .site-expertise {
        padding: 100px 0;
        background: #f7f9ff;
    }
    .site-client-item {
        text-align: center;
        width: 20%;
        margin-bottom: 50px;
    }
  </style>