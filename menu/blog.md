---
layout: blog
title: "Blog"
scripts:
 - index
permalink: /blog/
---

<body itemscope="" itemtype="http://schema.org/Blog">
	<div class="container-background">
	    {% include navbar.html %}

		<div class="container container-full pt">
			<div class="row">				

			     {% for post in site.posts  %}		     

			     	<!-- Si el post no contiene la categoria projects -->
			     	{% unless post.categories contains 'projects' %}
						{% include blog-item.html %}
			     	{% endunless %}		     	

				 {% endfor %}


			</div>				

		</div>
		
		{% include suscribe.html %}
		
		
	  	{% include footer.html %}
		
	</div>
</body>
