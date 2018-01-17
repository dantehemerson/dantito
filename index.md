---
layout: index
title: "Home"
scripts:
 - index
---
  <body itemscope="" itemtype="http://schema.org/Blog">
    {% include navbar.html %}
    <header class="headerwrap" style="background: url('{{ site.baseurl }}/assets/images/my_code_workspace.jpg');">
      <!-- div para crear un efecto de transparencia en el fondo. -->
      <!-- <div class="background-avatar-main"></div> -->
      <div class="container">        
            <div class="row title-container">
              <div class="col-12 align-self-center ">                
                <h3 class="greeting">Hello, I am</h3>
                <h1 class="name">Dante</h1>
                <h2 class="lastname">Calderón</h2>
                <!-- <h5 class="username">@dantehemerson</h5>                               -->
                <!-- <img class="avatar-main" src="https://scontent.flim5-3.fna.fbcdn.net/v/t1.0-9/12039740_199897430381944_5485974793149033422_n.jpg?oh=a6948a423ce7cfa9b4af9dbffc35328c&oe=5A94E41F"> -->
              </div>
              
            </div>
      </div>

    </header>    
    
    {% include about.html %}
      <!-- Al parecer acá no queda ninguno de los temas -->
    {% include footer.html %}
    <script src="{{ site.baseurl }}/assets/scripts/navbar_animation.js"></script>

  </body>
