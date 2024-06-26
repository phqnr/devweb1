// Função de login ao sistema
function login() {
  // declaração das variáveis capturando o valor informando pelo usuário
  var usuario = document.getElementById('user').value;
  var senha = document.getElementById('senha').value;

  // verificação de usuário e senha
  if (usuario == "admin" && senha == "admin") {
    alert("Login realizado com sucesso!");
    location.href = './assets/html/menu.html';
  } else {
    alert("Usuário ou senha incorretos.");

    // Limpa as informações escritas
    document.getElementById('user').value = '';
    document.getElementById('senha').value = '';
  }
}


// efeito máquina de escrever
function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  textoArray.forEach((letra, i) => {
    setTimeout(() =>
      elemento.innerHTML += letra, 50 * i);
  });
}

const nome = document.querySelector(".descricao");
typeWriter(nome);
//-----------------------------------------------------------
