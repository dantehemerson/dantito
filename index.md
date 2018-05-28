---
layout: home  
title: "Home"
scripts:
 - index
---
<body itemscope="http://schema.org/Person" itemtype="http://schema.org/Blog">
  <header class="headerwrap" >
    <div class="header-image">      
      {% include navbar.html %}      
      <div class="container pt-md">        
            <div class="row title-container justify-content-center">
              <div class="col-md-4 col-lg-5 col-xl-3">
                <img class="avatar" src="{{ site.baseurl }}/{{ site.data.authors.primary.avatar }}" alt="">
              </div>
              <div class="col-md-8 col-lg-7 col-xl-7">                
                <h3 class="greeting">¡Hola!, soy</h3>
                <h1 class="name">Dante</h1>
                <h2 class="lastname">Calderón</h2> 
                <h3 class="slogan">Javascript / Go / Python &#183; Developer</h3>               
              </div>
            </div>
      </div>
    </div>
  </header>      
  {% include about.html %}  
  {% include footer.html %}    
</body>