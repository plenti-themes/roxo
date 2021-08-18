<script>
    export let title, body;
</script>

<section class="site-about-header">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="site-about-wrapper">
            <div class="site-about-company">
              <h1>
                {title}
              </h1>
            </div>
            <div class="site-about-description">
              <p>
                {body}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

<style>

  .site-about-header {
    padding-top: 80px;
    background-color: #f7f9ff;
  }
  .site-about-company h1 {
    color: #fff;
    font-weight: 400;
    font-size: 25px;
    line-height: 60px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-family: 'montserrat',sans-serif;
  }
  .site-about-wrapper {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  .site-about-company {
    background: #eaa4a4;
    width: 40%;
    padding: 70px 38px;
  }

  .site-about-company h1 {
    color: #fff;
    font-weight: 400;
    font-size: 25px;
    line-height: 60px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  .site-about-company {
    background: #eaa4a4;
    width: 40%;
    padding: 70px 38px;
  }

  .site-about-description {
    width: 60%;
    padding-left: 50px;
  }

  .site-about-description p {
    font-size: 25px;
    font-weight: 300;
    margin-bottom: 0;
    font-family: 'josefin sans', sans-serif;
    color: #9d9ea5;
  }

</style>