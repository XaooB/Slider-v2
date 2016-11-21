function init(container) {
	var nextButton = container.querySelector('.right-button');
	var previousButton = container.querySelector('.left-button');

	nextButton.addEventListener('click',function(e){
		console.log(e.target);
	},false)

	previousButton.addEventListener('click',function(e){
		console.log(e.target);
	},false)
}


init(document.querySelector('.slider-wrapper'));