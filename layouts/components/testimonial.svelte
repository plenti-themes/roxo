<script>
    export let title, body, items, image, link;
  </script>

<section class="site-testimonial">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-title">
            <h2>
              {title}
            </h2>
            <p>
              {body}
            </p>
          </div>
        </div>
        
        {#each items as item}
        <div class="col-lg-4 col-md-6">
          <div class="site-testimonial-item">
            <div class="site-testimonial-item-header">
              <div class="thumb">
                <img src="assets{item.image}" alt="{item.alt}">
              </div>
              <div class="person">
                <h5>{item.title}</h5>
                <p>{item.position}</p>
              </div>
            </div>
            <p class="site-testimonial-item-body">
              "{item.bio}" 
            </p>
          </div>
        </div>
        {/each}
      </div>
    </div>
  </section>

  <style>
    p {
        font-size: 16px;
        color: #9d9ea5;
    }

    p {
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }   
    .site-testimonial-item-header .person h5 {
        margin-bottom: 5px;
    }

    h5 {
        font-size: 18px;
    }
    h1, h2, h3, h4, h5, h6 {
        font-family: montserrat,sans-serif;
        font-weight: 600;
        color: #00113e;
    }

    div {
        display: block;
    }

  </style>