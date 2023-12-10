document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.nav').classList.toggle('open');
});

// Получаем все ссылки-якори в меню
const menuLinks = document.querySelectorAll('.nav a');

// Добавляем слушатели событий к каждой ссылке-якорю
menuLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        // Закрываем бургер-меню
        document.querySelector('.burger').classList.remove('active');
        document.querySelector('.nav').classList.remove('open');
    });
});

document.addEventListener('click', function (event) {
console.log(event.target.parentElement.parentElement);
if (event.target.parentElement.parentElement.matches('.gallery-image__preview')) {
  event.target.parentElement.parentElement.classList.remove('gallery-image__preview');
  event.target.parentElement.parentElement.scrollIntoView();
} else if (event.target.matches('.gallery-image__media')) {
  // Remove any existing preview classes
  var previewing = document.getElementsByClassName('gallery-image__preview');
  for (el of previewing) {
    el.classList.remove('gallery-image__preview');
  }
  // Preview the clicked figure
  event.target.parentElement.parentElement.classList.add('gallery-image__preview');
  event.target.parentElement.parentElement.scrollIntoView();
  }
}, false);
