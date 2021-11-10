<script>
  export let title, env;
</script>

<head>
  <meta charset='utf-8'>
  <meta name='viewport' content='width=device-width,initial-scale=1'>
  <meta name="generator" content="Plenti">
  <title>{ title }</title>

  <base href="{ env.local ? "/" : env.baseurl }"> 

  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <script type="module" src="spa/ejected/main.js"></script>

  <script src="https://kit.fontawesome.com/5e65b06481.js" crossorigin="anonymous"></script>

  <link rel="icon" type="image/svg+xml" href="/assets/logo.svg">
  <link rel='stylesheet' href='spa/bundle.css'>

  <link rel='stylesheet' href='assets/global.css'>


  <!-- Google Fonts Montserrat & Josefin -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;700&family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">

</head>