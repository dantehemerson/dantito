---
layout: index
title: "Blog"
scripts:
 - index
---

<body  itemscope="" itemtype="http://schema.org/Blog">
    {% include navbar.html %}

	<div class="container-fluid mtb">
		<div class="row">			
		     {% for post in site.posts limit:6 %}
		     	<article class="post-item col-md-6 col-lg-4">
		     		<div class="box-body">
		     			<!-- <span class="category">TECH</span> -->
		     			<div class="cover">
		     				<a href="{{ post.url }}">
		     					<img src="http://res.cloudinary.com/dm7h7e8xj/image/upload/c_scale,w_760/v1504808018/euro-insane-trip_hdaqoq.jpg" alt="">
		     				</a>
		     			</div>
			     		<div class="box-info">
			     			<!-- Metas -->
			     			<time></time>
			     			<!-- titulo -->
			     			<a href="{{ post.url }}">
			     				<h2 class="post-title">{{ post.title }}</h2>
			     			</a>
			     			<a href="{{ post.url }}">
			     				<p class="description">{{ post.content | strip_html | truncate: 250 }}</p>
			     			</a>

			     		</div>
		     		</div>
		     	</article>		     	
			 {% endfor %}
		</div>	
	</div>

  	{% include footer.html %}         
</body>
