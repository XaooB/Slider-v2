function init(container) {
	var nextButton = container.querySelector('.right-button');
	var previousButton = container.querySelector('.left-button');
	var slider = container.querySelector('.slider');
	var items = container.querySelectorAll('.item');

	nextButton.addEventListener('click',function(e){
	var current = container.querySelector('.item.current')
	var next = container.querySelector(".item.current").nextElementSibling || items[0]
			current.classList.remove('current');
			next.classList.add('current');
	},false)

	previousButton.addEventListener('click',function(e){
	var current = container.querySelector('.item.current')
	var previous = container.querySelector(".item.current").previousElementSibling || items[items.length-1];
			current.classList.remove('current');
			previous.classList.add('current');
	},false)

	var slideshow = false;
	var sh = null;
	slider.addEventListener('click',function(e) {
		if(slideshow) {
			clearInterval(sh)
			slideshow = false;
		}
		else {
			sh = setInterval(function(){
			var current = container.querySelector('.item.current')
			var next = container.querySelector(".item.current").nextElementSibling || items[0]
			current.classList.remove('current');
			next.classList.add('current');
			slideshow = true;
			},3000);
		}
	},false)
}

init(document.querySelector('#main-slider'));
init(document.querySelector('#another-slider'));