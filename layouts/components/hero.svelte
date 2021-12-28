<script>
    export let background, body, title, link1, link2, image;
</script>

<section class="site-hero" style="background-image: url('assets/{background}');">
  <div class="container">
    <div class="row">
      <div class="col-lg-10 mx-auto">
        <div class="site-hero-content text-center">
          <h6>{body}</h6>
            <h1>
              {title}
            </h1>
              <ul class="site-hero-content-buttons">
                <li>
                  <a href="{link1.url}" class="btn btn-secondary">
                    <span class="btn-area">
                      <span data-text="{link1.title}">
                        {link1.title}
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="{link2.url}" class="btn btn-primary">
                    <span class="btn-area">
                      <span data-text="{link2.title}">
                        {link2.title}
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
        <a href="#counter" class="site-hero-scroll scroll-to">
          <img src="assets{image}" alt="arrow-down">
        </a>
</section>

<style>
  
  .text-center {
    text-align: center!important;
  }

  h1 {
    font-size: 60px;
    font-weight: 600;
  }

  h1, h2, h3, h4, h5, h6, body {
    font-family: 'montserrat',sans-serif;
    color: #00113e;
  }

  h6 {
    font-size: 15px;
    font-weight: 300;
    display: block;
    margin-block-start: 2.33em;
    margin-block-end: 2.33em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
      
  .site-hero {
    position: relative;
    height: 100vh;
    background-size: cover;
    background-position: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .site-hero-scroll {
    position: absolute;
    left: 50%;
    bottom: 70px;
    transform: translateX(-50%);
    scroll-behavior: smooth;
  }

  .site-hero-content-buttons li {
    display: inline-block;
  }

  .site-hero-content-buttons li:not(:last-child) {
    margin-right: 30px;
  }

  .site-hero-content-buttons li .btn {
    font-weight: 600;
  }

  .site-hero-content h1 {
    margin-bottom: 75px;
  }

  .btn .btn-area span {
    position: relative;
    display: block;
    padding: 2px 0;
    transition: transform .9s cubic-bezier(0.19,1,0.22,1);
    transform-origin: left center;
  }

  img {
    margin: auto;
    vertical-align: middle;
  }

  li {
    display: list-item;
    text-align: '-webkit-match-parent';
  }

  ul {
    list-style-type: disc;
  }


</style>