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