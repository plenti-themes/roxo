<nav class="navbar navbar-expand-lg site-navigation">
    <div class="container">
      <a class="navbar-brand" href=".">
        <img src="assets/logo.png" alt="logo">
      </a>
      <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#sitenavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
  
      <div class="collapse navbar-collapse" id="sitenavbar">
        <ul class="navbar-nav ml-auto main-nav">

            <li class="nav-item">
              <a class="nav-link" href=".">Home</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="about">About</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="portfolio">Portfolio</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="blog">Blog</a>
            </li>

            <li class="nav-item">
              <a class="nav-link btn btn-sm btn-primary btn-sm-rounded" href="contact">
                <span class="btn-area">
                  <span data-text="Get in touch">Get in touch</span>
                </span>
              </a>
            </li>
 
        </ul>
      </div>
    </div>
  </nav>

  <style>
    nav {
      display: block;

    }

    .site-navigation {
      padding: 20px 0;
      background: #fff;
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 9;
      transition: all .3s cubic-bezier(0.55,0.085,0.68,0.53);
    }
    .site-navigation .nav-item .nav-link {
      font-family: 'montserrat',sans-serif;
      color: #00113e;
      transition: all .3s ease;
      padding: 15px 18px;
      position: relative;
      font-weight: 600px;
    }

    .site-navigation .navbar-brand {
      padding: 0;
      margin: 0;
    }

    .site-navigation {
        padding: 20px 0;
        background: #fff;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 9;
        transition: all .3s cubic-bezier(0.55,0.085,0.68,0.53);
        transition-property: all;
        transition-duration: 0.3s;
        transition-timing-function: cubic-bezier(0.55, 0.085, 0.68, 0.53);
        transition-delay: 0s;
    }

    .site-navigation.nav-bg {
        padding: 12px 0;
        box-shadow: 0 0 12px 0 rgb(0 0 0 / 9%);
    }

    .site-navigation .nav-item:last-child {
      margin-left: 15px;
    }

    .btn-sm {
      padding: 15px 40px!important;
    }

    .btn-sm-rounded {
      border-radius: 40px;
    }

  </style>
