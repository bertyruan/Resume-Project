/*
author: Berty Ruan
file: js/blogIndexBuilder.js
date: June 21, 2015
*/

var c = document.querySelector("canvas");
var ctx = c.getContext("2d"); //ctx stands for context
var drawMe = { 
	fill: function(){ctx.fill();},
	stroke: function(){ctx.fill();},
}

ctx.fillRect(100,100,100,100);
ctx.strokeRect(50,50,50,50);
ctx.strokeRect(75,75,50,50);

$.each(drawMe, function(index, element){
	ctx.beginPath();
	ctx.lineTo(50,50);
	if(index === "fill")
	{
		ctx.lineTo(50,10);
	}
	else
	{
		ctx.lineTo(10,50);
	}
	ctx.lineTo(10,10);
	element;
	drawMe[index]();
});

