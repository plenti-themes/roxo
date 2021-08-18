<script>
    export let title, body, items;
</script>

<section class="site-team">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-title">
            <h2>
              {title}
            </h2>
          </div>
        </div>
        
        {#each items as item}
        <div class="col-lg-4 col-md-6">
          <div class="site-team-member">
            <div class="site-team-member-image">
              <img src="/assets{item.image}" alt="{item.alt}">
            </div>
            <div class="site-team-member-content">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <ul class="site-team-member-social">
                {#each items as item}
                <li><a href="{item.url}"><i class="{item.image}"></i></a></li>
                {/each}
              </ul>
            </div>
          </div>
        </div>
        {/each}
        
      </div>
    </div>
  </section>

  <style>
    .site-team {
        padding: 100px 0;
    }
    .section-title {
        margin-bottom: 70px;
    }
    
    .section-title h2 {
        font-weight: 300;
        letter-spacing: 2px;
        text-transform: uppercase;
        margin-bottom: 15px;
        font-family: 'montserrat', sans-serif;
    }

    h2 {
        font-size: 50px;
    }
    .section-title {
        margin-bottom: 70px;
    }
    .site-team {
        padding: 100px 0;  
    }

    .site-team-member {
        background: #f7f9ff;
        padding: 65px 30px 30px;
        margin: 50px 0 30px;
        position: relative;
    }
    img {
        vertical-align: middle;
        border-style: none;
    }
    .site-team-member-image {
        position: absolute;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        overflow: hidden;
        left: 30px;
        top: 0;
        transform: translateY(-50%);
    }
    .fa {
        display: inline-block;
        font: normal normal normal 14px/1 FontAwesome;
        font-size: inherit;
        text-rendering: auto;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .site-team-member-content h3 {
        font-size: 20px;
        color: #eaa4a4;
        margin-bottom: 10px;
        font-weight: 500;
        font-family: "montserrat",sans-serif;
    }
    .site-team-member-content p {
        font-size: 18px;
        color: #00113e;
        margin-bottom: 20px;
        font-weight: 300;
        font-family: "josefin sans", sans-serif;
    }
    .site-team-member-social li a {
        color: #00113e;
    }
    li:not(:last-child) {
        margin-right: 10px;
    }
    .site-team-member-social li {
        display: inline-block;
    }

  </style>