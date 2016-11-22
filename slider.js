function init(container) {
	var nextButton = container.querySelector('.right-button');
	var previousButton = container.querySelector('.left-button');
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
}

init(document.querySelector('.slider-wrapper'));
//init(document.querySelector('.slideshow'));