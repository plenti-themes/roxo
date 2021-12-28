<script>
  export let currentPage, totalPages;
</script>

<div class="site-blog-pagination"> 
    <ul class="pagination">
        <li class="page-item">
            <a href="/blog/" class="page-link" aria-label="First"><span aria-hidden="true">««</span></a>
        </li>
        <li class="page-item disabled">
        <a class="page-link" aria-label="Previous"><span aria-hidden="true">«</span></a>
        </li>
        <li class="page-item active"><a class="page-link" href="/blog/">1</a></li>
        <li class="page-item"><a class="page-link" href="/blog/page/2/">2</a></li>
        <li class="page-item">
        <a href="/blog/page/2/" class="page-link" aria-label="Next"><span aria-hidden="true">»</span></a>
        </li>
        
        <li class="page-item">
            <a href="/blog/page/2/" class="page-link" aria-label="Last"><span aria-hidden="true">»»</span></a>
        </li>
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