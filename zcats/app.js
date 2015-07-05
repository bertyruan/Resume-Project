//javascript for scrubs
var initialCats = 
	[{
		name: 'cutecat',
		clickCount: 0,
		imageurl: '../images/cutecat.jpg',
		nicknames: [{name: 'Meow'},{name: 'Lucy'},{name: 'Nicy'}]
	},
	{
		name: 'drpepper',
		clickCount: 0,
		imageurl: '../images/drpepper.jpg',
		nicknames: [{name: 'Meow'},{name: 'Lucy'},{name: 'Other Name'}]
	},
	{
		name: 'favicon',
		clickCount: 0,
		imageurl: '../images/favicon.jpg',
		nicknames: [{name: 'Meow'},{name: 'Lucy'},{name: 'Other Name'}]
	},
	{
		name: 'grumpycat',
		clickCount: 0,
		imageurl: '../images/grumpycat.jpg',
		nicknames: [{name: 'Meow'},{name: 'Lucy'},{name: 'Other Name'}]
	},
	{
		name: 'labcoat',
		clickCount: 0,
		imageurl: '../images/labcoat.jpg',
		nicknames: [{name: 'Meow'},{name: 'Lucy'},{name: 'Other Name'}]
	}];

var Cat = function(data){
	var self = this;
	self.clickCount = ko.observable(data.clickCount);
	self.name = ko.observable(data.name);
	self.imgSrc = ko.observable(data.imageurl);
	self.nicknames = ko.observableArray(data.nicknames);

	self.titles = ko.observableArray(['infant','child','apprentice', 'master']);
	self.computeLevel = function() {
		if(self.clickCount() < 10)
			return self.titles()[0];
		else if(self.clickCount() < 25)
			return self.titles()[1];
		else if(self.clickCount() < 75)
			return self.titles()[2];
		return self.titles()[3];
	};

};

var ViewModel = function(){
	var self = this;

	self.catList = ko.observableArray([]);
	initialCats.forEach(function(catItem){
		self.catList.push(new Cat(catItem));
	});
	self.currentCat = ko.observable(self.catList()[1]);
	console.log(self.currentCat);

	self.updateCat = function(){
		self.currentCat(this);
	};
	self.incrementCounter = function() {
		this.clickCount(this.clickCount()+1);
	};
	
}

ko.applyBindings(new ViewModel());