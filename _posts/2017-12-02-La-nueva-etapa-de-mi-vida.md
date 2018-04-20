---
layout: post
title:  "How to Tackle the Learning Curve of your First Major Engineering Project"
subtitle: "A closer look at the 16 week-long Contacts API project and the learnings that came from engineering fullstack systems at scale"

date:   2017-11-28 17:47:30 -0500
categories: jekyll update
image:
   feature: portfolio_06.jpg
---

You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:

```ruby
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
```

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].


```javascript
'use strict';

// No quiero ser un estorbo remix
function holaMundo() {
	console.log("Hola Mundo");
}


const http = require('http'),
	options = {
		host : 'dantecalderon.com',
		port : 80,
		path : '/blog'
	};

let htmlCode = '';

function httpClient(res) {
	console.log(`El sitio ${options.host} ha respondido. Código de Estado: ${res.statusCode}`);
	res.on('data', data => {
		htmlCode += data;
		console.log( data, data.toString() );
	});
}

function httpError(err) {
	console.log(`El sitio ${options.host} no respondió. Código de Estado: ${err.code}. Error: ${err.message}`);
}

function webServer(req, res) {
	res.writeHead(200, {'Content-Type':'text/html'});
	res.end(htmlCode);
}

//instancia cliente de HTTP
http
	.get(options, httpClient)
	.on('error', httpError);

//instancia servidor de HTTP
http
	.createServer(webServer)
	.listen( 3000, 'localhost', () => console.log('Servidor %% corriendo en http://localhost:3000/') );
```

#Jekyll Markdown Quick Reference

<script src="https://gist.github.com/LeNPaul/e4a87bba80cc97045848bae3b6d89aa2.js"></script>

####Write in simply awesome markdown

layout: post
title: Markdown Style Guide
---

This is a demo of all styled elements in Jekyll Now. 

[View the markdown used to create this post](https://raw.githubusercontent.com/barryclark/www.jekyllnow.com/gh-pages/_posts/2014-6-19-Markdown-Style-Guide.md).

This is a paragraph, it's surrounded by whitespace. Next up are some headers, they're heavily influenced by GitHub's markdown style.

## Header 2 (H1 is reserved for post titles)##

### Header 3

#### Header 4
 
A link to [Jekyll Now](http://github.com/barryclark/jekyll-now/). A big ass literal link <http://github.com/barryclark/jekyll-now/>
  
An image, located within /images

![an image alt text]({{ site.baseurl }}/images/jekyll-logo.png "an image title")

* A bulletted list
- alternative syntax 1
+ alternative syntax 2
  - an indented list item

1. An
2. ordered
3. list

Inline markup styles: 

- _italics_
- **bold**
- `code()` 
 
> Blockquote
>> Nested Blockquote 
 
Syntax highlighting can be used by wrapping your code in a liquid tag like so:

{{ "{% highlight javascript " }}%}  
/* Some pointless Javascript */
var rawr = ["r", "a", "w", "r"];
{{ "{% endhighlight " }}%}  

creates...

{% highlight javascript %}
/* Some pointless Javascript */
var rawr = ["r", "a", "w", "r"];
{% endhighlight %}
 
Use two trailing spaces  
on the right  
to create linebreak tags  
 
Finally, horizontal lines
 
----
****
[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
