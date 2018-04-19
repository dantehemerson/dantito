---
layout: home  
title: "Home"
scripts:
 - index
---
<body itemscope="http://schema.org/Person" itemtype="http://schema.org/Blog">
  
  <header class="headerwrap">
    <div class="header-image">      
      {% include navbar.html %}      
  <!--     <div class="container">        
            <div class="row title-container">
              <div class="col-12 align-self-center ">                
                <h3 class="greeting">Hello, I am</h3>
                <h1 class="name">Dante</h1>
                <h2 class="lastname">Calderón</h2>                
              </div>
            </div>
      </div> -->

      <div class="container">        
            <div class="row title-container">
              <div class="col-md-4">
                <img class="avatar" src="{{ site.baseurl }}/{{ site.data.authors.primary.avatar }}" alt="">
              </div>
              <div class="col-md-8">                
                <h3 class="greeting">Hello, I am</h3>
                <h1 class="name">Dante</h1>
                <h2 class="lastname">Calderón</h2>                
              </div>
            </div>
      </div>
    </div>
  </header>    
  
  {% include about.html %}
  
  {% include footer.html %}    

</body>
