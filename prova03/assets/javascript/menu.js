// Função para direcionar à tela de cadastro
function cadastrar() {
  alert("Você será direcionado(a) para o Cadastro de Veículos.");
  location.href = './cadastrarVeiculos.html';
}

// Função para direcionar à tela da listagem dos veículos cadastrados
function listar() {
  alert("Você será direcionado(a) para a Listagem dos Veículos cadastrados.");
  location.href = './listarVeiculos.html';
}



// Recupera a string JSON do Local Storage do cadastro dos veículos e converte para vetor novamente
const veiculosArr = JSON.parse(localStorage.getItem('veiculos')) || [];

// Função para buscar o veículo via modelo e exibir os dados do veículo
function buscarVeiculo() {
  const veiculoBusca = window.prompt('Por favor, informe o MODELO do veículo a ser buscado:');
  if (veiculoBusca) { // verifica se existe um veículo com esse modelo cadastrado no array
    buscarVeiculoPorModelo(veiculoBusca);
  } else {
    window.alert('Por favor, informe o modelo de um veículo cadastrado.');
  }
}

// Função para buscar um veículo pelo modelo informado e exibir no alert
function buscarVeiculoPorModelo(modelo) {
  const carro = veiculosArr.find(veiculos => veiculos.modelo === modelo); // busca pelo objeto modelo dentro do array de veiculos
  if (carro) {
    window.alert(`Veículo encontrado: 
    Marca: ${carro.marca}
    Modelo: ${carro.modelo}
    Ano de Fabricação: ${carro.anoFabricacao}
    Cor: ${carro.cor}
    Kilometragem: ${carro.kilometragem}
    Número de Portas: ${carro.num_portas}
    Preço: R$ ${carro.preco}`);
  } else {
    window.alert('Veículo não encontrado!');
  }
}


// Função para buscar e remover um veículo pelo modelo
function removerVeiculoPorModelo(modelo) {
  const indice = veiculosArr.findIndex(veiculo => veiculo.modelo === modelo); // buscar o índice do objeto modelo
  if (indice !== -1) {
    veiculosArr.splice(indice, 1); // remove o elemento do array
    localStorage.setItem('veiculos', JSON.stringify(veiculosArr)); // atualiza o local storage
    alert("Veículo removido com sucesso.");
  } else {
    alert("Veículo não encontrado. Tente novamente.");
  }
}

// Função para remover um veículo pelo modelo informado
function removerVeiculo() {
  const modeloRemover = window.prompt("Informe o MODELO do veículo a ser removido: ");
  if (modeloRemover) {
    removerVeiculoPorModelo(modeloRemover);
  } else {
    alert("Por favor, insira um modelo de veículo cadastrado. Caso não lembre, verifique na listagem dos veículos.");
  }
}

// Função para encerrar o sistema e direcionar o usuário à tela de login
function sair() {
  alert("Programa encerrado!");
  location.href = '/prova03';
}
