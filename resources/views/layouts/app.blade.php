<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Centro de Treinamento Cães-Guia">
    <meta name="keywords" content="">
    <meta name="author" content="Carine Aguena">
    <title>Centro de Treinamento Cães-Guia - Centro de Treinamento Cães-Guia</title>
    <link rel="canonical" href="ctcaesguia.test" />
    <link rel="icon" type="image/png" href="/img/favicon.png" />

    <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:300,400,700|Raleway:300,300i,400,400i,700,700i" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet">


    <!--[if lte IE 8]><script src="../themes/zwiebl-zwiebl_stellar/assets/js/ie/html5shiv.js"></script><![endif]-->

    <link rel="stylesheet" type="text/css" href="../themes/zwiebl-zwiebl_stellar/assets/css/main.css">
    <link rel="stylesheet" type="text/css" href="../themes/zwiebl-zwiebl_stellar/assets/sass/zw_custom.scss">


    <link rel="stylesheet" type="text/css" href="/css/app.css">
    <link rel="stylesheet" type="text/css" href="/css/main.css">


</head>



<body>
  <div id="wrapper">
        @include('inc.header')
        @if(Request::is('/'))


      <nav id="nav">



              <ul>
                  <li><a href="home">Home</a></li>
                  <li><a href="#one">O CT Cães-Guia</a></li>
                  <li><a href="#two">Curso de Treinador e Instrutor de Cães-Guia</a></li>
                  <li><a href="#three">Famílias Socializadoras</a></li>
                  <li><a href="#four">Contato</a></li>

              </ul>


      </nav>





      @else
            @include('inc.navigation')
          @endif

          <div id="main">
              @include('inc.messages')
              @yield('content')

          </div>
        <!-- Footer -->

        @include('inc.footer')

  </div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
<script src="combine/1c38b58a2682b14029a635b525e1918c-1553607351"></script>
  <script src="../themes/assets/js/jquery.min.js"></script>
  <script src="../themes/assets/js/jquery.scrollex.min.js"></script>
  <script src="../themes/assets/js/jquery.scrolly.min.js"></script>
  <script src="../themes/assets/js/assets/js/skel.min.js"></script>
  <script src="../themes/assets/js/assets/js/util.js"></script>
  <script src="../themes/assets/js/assets/js/main.js"></script>
  <script src="../themes/assets/js/assets/js/cidades.js"></script>
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</body>
</html>
