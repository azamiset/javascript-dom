// DOM Manipulation
// 2. node manipulation
/*
1. document.createElement()
2. document.createTextNode()
3. node.appendChild()
4. node.insertBefore()
5. parentNode.removeChild()
6. parentNode.replaceChild()
*/
// 2.1 menambahkan node (element) baru ke akhir sebuah element parent
// buat element baru
const pBaru = document.createElement('p');
const textPBaru = document.createTextNode('Paragraf Baru');
// simpan tulisan ke element / tag <p>
pBaru.appendChild(textPBaru);
// simpan pBaru di akhir section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

// 2.2 menambahkan node (element) baru ke awal sebuah element parent
const liBaru = document.createElement('li');
const textLibaru = document.createTextNode('Item Baru');
liBaru.appendChild(textLibaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');
ul.insertBefore(liBaru, li2);

// 2.3 menghapus node (element) dari sebuah element parent
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);
 
// 2.4 mengganti node (element) dari sebuah element parent
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const textH2Baru = document.createTextNode('Judul Baru');

h2Baru.appendChild(textH2Baru);
sectionB.replaceChild(h2Baru, p4);

// 2.5 menandai element yang baru
pBaru.style.backgroundColor = 'lightblue';
liBaru.style.backgroundColor = 'lightblue';
h2Baru.style.backgroundColor = 'lightblue';

// 2.6 Method Baru Node Manipulation
/*
1. parentNode.append()
2. parentNode.prepend()
3. childNode.before()
4. childNode.after()
5. childNode.remove()
6. childNode.replaceWith()
*/