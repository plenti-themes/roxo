<script>
    export let title1, title2, title3, title4, body, image, alt;
</script>

<section class="site-project-header">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-8">
          <div class="site-project-header-content">
            <h1>
              {title1} <span>{title2}</span> {title3} <span>{title4}</span>
            </h1>
          </div>
        </div>
        <div class="col-lg-4">
          <a href="#project" class="site-project-header-action scroll-to">
            <span>{body}</span>
            <img src="/assets/{image}" alt="{alt}">
          </a>
        </div>
      </div>
    </div>
  </section>

  <style>
    .site-project-header {
        padding: 170px 0 100px;
        background: #f7f9ff;
    }
    .site-project, .site-blog {
        padding: 120px 0;
        overflow: hidden;
    }

    .site-project, .site-blog {
        padding: 120px 0;
        overflow: hidden;
    } 

    .site-project-header-action img {
        width: 66px;
    }
    .site-project-header-action:hover {
        text-decoration: none;
    }

    .site-project-header-content h1 span {
        color: #eaa4a4;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'montserrat',sans-serif;
        font-weight: 600;
        color: #00113e;
        font-size: 55px;
    }
    .site-project-header-action span {
        display: block;
        font-size: 30px;
        font-weight: 300;
        color: #00113e;
        margin-bottom: 20px;
        font-family: 'josefin sans', sans-serif;
    }
    
    img {
        width: 66px;
    }
    .site-project-header-action {
        display: block;
        text-align: center;
    }

  </style>