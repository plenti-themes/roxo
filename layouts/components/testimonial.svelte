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


    .site-testimonial-item {
        background: #fff;
        padding: 30px;
        margin-bottom: 30px;
        transition: all .3s ease-in;
         transition-property: all;
        transition-duration: 0.3s;
        transition-timing-function: ease-in;
        transition-delay: 0s;
    }  
    .site-testimonial-item {
        background: #fff;
        padding: 30px;
        margin-bottom: 30px;
        transition: all .3s ease-in;
    }

    .site-testimonial {
        background: #f7f9ff;
        padding: 100px 0;
        overflow: hidden;
    }

    .site-testimonial-item.active {
        box-shadow: 0 30px 45px 0 rgb(0 0 0 / 5%);
    }
    :focus-visible {
        outline: -webkit-focus-ring-color auto 1px;
    }

    .row {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        margin-right: -15px;
        margin-left: -15px;
    }
    .section-title h2 {
        font-weight: 300;
        letter-spacing: 2px;
        text-transform: uppercase;
        margin-bottom: 15px;
    }
    h2 {
        font-size: 50px;
    }
    .site-testimonial-item-body {
    margin-bottom: 0;
    font-weight: 300;
}

.site-testimonial-item-header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.site-testimonial-item-header .person p {
    margin-bottom: 0;
    color: #646569;
}

.site-testimonial-item-header .thumb {
    width: 80px;
    margin-right: 15px;
}

.site-testimonial-item {
    background: #fff;
    padding: 30px;
    margin-bottom: 30px;
    transition: all .3s ease-in;
}

.site-testimonial-item.active {
    box-shadow: 0 30px 45px 0 rgb(0 0 0 / 5%);
}

  </style>