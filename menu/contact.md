---
layout: contact
title: "Contact"
scripts:
 - index
permalink: /contact/
---


<body itemscope="" itemtype="http://schema.org/Blog">
	{% include navbar.html %}

	<div class="container-background">
		<div class="container header-contact">			
			<div class="row">
				<header class="col-lg-8 contact-header">
					<h1 class="title-page title-contact">Contactame</h1>
		 			<p class="help-contact">Si tienes una pregunta, quieres que trabajemos juntos o quieres dejarme unas palabras. Me encantaría escucharte.</p>
				</header>				
				

			</div>
			
		</div>    


		<div class="section-background-form">
			
			<div class="container">
				<div class="row shadownable">
					<div class="col-lg-7 form-contact-container">
				 				<h3 class="title-section">Send Me a message</h3>
				 				<hr class="contact-subtitle-hr">
					 			<form role="form">
					 				<div class="row">
									  <div class="form-group col-12 col-sm-6">
									    <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Name" required>
									  </div>
									  <div class="form-group col-12 col-sm-6">
									    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email" required>
									  </div>				 					
					 				</div>
								  <div class="form-group">
								    <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Subject">
								  </div>
								  <div class="form-group">
								  	<textarea class="form-control" id="message1" rows="6" placeholder="Your Message here" required></textarea>
								  </div>
								  <button type="submit" class="btn btn-primary">Send Message</button>
								</form>
					</div>
					<div class="col-lg-5 info-contact-container" style="background: url({{ site.baseurl }}/assets/images/Social_Media_Background.jpg);">
						<div class="content">
							<h3>Mis redes sociales</h3>

							<hr class="contact-subtitle-hr">
							<div class="info-contact-section-title">
								<p><i class="link-no-border fa fa-envelope"></i>Email</p>
								<ul>
									<li>
										<a href="">dantehemerson@gmail.com</a>
									</li>									
								</ul>
							</div>
							<div class="info-contact-section-title">
								<p><i class="link-no-border fa fa-whatsapp"></i>Phone</p>
								<ul>
									<li>
										<p>+51 928124770</p>
									</li>
								</ul>
							</div>

							{% include socials.html %}

						</div>
					</div>
				</div>			 		
			</div>
		</div>

		{% include footer.html %}
		
	</div>
    
</body>



