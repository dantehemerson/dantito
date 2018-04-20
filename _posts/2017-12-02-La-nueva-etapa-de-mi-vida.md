---
layout: post
title:  "How to Tackle the Learning Curve of your First Major Engineering Project"
subtitle: "A closer look at the 16 week-long Contacts API project and the learnings that came from engineering fullstack systems at scale"

date:   2017-11-28 17:47:30 -0500
categories: jekyll update
image:
   feature: portfolio_06.jpg
---

The Nylas APIs allow developers to build email, calendar, and contacts functionality into their applications. Our goal is to support all three of these points fully, but until recently, our Contacts API didn’t have the full functionality that we wanted. Nylas is my first full-time engineering job, and shortly after joining, this need to upgrade the Contacts API surfaced again. It was a big task, but one that I was excited to take point on. In this blogpost, I’ll walk through the problem, the solution we came up with, and a few of the things that I learned as a result.

## The Problem

Our Contacts API gave customers (mostly B2B software companies) read-only functionality which allowed them to get a list of contacts with three fields: name, email and phone numbers. We wanted to give them access to more data so they could empower their users to make better connections with peers, colleagues, candidates, and more. To do this, they needed to be able to read, sync, update, and auto-complete data including contact addresses, multiple email addresses, birthdays, job titles and more.

Changing our product to sync and store huge amounts of new data without affecting current customers was a big challenge to tackle for the team in addition to all of the other features we’re building, but one worth taking on for the sake of our customers.

## The Solution

The first component of the solution was to expand our contact model to store more fields. Below is a comparison of the old contact model, Contact v1.0, and the new model, Contact v2.0. Both of these have the system assigned fields of id, account_id and object. Apart from those, we significantly increased the number and granularity of the contact fields for our new and improved contact model.

### Put your product to the test.

Writing good tests is important, but so is really using your product. When I thought I was finished with my Contacts v2.0 work, I started updating our Nylas NodeJS SDK to support the new functionality. This SDK is a NodeJS wrapper for our API which makes integrating the Nylas API into Javascript applications much easier. For the SDK, I had to add functions that enabled it to access the new endpoints, write tests for these functions, and expand the example applications in the SDK to include Contacts v2.0 functionality. 

The process of updating the SDK meant that I had to use all of the new features and functionality that I had just added to the API for Contacts v2.0. This opened my eyes to previously unknown bugs. For example, I was trying to populate the contact model for the NodeJS SDK with contact data from our API and everything except the middle_name field was working. It turns out I had forgotten to encode and return the middle_name field for contact GET requests.

Actually using the product also showed me processes that while not broken, had a poor user experience. For example, our API used to require that the JSON for a contact’s birthday be in the form "birthday": { "date": "1995-01-13", "object": "date"}. Wrapping the date into this object was unnecessary and just added more work to represent the contact’s birthday as a Date in the SDKs. I simplified the birthday field to be "birthday": "1995-01-13".



## My Takeaways
### Put your product to the test.

Writing good tests is important, but so is really using your product. When I thought I was finished with my Contacts v2.0 work, I started updating our Nylas NodeJS SDK to support the new functionality. This SDK is a NodeJS wrapper for our API which makes integrating the Nylas API into Javascript applications much easier. For the SDK, I had to add functions that enabled it to access the new endpoints, write tests for these functions, and expand the example applications in the SDK to include Contacts v2.0 functionality. 








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


# Jekyll Markdown Quick Reference

<script src="https://gist.github.com/LeNPaul/e4a87bba80cc97045848bae3b6d89aa2.js"></script>

#### Write in simply awesome markdown

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
- **Email Webhooks**
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
