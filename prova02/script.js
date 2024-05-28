// Vetor para armazenar os cadastros
let cadastros = [];

// Função para validar o CPF 
function validarCPF(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, mensagem: "CPF deve conter 11 dígitos." };
  }

  // Verifica se o CPF já existe no cadastro
  if (cadastros.some(cadastro => cadastro.cpf === cpf)) {
    return { valido: false, mensagem: "CPF já cadastrado." };
  }

  // Se o CPF é válido e não está cadastrado, retorna verdadeiro
  return { valido: true, mensagem: "CPF válido e não cadastrado." };
}

// Função para adicionar cadastro ao array e exibir na lista
function adicionarCadastro() {
  const nome = document.getElementById('nome');
  const cpf = document.getElementById('cpf');
  const dataNascimento = document.getElementById('dataNascimento');
  const endereco = document.getElementById('endereco');

  if (validarCPF(cpf)) {
    if (!cadastros.some(cadastro => cadastro.cpf === cpf)) {
      const novoCadastro = { nome, cpf, dataNascimento, endereco };
      cadastros.push(novoCadastro);
      // atualizarListaCadastros();
      alert('Contato salvo com sucesso!');
      limparFormulario();
    } else {
      alert('CPF já cadastrado.');
    }
  } else {
    alert('CPF inválido.');
  }
}

// // Função para atualizar a lista de cadastros exibida
// function atualizarListaCadastros() {
//   const cadastroList = document.getElementById('cadastroList');
//   cadastroList.innerHTML = '';
//   cadastros.forEach(cadastro => {
//     const listItem = document.createElement('li');
//     listItem.textContent = `Nome: ${cadastro.nome}, CPF: ${cadastro.cpf}, Data de Nascimento: ${cadastro.dataNascimento}, Endereço: ${cadastro.endereco}`;
//     cadastroList.appendChild(listItem);
//   });
// }

// Função para limpar o formulário após o cadastro
function limparFormulario() {
  document.getElementById('nome').value = '';
  document.getElementById('cpf').value = '';
  document.getElementById('dataNascimento').value = '';
  document.getElementById('endereco').value = '';
  document.getElementById('nome').focus();
}


function exibirCadastrosHTML() {
  const cadastroDetalhes = document.getElementById('cadastroDetalhes');
  cadastroDetalhes.innerHTML = "<h3>Cadastros Cadastrados:</h3>";

  cadastros.forEach(cadastro => {
    const detalhes = document.createElement('p');
    detalhes.textContent = `Nome: ${cadastro.nome}, CPF: ${cadastro.cpf}, Data de Nascimento: ${cadastro.dataNascimento}, Endereço: ${cadastro.endereco}`;
    cadastroDetalhes.appendChild(detalhes);
  });
}
