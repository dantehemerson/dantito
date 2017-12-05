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
			     				<p class="description">{{ post.content | strip_html | truncate: 350 }}</p>
			     			</a>

			     		</div>
		     		</div>
		     	</article>		     	
			 {% endfor %}
		</div>	
	</div>

	
	
	<span>Dolor est voluptates maxime, consequatur, sequi dicta ex soluta molestiae veritatis quisquam cum libero sunt obcaecati atque eius aperiam magnam nesciunt quod eligendi, commodi laborum quia aliquid reiciendis. Nihil, labore.</span>
	<span>Cupiditate quasi perferendis ad nostrum, quae sunt maiores et magni doloribus pariatur maxime consequatur veritatis quidem aspernatur, dicta magnam qui, nesciunt saepe quaerat. Accusamus reprehenderit itaque eligendi, eum autem odit.</span>
	<span>Perspiciatis inventore assumenda minima neque iste delectus accusamus repudiandae asperiores, necessitatibus consequatur tempore sapiente ea distinctio ad ullam sint ratione suscipit minus a, odio nulla fugiat quaerat consequuntur porro pariatur.</span>
	<span>Ullam corporis nostrum debitis, molestiae sit tenetur, fugit quos fuga, nihil eveniet dignissimos. Voluptas quaerat nihil molestias, nostrum sunt aliquid nobis non totam earum sint saepe recusandae voluptatibus dolorum aliquam!</span>
	<span>Distinctio laudantium impedit, pariatur voluptate veniam, dignissimos molestiae officiis fugiat delectus nulla, cum ipsa recusandae beatae asperiores esse eos libero obcaecati, at omnis sequi possimus. Perferendis aut at tenetur tempora!</span>
	<span>Incidunt sed minima tempora quaerat veniam praesentium reprehenderit iure ullam nobis obcaecati vero iste facilis corporis exercitationem nulla aperiam placeat quo est minus, molestiae sit repellat blanditiis. Suscipit nisi, commodi!</span>
	<span>Explicabo, facilis beatae esse eveniet delectus eaque, animi, inventore voluptatum eligendi exercitationem aspernatur quis atque. Culpa, iste doloribus ea illo qui earum quasi odio magni, obcaecati pariatur voluptate illum nostrum.</span>
	<span>Error accusantium sit delectus minima modi aspernatur aliquid officia voluptates dolorum, illo tenetur saepe quaerat possimus optio in non corrupti, eos quisquam autem officiis? Cupiditate nostrum pariatur nulla similique molestias.</span>
	<span>Autem harum, molestias sequi accusantium repudiandae perferendis magnam quo aut numquam, labore ullam nisi optio vitae rem natus saepe. Ab vel expedita, libero, debitis ipsum eligendi reprehenderit possimus. Neque, nam!</span>
	<span>Mollitia sint, dolor reiciendis vel quis veniam tenetur odio ex culpa optio ea totam, minima ipsum facere nulla laudantium! Officia architecto sapiente laboriosam laborum dolore ratione reiciendis rerum, est culpa!</span></p>

  	{% include footer.html %}         
</body>
