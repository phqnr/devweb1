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
    marcaLabel.style.fontWeight = 'bold';

    const marcaValue = document.createElement('p'); // Exibe o valor da marca na tag <p>
    marcaValue.appendChild(marcaLabel);
    marcaValue.appendChild(document.createTextNode(veiculo.marca));

    // Modelo
    const modeloLabel = document.createElement('span');
    modeloLabel.textContent = 'Modelo: ';
    modeloLabel.style.fontWeight = 'bold';

    const modeloValue = document.createElement('p'); // Exibe o valor do modelo na tag <p>
    modeloValue.appendChild(modeloLabel);
    modeloValue.appendChild(document.createTextNode(veiculo.modelo));

    // Ano de Fabricação
    const anoFabricacaoLabel = document.createElement('span');
    anoFabricacaoLabel.textContent = 'Ano de Fabricação: ';
    anoFabricacaoLabel.style.fontWeight = 'bold';

    const anoFabricacaoValue = document.createElement('p'); // Exibe o valor do ano de fabricação na tag <p>
    anoFabricacaoValue.appendChild(anoFabricacaoLabel);
    anoFabricacaoValue.appendChild(document.createTextNode(veiculo.anoFabricacao));

    // Cor
    const corLabel = document.createElement('span');
    corLabel.textContent = 'Cor: ';
    corLabel.style.fontWeight = 'bold';

    const corValue = document.createElement('p'); // Exibe o valor da cor na tag <p>
    corValue.appendChild(corLabel);
    corValue.appendChild(document.createTextNode(veiculo.cor));

    // Kilometragem
    const kilometragemLabel = document.createElement('span');
    kilometragemLabel.textContent = 'Kilometragem: ';
    kilometragemLabel.style.fontWeight = 'bold';

    const kilometragemValue = document.createElement('p'); // Exibe o valor da kilometragem na tag <p>
    kilometragemValue.appendChild(kilometragemLabel);
    kilometragemValue.appendChild(document.createTextNode(veiculo.kilometragem));

    // Número de Portas
    const numPortasLabel = document.createElement('span');
    numPortasLabel.textContent = 'Número de Portas: ';
    numPortasLabel.style.fontWeight = 'bold';

    const numPortasValue = document.createElement('p'); // Exibe o valor do número de portas na tag <p>
    numPortasValue.appendChild(numPortasLabel);
    numPortasValue.appendChild(document.createTextNode(veiculo.num_portas));

    // Preço
    const precoLabel = document.createElement('span');
    precoLabel.textContent = 'Preço: ';
    precoLabel.style.fontWeight = 'bold';

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

    listarVeiculos.appendChild(exibirVeiculo); // Exibe a listagem dos cadastros
  });
}

// Chama a função de exibição quando o documento é carregado
document.addEventListener('DOMContentLoaded', exibirVeiculos);

// Função que direciona para o menu inicial 
function menu() {
  alert("Você será direcionado(a) ao Menu Inicial.");
  location.href = './menu.html';
}



// // Função para buscar um contato pelo CPF e exibir no alert
// function buscarContatoPorCPF(cpf) {
//   const contato = cadastros.find(cadastro => cadastro.cpf === cpf); // busca pelo objeto cpf dentro do array de cadastro
//   if (contato) {
//     window.alert(`Contato encontrado:
//     Nome: ${contato.nome}
//     CPF: ${contato.cpf}
//     Data de Nascimento: ${new Date(contato.dataNascimento + 'T00:00:00').toLocaleDateString('pt-BR')}
//     Endereço: ${contato.endereco}`);
//   } else {
//     window.alert('CPF não encontrado!');
//   }
// }


// // Função para buscar via CPF e exibir os dados do contato
// function buscarContato() {
//   const cpfBusca = window.prompt('Por favor, insira o CPF a ser buscado:');
//   if (cpfBusca && cpfBusca.length === 11) { // verifica se um CPF foi inserido e se tem 11 dígitos
//     buscarContatoPorCPF(cpfBusca);
//   } else {
//     window.alert('Por favor, insira um CPF válido com 11 dígitos.');
//   }
// }


// // Função para remover um contato pelo CPF
// function removerContatoPorCPF(cpf) {
//   const indice = cadastros.findIndex(cadastro => cadastro.cpf === cpf); // buscar o valor do objeto cpf e atribui à variável 'indice'
//   if (indice !== -1) { // se o indice for encontrado, será removido na função abaixo .splice()
//     cadastros.splice(indice, 1);
//     window.alert('Contato excluído com sucesso!');
//     exibirContatos(); // atualiza a exibição dos contatos após a remoção
//   } else {
//     window.alert('CPF não encontrado. Tente novamente.');
//   }
// }


// // Função para remover contato e exibir o prompt
// function removerContato() {
//   const cpfRemover = window.prompt('Digite o CPF do contato que deseja remover:');
//   if (cpfRemover && cpfRemover.length === 11) {
//     removerContatoPorCPF(cpfRemover);
//   } else {
//     window.alert('Por favor, insira um CPF válido com 11 dígitos.');
//   }
// }