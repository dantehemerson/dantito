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
		 			<!-- <hr class="contact-subtitle-hr background-gradient"> -->
		 			<p class="help-contact">Si tienes una pregunta, quieres que trabajemos juntos o quieres dejarme unas palabras. Me encantaría escucharte.</p>
				</header>				
				

			</div>
			
		</div>    


		<div class="section-background-form">
			
			<div class="container">
				<div class="row ">
					<div class="col-lg-8 form-contact-container">
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
					<div class="col-lg-4 info-contact-container">
						<h3>Mis redes sociales</h3>
					</div>
				</div>			 		
			</div>
		</div>

		{% include footer.html %}
		
	</div>
    
</body>



