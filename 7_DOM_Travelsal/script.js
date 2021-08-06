// Event Handling
/*
const close = document.querySelector('.close');
const card = document.querySelector('.card');

close.addEventListener('click', function() {
	card.style.display = 'none';
})
*/

// DOM Traversal
/*
DOM Traversal Method
parentNode = mengembalikan: node
ParentElement = mengembalikan: element
nextSibling = mengembalikan: node
nextElementSibling = mengembalikan: element
previousSibling = mengembalikan: node
previousElementSibling = mengembalikan: element
*/

const close = document.querySelectorAll('.close');
// cara 1

for (let i = 0; i < close.length; i++) {
	close[i].addEventListener('click', function() {
		close[i].parentElement.style.display = 'none';
	})
}
 

// cara 2
/*
for (let i = 0; i < close.length; i++) {
	close[i].addEventListener('click', function(event) {
		event.target.parentElement.style.display = 'none';
	})
}
*/

// cara 3
/*
close.forEach(function(element) {
	element.addEventListener('click', function(event) {
		event.target.parentElement.style.display = 'none';
	})
})
*/