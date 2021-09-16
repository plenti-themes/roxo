<script>
    export let title, people;
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
        {#each people as person}
        <div class="col-lg-4 col-md-6">
          <div class="site-team-member">
            <div class="site-team-member-image">
              <img src="/assets{person.image}" alt="{person.alt}">
            </div>
            <div class="site-team-member-content">
              <h3>{person.name}</h3>
              <p>{person.title}</p>
              <ul class="site-team-member-social">
                {#each person.social as social}
                <li><a href="{social.url}"><i class="{social.icon}"></i></a></li>
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
        font: normal normal normal 14px/1 'FontAwesome';
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

    .site-team-member-social {
        margin: 0;
        padding: 0;
    }

    .site-team-member-social li:not(:last-child) {
        margin-right: 10px;
    }

    ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }

  .site-team-member-social li:not(:last-child) {
    margin-right: 10px;
  }


  </style>