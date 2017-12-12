let app = function () {

  const cat = {
  name: 'Lucifer',
  favourite food: 'Cat nip'
  };


  const section = document.createElement('section');
  section.classList.add('cat');

  const li = document.createElement('li');
  li.innerText = "Lucifer ";

  const li = document.createElement('li');
  li.innerText = "Cat nip";

  li.appendChild(li);
  section.appendChild(li);

  const cats = document.querySelector('#cats');
  cats.appendChild()


};

document.addEventListener('DOMContentLoaded', app);
