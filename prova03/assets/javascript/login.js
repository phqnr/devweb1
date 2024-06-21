function login() {
  var usuario = document.getElementById('user').value;
  var senha = document.getElementById('senha').value;

  if (usuario == "admin" && senha == "admin") {
    alert("Sucesso!");
    location.href = './assets/html/menu.html';
  } else {
    alert("Usuário ou senha incorretos.");

    // Limpa as informações escritas
    document.getElementById('user').value = '';
    document.getElementById('senha').value = '';
  }
}