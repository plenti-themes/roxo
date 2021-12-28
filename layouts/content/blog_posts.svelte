<script>
    export let date, author, title, subtitle, image, alt, body, quote, signature;
</script>

<section class="site-blog details">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <article class="site-blog-details">
            <p><span>{date}</span> by <span>{author}</span></p>
            <h2 class="blog-title">{title}</h2>
            <img class="feature-image" src="assets/{image}" alt="{alt}">
            <h3 id="black-lines-brand-identity-by-smith">{subtitle}</h3> 
            {#each body as line}
              <span>{line}</span>
            {/each}
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

  </style>