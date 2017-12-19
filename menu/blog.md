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

	<div class="container-fluid mtb">
		<div class="card-columns">					
		     {% for post in site.posts limit: 6 %}
		     	<!-- Si el post no contiene la categoria projects -->
		     	{% unless post.categories contains 'projects' %}
			     	<article class="card shadow post-item" >
			     		<div class="box-body">
			     			<!-- <span class="category">TECH</span> -->
			     			<div class="cover">
			     				<a href="{{ post.url }}">

			     					{% if post.image.feature %}
			     						<img src="{{ site.baseurl }}/assets/images/{{ post.image.feature }}" alt="">
			     					{% else %}
			     						<img src="{{ site.baseurl }}/assets/images/thumb01.jpg" alt="">
			     					{% endif %}		     					
			     				</a>
			     			</div>
				     		<div class="box-info">
				     			<!-- Metas -->
				     			<!-- Fecha de publicación -->
				     			<span class="post-date">
				     				<i class="fa fa-calendar" aria-hidden="true"></i>
				     				{% include post-date.html %}
									<span class="middotDivider"></span>
				     				<i class="fa fa-clock-o" aria-hidden="true"></i> 				
				     				{% include read-time.html %}
				     			</span>
				     			<!-- titulo -->
				     			<a href="{{ post.url }}">
				     				<h2 class="post-title">{{ post.title }}</h2>
				     			</a>
				     			<a href="{{ post.url }}">
				     				<p class="description">{{ post.content | strip_html | truncate: 200 }}</p>
				     			</a>
				     		</div>
			     		</div>
			     	</article>		     	
					
		     	{% endunless %}		     	

			 {% endfor %}


		</div>	
	</div>

	
  	{% include footer.html %}         
</body>
