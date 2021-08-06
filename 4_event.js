// EVENT
/*
cara mendengarkan / membuat event
1. Event handler
  - inline HTML attribute
  - element Method
2. addEventListener()
*/

// Event Handler
// 1.1 inline HTML atribute - menambahkan attibut onclick pada element HTML dan menuliskan function javascript pada valuenya
const p3 = document.querySelector('.p3');

function ubahWarna() {
	p3.style.backgroundColor = 'lightblue';
}

// 1.2 element method - lansung gunakan method onclick pada javascript
function warnaP2() {
	p2.style.backgroundColor = 'lightblue';
}

const p2 = document.querySelector('.p2');
p2.onclick = warnaP2;

// addEventListener()
const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function() {
		const ul = document.querySelector('section#b ul');
		const liBaru = document.createElement('li');
		const textLiBaru = document.createTextNode('item baru');

		liBaru.appendChild(textLiBaru);
		ul.appendChild(liBaru);
});

// Daftar Event
/*
- Mouse Event (click | dblclick | mouseover | mouseenter | mosuseup | mouseleave | wheel | ...)
- Keyboard Evet (keydown | keypress | keyup)
- Resouces event
- Focus Event
- View Event (resize | scroll)
- Form Event (reset | submit)
- CSS Animation & Transition Event
- Drag N Drop Event
- dll.
*/