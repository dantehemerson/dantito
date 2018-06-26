---
layout: portfolio
title: "Portafolio"
scripts:
 - index
permalink: /portfolio/
---


<body class="body-portfolio" itemscope="" itemtype="http://schema.org/Blog">
	{% include navbar.html %}
	 {% include header-page.html 
	 		title="Portafolio" 
	 		description="Algunos de mis trabajos"
	 		background="/assets/images/portfolio-background.jpg" %}
	<div class="main-wrapper" id="mainWrapper">
		<div class="container-background">
			<div class="container container-full pt pb-md">
				<div class="row">
					<div class="col-12">
						<h1  class="title-page portfolio-title">
							Portafolio
						
						</h1>					
					</div>
				</div>
				<div class="row">					
				     {% for post in site.categories.projects %}		     			     
					 	{% include portfolio-item.html %}
					 {% endfor %}
				</div>	
			</div>	

			{% include footer.html %}
		</div>   
	</div>
	
</body>
