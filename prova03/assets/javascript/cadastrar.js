// Recupera a string JSON do Local Storage do cadastro dos veículos e converte para vetor novamente
const veiculosArr = JSON.parse(localStorage.getItem('veiculos')) || [];

// const veiculos = [];

function cadastrar(event) {
  event.preventDefault(); // Evita o envio tradicional do formulário

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
  location.href = './menu.html';
}

document.getElementById('formCadastro').addEventListener('submit', cadastrar);