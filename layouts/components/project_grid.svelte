<script>
  export let title, body, link, allContent, currentProjectPage, allProjects, totalProjectPages, projectRangeHigh, projectRangeLow;

  let full_grid = true;
  if (allProjects === undefined) {
    full_grid = false;
    allProjects = allContent.filter(content => content.type == "projects");
	  projectRangeHigh = 4;
	  projectRangeLow = 0;
  }

  import Pager from '../components/pager.svelte';
  import { sortByDate } from '../scripts/sort_by_date.svelte';

</script>

<section class="site-project" id="project">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="section-title">
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
      </div>
      
      {#each sortByDate(allProjects) as project, i}
        {#if i >= projectRangeLow && i < projectRangeHigh}
          <div class="col-lg-6 col-md-10 mx-auto">
            <div class="site-project-item">
              <div class="site-project-item-thumb">
                <img src="assets/{project.fields.image.src}" alt="{project.fields.image.alt}">
              </div>
              <div class="site-project-item-content">
                <span>{project.fields.category}</span>
                <h3>{project.fields.title}</h3>
                <a href="{project.path}" class="read-more">view project</a>
              </div>
            </div>
          </div>
        {/if}
      {/each}
      
      {#if full_grid}
        <div class="col-12">
          <Pager currentPage={currentProjectPage} totalPages={totalProjectPages} base="portfolio" />
        </div>
      {:else}
        <div class="col-12 text-center text-lg-left">
          <a href="{link.url}" class="site-project-cta">{link.title}</a>
        </div>
      {/if}
    </div>
  </div>
</section>

<style>
  .site-project-item-thumb img {
    width: 100%;
  }
  .site-project-item-content {
    position: absolute;
    background: #f7f9ff;
    width: 100%;
    padding: 45px 50px;
    bottom: 0;
    transition: all .3s cubic-bezier(0.36,0.03,0,0.91);
  }
  .site-project {
    padding: 120px 0;
    overflow: hidden;
  }
  .site-project-item {
    position: relative;
    margin-bottom: 30px;
    transition: all .3s ease-in;
  }
  p {
    font-size: 16px;
    color: #9d9ea5;
  }
  .section-title p {
    font-size: 20px;
    font-weight: 300;
    font-family: 'josefin sans', sans-serif;
  }
  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  .section-title h2 {
    font-weight: 300;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 15px;
  }
  h2, h3 {
    font-family: montserrat,sans-serif;
    font-weight: 600;
    color: #00113e;
  }
  h2 {
    font-size: 50px;
  }
  img {
    vertical-align: middle;
    border-style: none;
  }
  .site-project-item:hover {
    box-shadow: 0 30px 45px 0 rgb(0 0 0 / 1%), 0 30px 45px 0 rgb(0 0 0 / 2%), 0 30px 45px 0 rgb(0 0 0 / 3%), 0 30px 45px 0 rgb(0 0 0 / 4%);
  }
  .site-project-item {
    position: relative;
    margin-bottom: 30px;
    transition: all .3s ease-in;
  }
  .row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
  }
  .site-project-item-content span {
    font-family: montserrat,sans-serif;
    color: #eaa4a4;
    display: block;
    margin-bottom: 10px; 
  }
  .site-project-cta {
    margin-top: 30px;
    display: inline-block;
    position: relative;
    font-family: 'montserrat',sans-serif;
    font-size: 18px;
    font-weight: 500;
    color: #eaa4a4;
  }
  .site-project-item-content a.read-more {
    position: absolute;
    bottom: 40px;
    display: block;
    width: 100%;
    color: #9d9ea5;
    opacity: 0;
    transform: translateY(20px);
    transition: all .3s cubic-bezier(0.36,0.03,0,0.91);
    transition-property: all;
    transition-duration: 0.3s;
    transition-timing-function: cubic-bezier(0.36, 0.03, 0, 0.91);
    transition-delay: 0s;
  }
  .site-project-item-content h3 {
    margin-bottom: 0;
  }
  .site-project-item-content {
    position: absolute;
    background: #f7f9ff;
    width: 100%;
    padding: 45px 50px;
    bottom: 0;
    transition: all .3s cubic-bezier(0.36,0.03,0,0.91);
  }
  .site-project-item:hover .site-project-item-content {
    padding-bottom: 75px;
  }
  .site-project-item:hover .site-project-item-content a, .site-blog-post:hover .site-project-item-content a, .site-project-item:hover .site-blog-post-content a {
    transform: translateY(0);
    opacity: 1;
  }
  .site-project-item-content a.read-more {
    position: absolute;
    bottom: 40px;
    display: block;
    width: 100%;
    color: #9d9ea5;
    font-family: 'josefin sans', sans-serif;
    opacity: 0;
    transform: translateY(20px);
    transition: all .3s cubic-bezier(0.36,0.03,0,0.91);
  }
  .site-project-item-content h3 a {
    transition: .3s ease;
  }
  .site-project-item:hover .site-project-item-content {
  padding-bottom: 75px;
  }
  div {
    display: block;
  }
  .site-project {
    padding: 120px 0;
    overflow: hidden;
  }
</style>