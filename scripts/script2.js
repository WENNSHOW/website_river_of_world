document.addEventListener('DOMContentLoaded', function() {
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const allowedDomains = ['gmail.com', 'yandex.ru', 'mail.ru'];

document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault(); // предотвращаем отправку формы по умолчанию

  // Получаем значение email из формы
  const emailInput = document.getElementById('email');
  const userEmail = emailInput.value.trim();

  // Проверяем формат email и домен
  if (!emailRegex.test(userEmail)) {
    // Выводим сообщение об ошибке при неверном формате email
    alert('Некорректный формат email. Пожалуйста, введите корректный email.');
    return;
  }

  const domain = userEmail.split('@')[1];
  if (!allowedDomains.includes(domain)) {
    // Выводим сообщение об ошибке при недопустимом домене
    alert('Недопустимый домен. Пожалуйста, используйте один из следующих доменов: ' + allowedDomains.join(', '));
    return;
  }

  // Валидация успешна, отправляем данные на сервер
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwcmc0zJOj6Ucsj3nn_6Pvb0YUynyCEIv42m4Ty9U3i-6vyegLGPxiIkzRNZEH2sQ6R/exec';
  const form = document.forms['submit-to-google-sheet'];

  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      if (response.ok) {
        // Выводим сообщение об отправленном отзыве
        alert('Отзыв отправлен');

        // Перенаправляем на index.html
        window.location.href = 'index.html';
      } else {
        throw new Error('Ошибка при отправке данных на сервер');
      }
    })
    .catch(error => console.error('Error!', error.message));
  });
});
