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

function likePost(container) {
  const likeCount = container.querySelector('.like-count');
  const currentCount = parseInt(likeCount.textContent);
  const isLiked = container.classList.contains('liked');

  if (isLiked) {
    likeCount.textContent = currentCount - 1;
  } else {
    likeCount.textContent = currentCount + 1;
  }

  container.classList.toggle('liked');
}

document.getElementById('notifications').addEventListener('click', function() {
 var notificationList = document.querySelector('.notification-count');
 if (notificationList.style.display != 'none') {
   notificationList.style.display = 'none';
 }
});
