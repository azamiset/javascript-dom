// DOM Manipulation Method
// 1. manipulasi Element
// element.innerHTML
// element.style.<property>
// element.setAttribute()
// element.classList
// 2. manipulasi Node



// 1.1 element.innerHTML
// const judul = document.getElementById('judul');
// judul.innerHTML = '<em>Wandy Azami</em>';

// 1.2 element.style.<property>
// const judul = document.querySelector('h1')
// judul.style.color = 'lightblue';
// judul.style.backgroundColor = 'red';

// 1.3 element.setAttribute()
// const judul = document.getElementsByTagName('h1')[0];
// judul.setAttribute('name', 'wandy');

// const a = document.querySelector('section a');
// a.setAttribute('id', 'link');
// console.log(a.getAttribute('id'));
// console.log(a.getAttribute('href'));


// 1.4 element.classList
const p2 = document.querySelector('.p2');

// 1.4.1 untuk menambahkan kelas pada element
p2.classList.add('label');

// 1.4.2 untuk menghapus kelas pada element
p2.classList.remove('label');

// 1.4.3 untuk menambahkan / menghapus kelas secara otomatis
p2.classList.toggle('label');

// 1.4.3 untuk mengetahui kelas apa yang ada pada urutan ke
p2.classList.item('2');

// 1.4.3 untuk mengetahui kelas sesuai nama yang diminta
p2.classList.contains('label');

// 1.4.3 untuk mengganti nama kelas dengan nama yang baru
p2.classList.replace('label', 'lukis');



// manipulasi body
document.body.style.backgroundColor = 'lightblue';
