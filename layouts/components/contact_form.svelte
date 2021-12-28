<script>
    export let slogan, title, post_to, project_types;
</script>

<section class="site-contact">
    <div class="container">
        <div class="row">
            <div class="col-lg-5">
                <h1 class="site-contact-title">{@html slogan}</h1>
            </div>
            <div class="col-lg-6 ml-auto">
                <div class="site-contact-form">
                    <h4>{title}</h4>
                    <form id="contact-form" action="{post_to}" method="POST">
                        <div class="row">
                            <div class="col-lg-6">
                                <input type="text" class="form-control" name="first-name" id="first-name" placeholder="First Name">
                            </div>
                            <div class="col-lg-6">
                                <input type="text" class="form-control" name="last-name" id="last-name" placeholder="Last Name">
                            </div>
                            <div class="col-lg-6">
                                <input type="email" class="form-control" name="email" id="email" placeholder="Email">
                            </div>
                            <div class="col-lg-6">
                                <div class="select-wrapper">
                                    <select class="form-control" id="projectType" name="project-type">
                                        <option value selected disabled hidden>Project Type</option>
                                        {#each project_types as project}
                                            <option value="{project.id}">{project.name}</option>    
                                        {/each}
                                    </select>
                                </div>
                            </div>
                            <div class="col-12">
                                <textarea class="form-control" id="aboutProject" name="about-project" rows="6" placeholder="About the Project"></textarea>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary" id="contact-form-button">
                                    <span class="btn-area">
                                        <span data-text="Send Message">Send Message</span>
                                    </span>
                                </button>
                            </div>
                            <p id="contact-form-status"></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    h1 {
        font-family: 'montserrat', sans-serif;
        font-weight: 700;
        font-size: 4rem;
    }
    .site-contact {
        padding: 150px 0 100px;
        background: #f7f9ff;
    }
    .site-contact-title :global(span) {
        color: #eaa4a4;
    }
    .site-contact-form h4 {
        font-weight: 300;
        text-transform: uppercase;
        margin-bottom: 50px;
        letter-spacing: 3px;
    }
    .form-control {
        background: transparent;
        border-radius: 0;
        margin-bottom: 30px;
        padding: 0 0 10px;
        border-width: 0 0 1px;
        border-color: #eaa4a4;
        font-weight: 300;
        letter-spacing: 1px;
        -webkit-appearance: none;
        height: 42px;
    }
    .select-wrapper::before {
        content: '';
        position: absolute;
        width: 16px;
        height: 10px;
        background: url("/assets/angle-down-select.svg");
        background-size: contain;
        background-repeat: no-repeat;
        right: 15px;
        top: 20%;
    }
    input, select, textarea {
        font-family: josefin sans,sans-serif;
        font-size: 16px;
        color: #9d9ea5;
    }
    [hidden] {
        display: none!important;
    }
    textarea.form-control {
        height: auto;
    }
</style>