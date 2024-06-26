// Recupera a string JSON do Local Storage do cadastro dos veículos e converte para vetor novamente
const veiculosArr = JSON.parse(localStorage.getItem('veiculos')) || [];

function cadastrar(event) {
  event.preventDefault(); // Evita o envio tradicional do formulário

  // cria o objeto carros para receber os parâmetros informados pelo usuário
  const carros = {
    marca: document.getElementById('marca').value,
    modelo: document.getElementById('modelo').value,
    anoFabricacao: document.getElementById('anoFabricacao').value,
    cor: document.getElementById('cor').value,
    tipo: document.getElementById('tipo').value,
    kilometragem: document.getElementById('kilometragem').value,
    num_portas: document.getElementById('num_portas').value,
    preco: document.getElementById('preco').value,
  };

  // adiciona os dados do novo carro no array
  veiculosArr.push(carros);
  alert("Veículo cadastrado com sucesso!");

  // converte o vetor de veiculos para uma string JSON e armazenar no Local Storage
  localStorage.setItem('veiculos', JSON.stringify(veiculosArr));

  // limpa o formulário para o cadastro de um novo carro
  document.getElementById('formCadastro').reset();

  // direciona o usuário automaticamente para o menu após cadastrar um veículo
  location.href = './menu.html';
}

// realiza o cadastro do veículo quando o o submit é enviado
document.getElementById('formCadastro').addEventListener('submit', cadastrar);