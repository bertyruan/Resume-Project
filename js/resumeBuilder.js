/*
author: Berty Ruan
files: resumeBuilder.js
date: June 20, 2015
*/

//JSON template for resume content

var bio = {
	"name": "Berty Ruan",
	"role": "Penn State Student",
	"welcomeMessage": ":)", //that's a happy face :D
	"contacts": {
		"mobile": "412.337.9148",
		"email": "berty.ruan@gmail.com",
		"github": "bertyruan"
	},
	"interests": ["fitness", "yoga", "web development", "analyzing data/data mining", "urban development",
					"K12 education", "community engagement", "Christianity"],
	"bioPic": "images/NA"
};

var work = {
	"jobs" : [
	 {
		"employer": "BNY Mellon",
		"title": "Summer Associate",
		"location": "Pittsburgh, PA",
		"dates": "May 2015 - August 2015",
		"description": "blahblahblahblah"
	 },
	 {
	 	"employer": "Measure Education",
		"title": "Software Engineer",
		"location": "State College, PA",
		"dates": "October 2013 - May 2014",
		"description": "blahblahblahblah"
	 }] 
};

var projects = {
	"projects": [
	 {
	 	"title": "Ajax-Project",
	 	"dates": "6/13/2015 - 6/20/2015",
	 	"description": "blahblahblahblah",
	 	"images": ["images/NA", "images/NA"]
	 },
	 {
	 	"title": "DAV3I",
	 	"dates": "January 2015 - May 2015",
	 	"description": "blahblahblahblah",
	 	"images": ["images/NA", "images/NA"]
	 }]
};

var education = {
	"schools": [
	 {
	 	"name": "The Pennsylvania State University",
	 	"location": "State College, PA",
	 	"degree": "Bachelor of Science",
	 	"majors": ["Computer Science"],
	 	"dates": "August 2013 - May 2017",
	 	"url": "www.psu.edu"
	 }],
	"onlineCourse": [
	 {
		"title": "Introduction to AJAX",
		"school": "Udacity",
		"dates": "6/13/2015 - 6/20/2015",
		"url": "https://www.udacity.com/course/intro-to-ajax--ud110"
	 }]
};