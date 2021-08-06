// Event Bubling / 2 event dalam satu elemen pembungkus <div>
const close = document.querySelectorAll('.close');


close.forEach(function(element) {
	element.addEventListener('click', function(event) {
		event.target.parentElement.style.display = 'none';
		event.preventDefault();
		event.stopPropagation();
	})
})

const card = document.querySelectorAll('.card');
card.forEach(function(card) {
	card.addEventListener('click', function(element) {
		alert('ok');
	})
})
