<script>
  export let title, link1, link2; 
</script>

<section class="site-cta" style="background-image: url(&quot;https://roxo-hugo.staticmania.com/images/backgrounds/cta-background.jpg&quot;);">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h1 class="site-cta-title">{title}</h1>
          <ul class="site-cta-buttons">
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
  </section>

  <style>
    .site-cta-title {
      font-size: 70px;
      font-weight: 700;
      letter-spacing: 10px;
      margin-bottom: 60px;
      font-family: 'montserrat',sans-serif;
      color: #00113e;
    }

     h2, h3, h4, h5, h6 {
      font-family: 'montserrat',sans-serif;
      font-weight: 600;
     color: #00113e;
    }

    .site-cta-buttons li:not(:last-child) {
      margin-right: 40px;
    }

    .site-cta-buttons li {
      display: inline-block;
    }
    li {
      display: list-item;
      text-align: -webkit-match-parent;
    }

    ul {
      list-style-type: disc;
    }

    .site-cta {
      padding: 130px 0;
      background-size: cover;
      background-position: 50%;
    }
    .btn .btn-area span {
      position: relative;
      display: block;
      padding: 2px 0;
      transition: transform .9s cubic-bezier(0.19,1,0.22,1);
      transform-origin: left center;
    }

  </style>