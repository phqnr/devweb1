// Vetor vazio para receber o cadastro dos usuários
let cadastros = [];

// EventListener para manipular o e nvio do formulário
document.getElementById('formulario').addEventListener('submit', function (event) {
  event.preventDefault(); // Impede o envio do formulário para evitar recarregar a página
  cadastrarContato();
});

// Função para cadastrar o contato
function cadastrarContato() {
  const nome = document.getElementById('nome').value;  // a propriedade .value para obter o valor real digitado pelo usuário
  const cpf = document.getElementById('cpf').value;
  const dataNascimento = document.getElementById('dataNascimento').value;
  const endereco = document.getElementById('endereco').value;

  // Verifica se o CPF digitado realmente contém 11 caracteres
  if (cpf.length !== 11) {
    alert('CPF inválido pois não possui 11 dígitos.');
    return;
  }

  // Verifica se para cada objeto 'cadastro.cpf' no array de cadastros é igual ao valor digitado pelo usuário 
  if (cadastros.some(cadastro => cadastro.cpf === cpf)) {
    alert('CPF já cadastrado, tente novamente.');
    return;
  }

  // Cria um objeto com os valores informados pelo usuários e adiciona ao array de cadastros
  const novoCadastro = { nome, cpf, dataNascimento, endereco };
  cadastros.push(novoCadastro);
  alert('Contato salvo com sucesso!');
  limparFormulario();
}

// Função para limpar os dados digitados após enviar as informações de cadastro
function limparFormulario() {
  document.getElementById('nome').value = '';
  document.getElementById('cpf').value = '';
  document.getElementById('dataNascimento').value = '';
  document.getElementById('endereco').value = '';
  document.getElementById('nome').focus();
}



// Função para exibir os contatos cadastrados
function exibirContatos() {
  const cadastroList = document.getElementById('cadastroList');
  cadastroList.innerHTML = ''; // Limpa a lista antes de atualizá-la

  cadastros.forEach(cadastro => {
    const contactContainer = document.createElement('div');
    contactContainer.className = 'exibir-contato';

    const nomeElement = document.createElement('h3');
    nomeElement.className = 'nome-contato';
    nomeElement.textContent = cadastro.nome;

    // Elemento para CPF
    const cpfElement = document.createElement('p');
    const cpfLabel = document.createElement('span');
    cpfLabel.textContent = 'CPF: ';
    cpfLabel.style.fontWeight = 'bold'; // Aplica o negrito apenas à palavra-chave
    cpfElement.appendChild(cpfLabel); // Adiciona a palavra-chave
    cpfElement.appendChild(document.createTextNode(cadastro.cpf)); // Adiciona o valor do CPF

    // Elemento para Data de Nascimento
    const dataNascimentoElement = document.createElement('p');
    const dataNascimentoLabel = document.createElement('span');
    dataNascimentoLabel.textContent = 'Data de Nascimento: ';
    dataNascimentoLabel.style.fontWeight = 'bold'; // Aplica o negrito apenas à palavra-chave
    dataNascimentoElement.appendChild(dataNascimentoLabel); // Adiciona a palavra-chave

    const dataNascimento = new Date(cadastro.dataNascimento + 'T00:00:00');
    const dataFormatada = dataNascimento.toLocaleDateString('pt-BR');
    dataNascimentoElement.appendChild(document.createTextNode(dataFormatada)); // Adiciona o valor da data de nascimento

    // Elemento para Endereço
    const enderecoElement = document.createElement('p');
    const enderecoLabel = document.createElement('span');
    enderecoLabel.textContent = 'Endereço: ';
    enderecoLabel.style.fontWeight = 'bold'; // Aplica o negrito apenas à palavra-chave
    enderecoElement.appendChild(enderecoLabel); // Adiciona a palavra-chave
    enderecoElement.appendChild(document.createTextNode(cadastro.endereco)); // Adiciona o valor do endereço

    contactContainer.appendChild(nomeElement);
    contactContainer.appendChild(cpfElement);
    contactContainer.appendChild(dataNascimentoElement);
    contactContainer.appendChild(enderecoElement);

    cadastroList.appendChild(contactContainer);
  });
}