// Vetor vazio para receber o cadastro dos usuários
let cadastros = [];


// EventListener para manipular o envio do formulário
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
    window.alert('CPF inválido pois não possui 11 dígitos.');
    return;
  }

  // Verifica se para cada objeto 'cadastro.cpf' no array de cadastros é igual ao valor digitado pelo usuário 
  if (cadastros.some(cadastro => cadastro.cpf === cpf)) {
    window.alert('CPF já cadastrado, tente novamente.');
    return;
  }

  // Cria um objeto com os valores informados pelo usuários e adiciona ao array de cadastros[]
  const novoCadastro = { nome, cpf, dataNascimento, endereco };
  cadastros.push(novoCadastro);
  window.alert('Contato salvo com sucesso!');
  limparFormulario();
}


// Função para limpar os dados digitados após enviar as informações de cadastro do contato
function limparFormulario() {
  document.getElementById('nome').value = '';
  document.getElementById('cpf').value = '';
  document.getElementById('dataNascimento').value = '';
  document.getElementById('endereco').value = '';
  document.getElementById('nome').focus(); // direciona o cursor para o input com id=nome para o cadastro de um novo usuário
}


// Função para exibir os contatos cadastrados
function exibirContatos() {
  const listarCadastros = document.getElementById('listarCadastros');
  listarCadastros.innerHTML = ''; // Limpa a lista antes de atualizá-la

  // vetor de cadastros
  cadastros.forEach(cadastro => {
    const exibirContato = document.createElement('div'); // cria uma div para exibir os contatos cadastrados
    exibirContato.className = 'exibir-contato'; // utiliza a classe .exibir-contato para gerar a div acima com essas customizações

    // exibe o nome do contato
    const nomeContato = document.createElement('h3'); // exibe o nome do contato cadastrado com uma h3
    nomeContato.className = 'nome-contato';
    nomeContato.textContent = cadastro.nome;

    // exibe o elemento CPF
    const cpfLabel = document.createElement('span'); // exibe o label CPF na tag <span> para poder tornar negrito somente esse texto
    cpfLabel.textContent = 'CPF: ';
    cpfLabel.style.fontWeight = 'bold';

    const cpfContato = document.createElement('p'); // exibe o valor do CPF na tag <p>
    cpfContato.appendChild(cpfLabel);
    cpfContato.appendChild(document.createTextNode(cadastro.cpf)); // adiciona o valor do CPF


    // exibe o elemento data de nascimento
    const dataNascimentoLabel = document.createElement('span');
    dataNascimentoLabel.textContent = 'Data de Nascimento: ';
    dataNascimentoLabel.style.fontWeight = 'bold';

    const dataNascimentoContato = document.createElement('p');
    dataNascimentoContato.appendChild(dataNascimentoLabel);


    const dataNascimento = new Date(cadastro.dataNascimento + 'T00:00:00');   // cria um novo objeto Data e considera o dia digitado
    const dataFormatada = dataNascimento.toLocaleDateString('pt-BR');   // define a formatação pt-BR
    dataNascimentoContato.appendChild(document.createTextNode(dataFormatada));  // adiciona o valor da data de nascimento


    // exibe o elemento endereço
    const enderecoLabel = document.createElement('span');
    enderecoLabel.textContent = 'Endereço: ';
    enderecoLabel.style.fontWeight = 'bold';

    const enderecoContato = document.createElement('p');
    enderecoContato.appendChild(enderecoLabel);
    enderecoContato.appendChild(document.createTextNode(cadastro.endereco)); // adiciona o valor do endereço


    // manipulação dos elementos DOM
    exibirContato.appendChild(nomeContato);
    exibirContato.appendChild(cpfContato);
    exibirContato.appendChild(dataNascimentoContato);
    exibirContato.appendChild(enderecoContato);

    listarCadastros.appendChild(exibirContato); // exibe a listagem dos cadastros
  });
}


// Função para buscar um contato pelo CPF e exibir no alert
function buscarContatoPorCPF(cpf) {
  const contato = cadastros.find(cadastro => cadastro.cpf === cpf); // busca pelo objeto cpf dentro do array de cadastro
  if (contato) {
    window.alert(`Contato encontrado: 
    Nome: ${contato.nome}
    CPF: ${contato.cpf}
    Data de Nascimento: ${new Date(contato.dataNascimento + 'T00:00:00').toLocaleDateString('pt-BR')}
    Endereço: ${contato.endereco}`);
  } else {
    window.alert('CPF não encontrado!');
  }
}


// Função para buscar via CPF e exibir os dados do contato
function buscarContato() {
  const cpfBusca = window.prompt('Por favor, insira o CPF a ser buscado:');
  if (cpfBusca && cpfBusca.length === 11) { // verifica se um CPF foi inserido e se tem 11 dígitos
    buscarContatoPorCPF(cpfBusca);
  } else {
    window.alert('Por favor, insira um CPF válido com 11 dígitos.');
  }
}


// Função para remover um contato pelo CPF
function removerContatoPorCPF(cpf) {
  const indice = cadastros.findIndex(cadastro => cadastro.cpf === cpf); // buscar o valor do objeto cpf e atribui à variável 'indice'
  if (indice !== -1) { // se o indice for encontrado, será removido na função abaixo .splice()
    cadastros.splice(indice, 1);
    window.alert('Contato excluído com sucesso!');
    exibirContatos(); // atualiza a exibição dos contatos após a remoção
  } else {
    window.alert('CPF não encontrado. Tente novamente.');
  }
}


// Função para remover contato e exibir o prompt
function removerContato() {
  const cpfRemover = window.prompt('Digite o CPF do contato que deseja remover:');
  if (cpfRemover && cpfRemover.length === 11) {
    removerContatoPorCPF(cpfRemover);
  } else {
    window.alert('Por favor, insira um CPF válido com 11 dígitos.');
  }
}