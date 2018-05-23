---
layout: contact
title: "Contact"
scripts:
 - index
permalink: /contact/
---


<body itemscope="" itemtype="http://schema.org/Blog">
	<div class="container-background">
	    {% include navbar.html %}
	   
		<div class="container header-contact">			
			<div class="row justify-content-center">
				<header class="col-lg-8 contact-header">
					<h1 class="title-contact">Get In Touch</h1>
		 			<!-- <hr class="contact-subtitle-hr background-gradient"> -->
		 			<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
				</header>				
				

			</div>
			
		</div>    

		<div class="container-full">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-lg-8 follow-me-container">					
						{% include socials.html %}
				 	</div>	
				</div>
			</div>
		</div>


		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-8 form-contact-container">
			 				<h3 class="title-section">Send Me a message</h3>
			 				<hr class="contact-subtitle-hr">
				 			<form role="form">
							  <div class="form-group">
							    <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Name" required>
							  </div>
							  <div class="form-group">
							    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email" required>
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
			</div>			 		
		</div>

		{% include footer.html %}
		
	</div>
    
</body>



