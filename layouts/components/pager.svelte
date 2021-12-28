<script>
  export let currentPage, totalPages;
</script>

<div class="site-blog-pagination"> 
    <ul class="pagination">
        {#if currentPage > 1}
            <li class="page-item">
                <a href="/blog/" class="page-link" aria-label="First"><span aria-hidden="true">««</span></a>
            </li>
            <li class="page-item">
                <a href="blog/{currentPage - 1}" class="page-link" aria-label="Previous"><span aria-hidden="true">«</span></a>
            </li>
        {:else}
            <li class="page-item disabled">
                <a href="blog" class="page-link" aria-label="First"><span aria-hidden="true">««</span></a>
            </li>
            <li class="page-item disabled">
                <a href="blog/{currentPage - 1}" class="page-link" aria-label="Previous"><span aria-hidden="true">«</span></a>
            </li>
        {/if}

        <li class="page-item active"><a class="page-link" href="/blog/">1</a></li>
        <li class="page-item"><a class="page-link" href="/blog/page/2/">2</a></li>

        {#if currentPage < totalPages}
            <li class="page-item">
                <a href="blog/{currentPage + 1}" class="page-link" aria-label="Next"><span aria-hidden="true">»</span></a>
            </li>
            <li class="page-item">
                <a href="blog/{totalPages}" class="page-link" aria-label="Last"><span aria-hidden="true">»»</span></a>
            </li>
        {:else}
            <li class="page-item disabled">
                <a href="blog/{currentPage + 1}" class="page-link" aria-label="Next"><span aria-hidden="true">»</span></a>
            </li>
            <li class="page-item disabled">
                <a href="blog/{totalPages}" class="page-link" aria-label="Last"><span aria-hidden="true">»»</span></a>
            </li>
        {/if}
    </ul>
</div>

<style>
    .site-blog-pagination .pagination .page-item.active .page-link, .site-blog-pagination .pagination .page-item.active .page-link {
        background-color: #eaa4a4;
        color: #fff;
    }
    .site-blog-pagination .pagination .page-item .page-link, .site-blog-pagination .pagination .page-item .page-link {
        font-size: 24px;
        border-radius: 0;
        border: none;
        padding: 12px 20px;
        color: #00113e;
        font-weight: 300;
        transition: all .3s ease;
    }
    .site-blog-pagination .pagination .page-item:not(:last-child), .site-blog-pagination .pagination .page-item:not(:last-child) {
        margin-right: 10px;
    }
    .site-blog-pagination, .site-blog-pagination {
        margin-top: 40px;
    }
    .site-blog-pagination .pagination, .site-blog-pagination .pagination {
        justify-content: center;
    }
</style>