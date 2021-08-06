// Event Bubling2 / memanfaatkan perilaku event bubling
const container = document.querySelector('.container');
container.addEventListener('click', function(event) {
	if(event.target.className == 'close') {
		event.target.parentElement.style.display = 'none';
		// event.preventDefault(); untuk tag <a>
	}
})