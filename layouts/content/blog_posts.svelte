<script>
    export let title, date, author, image, body1, body2, subimage, quote, signature, subtitle ;
</script>

<section class="site-blog details">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <article class="site-blog-details">
            <p><span>{date}</span> by <span>{author}</span></p>
            <h2 class="blog-title">{title}</h2>
            <img class="feature-image" src="assets/{image}" alt="blog-feature-image">
            
  
  <h3 id="black-lines-brand-identity-by-smith">{subtitle}</h3>
  
  <p>{body1}</p>
  
  <ol>
  <li>ROFL means Rolling on floor laughing.</li>
  <li>STFU means Shut the <em>freak</em> up.</li>
  <li>LMK means Let me know.</li>
  <li>ILY means I love you.</li>
  <li>YOLO means You only live once.</li>
  <li>SMH means Shaking my head.</li>
  </ol>
  
  <p>{body2}</p>
  
  <ol>
  <li>ROFL means Rolling on floor laughing.</li>
  <li>STFU means Shut the <em>freak</em> up.</li>
  <li>LMK means Let me know.</li>
  <li>ILY means I love you.</li>
  <li>YOLO means You only live once.</li>
  <li>SMH means Shaking my head.</li>
  </ol>
  
  <p><img src="assets/{subimage}" alt="blog-details-image-02"></p>
  
  <p>{body1}</p>
  
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