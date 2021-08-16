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
                <a href="{link2.link}" class="btn btn-primary">
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
      <img src="/assets{image}" alt="arrow-down">
    </a>
  </section>

<style>
h1, h2, h3, h4, h5, h6 {
    font-family: montserrat,sans-serif;
    font-weight: 600;
    color: #00113e;

    
}

h6 {
    font-size: 15px;
    font-weight: 300;
}

li {
    display: list-item;
    text-align: -webkit-match-parent;
}

ul {
    list-style-type: disc;
}
.text-center {
    text-align: center!important;
}
body {
    font-family: josefin sans,sans-serif;
    font-size: 16px;
    color: #9d9ea5;
}

</style>