
var disqus_config = function () {

	var pathname = document.location.pathname;
	var dividerList = pathname.split("/");
	if(dividerList[dividerList.length - 1] == "") {			   
	   pathname = pathname.slice(0, -1)
	}			      
    pathname = pathname.replace(".html", "");
    
	this.page.url = document.location.href;  
	this.page.identifier = pathname;

	// console.log("URL : " + this.page.url);
	// console.log("ID  : " + this.page.identifier);
};

(function() { 
	var d = document;
	var s = d.createElement('script');
	s.src = 'https://dantito.disqus.com/embed.js';
	s.setAttribute('data-timestamp', +new Date());
	(d.head || d.body).appendChild(s);
})();

                            

