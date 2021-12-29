<script>
    export let title, body, image, category;
</script>

<section class="site-project-single-section">
  <div class="container">
    <div class="row">
      <div class="col-lg-8 mx-auto">
        <div class="site-project-single">
          <h1>{title}</h1>
          <div class="site-project-single-description">
            {#each body as p}
                <p>{p}</p>
            {/each}
          </div>
          <div class="site-project-single-image">  
            <img src="assets/{image.src}" alt="{image.alt}">
          </div>
          
          <div class="site-project-single-action">
            <a href="portfolio">
              <span class="link-area">
                <span data-text="Here We Go">More Projects</span>
              </span>
              <img src="assets/to-top.svg" alt="next project">
            </a>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</section>

<style>
    .site-project-single-section {
        padding: 250px 0 100px;
    }
    h1 {
        font-family: montserrat,sans-serif;
        font-weight: 700;
        margin-bottom: 40px;
    }
    p {
        color: #9d9ea5;
        font-family: josefin sans,sans-serif;
    }
    .site-project-single-action {
        font-family: josefin sans,sans-serif;
        padding-top: 40px;
        display: flex;
        margin-left: auto;
        justify-content: flex-end;
    }
    .site-project-single-action a {
        position: relative;
        font-size: 24px;
        font-weight: 300;
        color: #00113e;
    }
    .site-project-single-action a:hover {
        text-decoration: none;
    }
    .site-project-single-action a:hover .link-area span {
        transform: translateY(-150%) skewY(7deg);
    }
    .site-project-single-action a:hover .link-area span::after {
        transform: skewY(-7deg);
    }
    .site-project-single-action a .link-area {
        display: inline-block;
        overflow: hidden;
    }
    .site-project-single-action a .link-area span {
        position: relative;
        display: block;
        padding: 2px 0;
        transition: transform .9s cubic-bezier(0.19,1,0.22,1);
        transform-origin: left center;
    }
    .site-project-single-action a .link-area span::after {
        content: attr(data-text);
        position: absolute;
        top: 150%;
        left: 0;
        transform: skewY(30deg);
        transform-origin: left center;
        transition: transform .9s cubic-bezier(0.19,1,0.22,1);
    }
    .site-project-single-action img {
        filter: invert(1);
        transform: rotate(90deg);
        margin-left: 10px;
        margin-top: -30px;
    }
</style>