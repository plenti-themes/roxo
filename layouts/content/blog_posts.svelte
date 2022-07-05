<script>
    export let date, author, title, subtitle, image, alt, body, quote, signature;
</script>

<section class="site-blog details">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <article class="site-blog-details">
          <p class="date-author"><span>{date}</span> by <span>{author}</span></p>
          <h2 class="blog-title">{title}</h2>
          <img class="feature-image" src="{image}" alt="{alt}">
          <h3 id="black-lines-brand-identity-by-smith">{subtitle}</h3> 
          <div class="body-text">
            {#each body as line}
              <span>{line}</span>
            {/each}
          </div>
          <blockquote>
          <p>{quote}</p>
          <p>{signature}</p>
          </blockquote>  
        </article>
      </div>
    </div>
  </div>
</section>

<style>
  .site-blog.details {
    padding: 150px 0 80px;
  }
  .date-author {
    font-size: 16px;
    color: #9d9ea5;
    font-family: josefin sans,sans-serif;
  }
  h2 {
    font-family: montserrat,sans-serif;
    font-weight: 700;
    font-size: 2.5rem;
  }
  img {
    max-width: 100%;
    margin-bottom: 20px;
  }
  h3 {
    font-family: montserrat,sans-serif;
    font-weight: 600;
  }
  .body-text {
    color: #9d9ea5;
    font-family: josefin sans,sans-serif;
  }
  .site-blog-details blockquote p {
    color: #00113e;
    font-size: 18px;
    font-family: josefin sans,sans-serif;
  }
  blockquote {
    margin: 10px 0;
  }
</style>
