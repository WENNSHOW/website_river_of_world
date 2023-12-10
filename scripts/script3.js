let container = document.getElementById('container');
  toggle = () => {
    container.classList.toggle('sign-in');
    container.classList.toggle('sign-up');
  }

  setTimeout(() => {
    container.classList.add('sign-in');
  }, 200)

  function registerUser() {
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;

    if (!isValidEmail(email)) {
      alert('Пожалуйста, введите корректный адрес электронной почты.');
      return;
    }
    if (username===""){
      alert('Логин не введен.Повторите попытку');
      return;
    }
    if (password ===""){
      {alert('Пароль не введен.Повторите попытку');
      return;}
    }
    if (password !== confirmPassword ) {
      alert('Пароли не совпадают. Пожалуйста, введите одинаковые пароли.');
      return;
    }

    const user = { username, email, password };
    localStorage.setItem('currentUser', JSON.stringify(user));
    alert('Регистрация успешна!');
    window.location.href = 'cards.html';
  }

  function authenticateUser() {
    const username = document.getElementById('signin-username').value;
    const password = document.getElementById('signin-password').value;

    const storedUser = localStorage.getItem('currentUser');

    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user.username === username && user.password === password) {
        alert('Вход успешен!');
        window.location.href = 'cards.html';
      } else {
        alert('Неверные учетные данные.');
      }
    } else {
      alert('Неверные учетные данные.');
    }
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const allowedDomains = ['gmail.com', 'yandex.ru', 'mail.ru'];
    const domain = email.split('@')[1];
    return emailRegex.test(email) && allowedDomains.includes(domain);
  }
