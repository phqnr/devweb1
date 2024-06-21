document.addEventListener("DOMContentLoaded", function () {
  document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    const username = document.getElementById('user').value;
    const password = document.getElementById('senha').value;

    // Suponha que as credenciais válidas sejam 'admin' e '1234'
    const validUsername = 'admin';
    const validPassword = '1234';

    if (username === validUsername && password === validPassword) {
      // Credenciais corretas, redireciona para a página de menu
      window.location.href = './assets/html/menu.html';
    } else {
      // Credenciais incorretas, exibe um alerta
      const msgError = document.getElementById('msgError');
      if (msgError) {
        msgError.textContent = 'Usuário ou senha incorretos.';
        msgError.style.color = 'red';
      } else {
        alert('Usuário ou senha incorretos.'); // Fallback para alerta se #msgError não for encontrado
      }
    }
  });
});

// document.getElementById('loginForm').addEventListener('submit', login);