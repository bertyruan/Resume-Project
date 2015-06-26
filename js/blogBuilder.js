/*
author: Berty Ruan
file: js/blogIndexBuilder.js
date: June 21, 2015
info: json format for my blog content. Mimicing server call backs and javascript code that I'm playing around with and learning
This section was the most tedious to code. Although it's only 10 lines long haha...
*/




$.each(blogs, function(index, element){

	$.each(element, function(index, data){
		var HTMLblogSection_r = HTMLblogSection;

		HTMLblogSection_r = HTMLblogSection_r.replace("%data1%", data.title);
			console.log(HTMLblogSection_r);
		HTMLblogSection_r = HTMLblogSection_r.replace("%data2%", data.created);
			console.log(HTMLblogSection_r);
		HTMLblogSection_r = HTMLblogSection_r.replace("%data3%", data.content);
			console.log(HTMLblogSection_r);
		$("#blogs").append(HTMLblogSection_r);
		console.log(HTMLblogSection_r);
console.log(HTMLblogSection);

	});



})





