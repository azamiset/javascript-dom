// Prevent Default / menghentikan  event default element tag <a>
const close = document.querySelectorAll('.close');


close.forEach(function(element) {
	element.addEventListener('click', function(event) {
		event.target.parentElement.style.display = 'none';
		event.preventDefault();
	})
})
