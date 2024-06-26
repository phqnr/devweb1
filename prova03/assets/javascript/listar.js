// Recupera a string JSON do Local Storage do cadastro dos veículos e converte para vetor novamente
const veiculosArr = JSON.parse(localStorage.getItem('veiculos')) || [];
console.log(veiculosArr);

// Função para exibir os veículos cadastrados
function exibirVeiculos() {
  const listarVeiculos = document.getElementById('listarVeiculos');
  listarVeiculos.innerHTML = ''; // Limpa a lista antes de atualizá-la

  // Vetor de veículos
  veiculosArr.forEach(veiculo => {
    const exibirVeiculo = document.createElement('div'); // Cria uma div para exibir os veículos cadastrados
    exibirVeiculo.className = 'exibir_veiculo'; // Utiliza a classe .exibir_veiculo para customizações

    // Marca
    const marcaLabel = document.createElement('span');
    marcaLabel.textContent = 'Marca: ';

    const marcaValue = document.createElement('p'); // Exibe o valor da marca na tag <p>
    marcaValue.appendChild(marcaLabel);
    marcaValue.appendChild(document.createTextNode(veiculo.marca));

    // Modelo
    const modeloLabel = document.createElement('span');
    modeloLabel.textContent = 'Modelo: ';

    const modeloValue = document.createElement('p'); // Exibe o valor do modelo na tag <p>
    modeloValue.appendChild(modeloLabel);
    modeloValue.appendChild(document.createTextNode(veiculo.modelo));

    // Ano de Fabricação
    const anoFabricacaoLabel = document.createElement('span');
    anoFabricacaoLabel.textContent = 'Ano de Fabricação: ';

    const anoFabricacaoValue = document.createElement('p'); // Exibe o valor do ano de fabricação na tag <p>
    anoFabricacaoValue.appendChild(anoFabricacaoLabel);
    anoFabricacaoValue.appendChild(document.createTextNode(veiculo.anoFabricacao));

    // Cor
    const corLabel = document.createElement('span');
    corLabel.textContent = 'Cor: ';

    const corValue = document.createElement('p'); // Exibe o valor da cor na tag <p>
    corValue.appendChild(corLabel);
    corValue.appendChild(document.createTextNode(veiculo.cor));

    // Kilometragem
    const kilometragemLabel = document.createElement('span');
    kilometragemLabel.textContent = 'Kilometragem: ';

    const kilometragemValue = document.createElement('p'); // Exibe o valor da kilometragem na tag <p>
    kilometragemValue.appendChild(kilometragemLabel);
    kilometragemValue.appendChild(document.createTextNode(veiculo.kilometragem));

    // Número de Portas
    const numPortasLabel = document.createElement('span');
    numPortasLabel.textContent = 'Número de Portas: ';

    const numPortasValue = document.createElement('p'); // Exibe o valor do número de portas na tag <p>
    numPortasValue.appendChild(numPortasLabel);
    numPortasValue.appendChild(document.createTextNode(veiculo.num_portas));

    // Preço
    const precoLabel = document.createElement('span');
    precoLabel.textContent = 'Preço: R$ ';

    const precoValue = document.createElement('p'); // Exibe o valor do preço na tag <p>
    precoValue.appendChild(precoLabel);
    precoValue.appendChild(document.createTextNode(veiculo.preco));

    // Manipulação dos elementos DOM
    exibirVeiculo.appendChild(marcaValue);
    exibirVeiculo.appendChild(modeloValue);
    exibirVeiculo.appendChild(anoFabricacaoValue);
    exibirVeiculo.appendChild(corValue);
    exibirVeiculo.appendChild(kilometragemValue);
    exibirVeiculo.appendChild(numPortasValue);
    exibirVeiculo.appendChild(precoValue);

    listarVeiculos.appendChild(exibirVeiculo); // Exibe a listagem dos veículos cadastrados
  });
}

// Chama a função de exibição quando o documento é carregado
document.addEventListener('DOMContentLoaded', exibirVeiculos);

// Função que direciona para o menu inicial 
function menu() {
  alert("Você será direcionado(a) ao Menu Inicial.");
  location.href = './menu.html';
}