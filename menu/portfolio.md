---
layout: portfolio
title: "Portfolio"
scripts:
 - index
permalink: /portfolio/
---


<body itemscope="" itemtype="http://schema.org/Blog">
    {% include navbar.html %}
	
	<div class="container mtb">
		<div class="row">					
		     {% for post in site.categories.projects %}		     			     
			 	{% include portfolio-item.html %}
			 {% endfor %}
		</div>	
	</div>

	{% include footer.html %}
    
</body>
