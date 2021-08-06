// DOM Selection Method
// getElementById() = menghasilkan : element
// getElementsByTagName() = menghasilkan : HTMLColection [mirip array / ada indexnya]
// getElementsByClassName() = menghasilkan : HTMLColection [mirip array / ada indexnya]
// querySelector() = menghasilkan : element
// querySelectorAll() = menghasilkan : nodeList [mirip array / ada indexnya]


// 1. getElementByid()
const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = '#ccc';
judul.innerHTML = 'Wandy Azami';

// 2. getElementsByTagName()
const p = document.getElementsByTagName('p');

for (var i = 0; i < p.length; i++) {
	p[i].style.backgroundColor = 'lightblue';
}

const h1 = document.getElementsByTagName('h1')[0];
// console.log(h1.style);
h1.style.fontSize = '50px';

// 3. getElementsByClassName()
const p1 = document.getElementsByClassName('p1');
console.log(p1);
p1[0].innerHTML = 'ini diubah dengan javascript';

// 4. querySelector()
const p4 = document.querySelector('#b p');
p4.style.color = 'green';
p4.style.fontSize = '30px';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'orange';

// 5. querySelectorAll()
const pAll = document.querySelectorAll('p');
for (var i = 0; i < p.length; i++) {
	pAll[i].style.borderRadius = '20px';
}

const sectionB = document.querySelector('section#b');
const p4New = sectionB.getElementsByTagName('p')[0];
p4New.style.backgroundColor = 'yellow';