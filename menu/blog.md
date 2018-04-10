---
layout: index
title: "Blog"
scripts:
 - index
permalink: /blog/
---

<body  itemscope="" itemtype="http://schema.org/Blog">
    {% include navbar.html %}

    <!-- 335661234
			dantehcv_77@outlook.com
			Ap98nfn_9199
     -->

	<div class="container container-full mtb">
		<div class="row">				

		     {% for post in site.posts limit: 6 %}		     

		     	<!-- Si el post no contiene la categoria projects -->
		     	{% unless post.categories contains 'projects' %}
					{% include blog-item.html %}
		     	{% endunless %}		     	

			 {% endfor %}


		</div>	
	</div>

	
  	{% include footer.html %}         
</body>
