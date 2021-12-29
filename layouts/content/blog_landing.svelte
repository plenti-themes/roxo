<script>
  export let title, desc, allContent, content, components, allLayouts;

  import Pager from '../components/pager.svelte';
  import { sortByDate } from '../scripts/sort_by_date.svelte';

  $: currentBlogPage = content.pager;
  let allPosts = allContent.filter(content => content.type == "blog_posts");
  let postsPerPage = 2;
  let totalPosts = allPosts.length;
	let totalBlogPages = Math.ceil(totalPosts / postsPerPage);
	$: postRangeHigh = currentBlogPage * postsPerPage;
	$: postRangeLow = postRangeHigh - postsPerPage;
</script>

<main>

  <section class="site-blog-header">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 text-center">
          <h1>{title}</h1>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  </section>
  
  <section class="site-blog">
    <div class="container">
      <div class="row">
        
        {#each sortByDate(allPosts) as post, i}
          {#if i >= postRangeLow && i < postRangeHigh}
            <div class="col-lg-6">
              <article class="site-blog-post"> 
                <div class="site-blog-post-thumb">
                  <img src="assets/{post.fields.image}" alt="post-thumb">
                </div>
                <div class="site-blog-post-content">
                  <span>{post.fields.date}</span>
                  <h3><a href="{post.path}">{post.fields.title}</a></h3>
                  <p>{post.fields.body[0]}..</p>
                  <a href="{post.path}" class="read-more">read more</a>
                </div>
              </article>
            </div>   
          {/if}
        {/each}
        
        <div class="col-12">
          <Pager currentPage={currentBlogPage} totalPages={totalBlogPages} />
        </div>

        {#if components}
          {#each components as {name, fields}}
            <svelte:component this={allLayouts["layouts_components_" + name + "_svelte"]} {...fields} {allContent} {content} />
          {/each}
        {/if}

      </div>
    </div>
  </section>
 
</main>

<style>

  .site-blog-header h1 {
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 10px;
    margin-bottom: 20px;
  }
  body {
    background: #fff;
    font-family: josefin sans,sans-serif;
    font-size: 16px;
    color: #9d9ea5;
  }
  h1 {
    font-size: 60px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 10px;
    margin-bottom: 20px;
    color: #00113e;
  }
  .site-blog-header {
    padding: 150px 0 0;
  }

  .site-blog-header h1 {
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 10px;
    margin-bottom: 20px;
  }
  .site-blog-header p {
    line-height: 28px;
    margin-bottom: 0;
  }
  p {
    font-size: 16px;
    color: #9d9ea5;
    font-family: 'josefin sans',sans-serif;
  } 
  .site-project, .site-blog {
    padding: 120px 0;
    overflow: hidden;
  }
  .site-project-item-thumb img, .site-blog-post-thumb img {
    width: 100%;
  }
  .site-project-item-content, .site-blog-post-content {
    position: absolute;
    background: #f7f9ff;
    width: 100%;
    padding: 45px 50px;
    bottom: 0;
    transition: all .3s cubic-bezier(0.36,0.03,0,0.91);
  }
  .site-project-item-content span, .site-blog-post-content span {
    font-family: montserrat,sans-serif;
    color: #eaa4a4;
    display: block;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 30px;
  }

  h1, h3 {
  font-family: 'montserrat',sans-serif;
  }

  .site-project-item-content h3 a, .site-blog-post-content h3 a {
    color: #00113e;
    transition: .3s ease;
  } 
  .site-project-item-content, .site-blog-post-content {
    position: absolute;
    background: #f7f9ff;
    width: 100%;
    padding: 45px 50px;
    bottom: 0;
    transition: all .3s cubic-bezier(0.36,0.03,0,0.91);
  } 
  .site-blog-post-content a.read-more {
    color: #eaa4a4;
    letter-spacing: 2px;
    font-family: josefin sans,sans-serif;
    font-size: 16px;
  } 
  .site-project-item:hover, .site-blog-post:hover {
    box-shadow: 0 30px 45px 0 rgb(0 0 0 / 1%), 0 30px 45px 0 rgb(0 0 0 / 2%), 0 30px 45px 0 rgb(0 0 0 / 3%), 0 30px 45px 0 rgb(0 0 0 / 4%);
  }
  .site-project-item:hover .site-project-item-content a, .site-blog-post:hover .site-project-item-content a, .site-project-item:hover .site-blog-post-content a, .site-blog-post:hover .site-blog-post-content a {
    transform: translateY(0);
    opacity: 1;
  }
  .site-project-item-content, .site-blog-post-content {
    position: absolute;
    background: #f7f9ff;
    width: 100%;
    padding: 45px 50px;
    bottom: 0;
    transition: all .3s cubic-bezier(0.36,0.03,0,0.91);
  }

  .site-project-item:hover, .site-blog-post:hover {
    box-shadow: 0 30px 45px 0 rgb(0 0 0 / 1%), 0 30px 45px 0 rgb(0 0 0 / 2%), 0 30px 45px 0 rgb(0 0 0 / 3%), 0 30px 45px 0 rgb(0 0 0 / 4%);
  }
  .site-project-item, .site-blog-post {
    position: relative;
    margin-bottom: 30px;
    transition: all .3s ease-in;
  }
  .site-project-item-thumb img, .site-blog-post-thumb img {
    width: 100%;
  }

element.style {
}
.site-project-item-content h3 a, .site-blog-post-content h3 a {
    color: #00113e;
    transition: .3s ease;
}
a {
    text-decoration: none;
    background-color: transparent;
}
.site-project-item-content h3 a:hover, .site-blog-post-content h3 a:hover {
    text-decoration: none;
    color: #eaa4a4;
}
.site-blog-post-content a.read-more {
    color: #eaa4a4;
    letter-spacing: 2px;
}
.site-project-item-content a.read-more, .site-blog-post-content a.read-more {
    position: absolute;
    bottom: 40px;
    display: block;
    width: 100%;
    opacity: 0;
    transform: translateY(20px);
    transition: all .3s cubic-bezier(0.36,0.03,0,0.91);
}
*, ::after, ::before {
    box-sizing: border-box;
}
.site-project-item:hover, .site-blog-post:hover {
    box-shadow: 0 30px 45px 0 rgb(0 0 0 / 1%), 0 30px 45px 0 rgb(0 0 0 / 2%), 0 30px 45px 0 rgb(0 0 0 / 3%), 0 30px 45px 0 rgb(0 0 0 / 4%);
}

.site-project-item, .site-blog-post {
    position: relative;
    margin-bottom: 30px;
    transition: all .3s ease-in;
}
article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {
    display: block;
}
.site-project-item:hover .site-project-item-content, .site-blog-post:hover .site-project-item-content, .site-project-item:hover .site-blog-post-content, .site-blog-post:hover .site-blog-post-content {
    padding-bottom: 75px;
}

.site-project-item-content, .site-blog-post-content {
    position: absolute;
    background: #f7f9ff;
    width: 100%;
    padding: 45px 50px;
    bottom: 0;
    transition: all .3s cubic-bezier(0.36,0.03,0,0.91);
}


</style>