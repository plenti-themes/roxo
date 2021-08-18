<script>
    export let title, body, items;
</script>

<section class="site-expertise">
    <div class="container">
      <div class="row">
        
        <div class="col-md-5">
          <div class="section-title">
            <h2>{title}</h2>
          </div>
        </div>
        
        <div class="col-md-6">
          <ul class="site-expertise-list">
            <li>{items.item1}</li>
            <li>{items.item2}</li>
            <li>{items.item3}</li>
            <li>{items.item4}</li>
            <li>{items.item5}</li>
            <li>{items.item6}</li>
            <li>{items.item7}</li>
            <li>{items.item8}</li>
            <li>{items.item9}</li>
            <li>{items.item10}</li>
            <li>{items.item11}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <style>
    .section-title h2 {
        font-weight: 300;
        letter-spacing: 2px;
        text-transform: uppercase;
        margin-bottom: 15px;
    }

    h2 {
        font-size: 50px;
    }
    .site-client {
    padding: 100px 0 50px;
    }

    .site-expertise {
        padding: 100px 0;
        background: #f7f9ff;
        font-family: 'montserrat',sans-serif;

    }

    .site-expertise-list li:not(:last-child) {
        margin-bottom: 10px;
    }

    .site-expertise-list li {
        list-style: none;
        font-size: 25px;
        font-weight: 300;
        color: #00113e;
        font-family: 'josefin sans',sans-serif;
    }

    li {
        display: list-item;
        text-align: "-webkit-match-parent";
    }

    .site-expertise-list {
        padding: 0;
        margin: 10px 0 0 20px;
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

  </style>