var cat_image = document.getElementById('cat');

function meow(text){
	console.log(text);
};

cat_image.addEventListener('click', function(){
	meow('Meow.');}
	);



var feed_button = document.getElementById('feed_me');

feed_button.addEventListener('click', function() {
	feed(30.0);
});

function feed(size) {
	cat_image.style.width = (cat_image.offsetWidth + size)+'px';
}



var starve = setInterval(starving, 100);

function starving() {
    // cat_image.style.width = (cat_image.offsetWidth -1 )+'px';
    feed(-1)
}

// // //

var data_url ='https://raw.githubusercontent.com/IsaKiko/D3-visualising-data/gh-pages/code/nations.json'

d3.json(data_url,function(data){
	//write filter of data returning only countries in 'America'
	//write map of American nations returning most recent life expectancy

	// console.log(data);

	// var some_data = data.slice(0,5);
	// console.log(some_data);

	// // important function
	// var names = some_data.map(function(nation){
	// 	return nation.name
	// })

	// console.log(names);

	// var nums = [1,2,3,4,5];

	// var small_num = numbers.filter(function(number) {
	// 	return number <= 3;
	// })

	// console.log(small_num);
	

});


