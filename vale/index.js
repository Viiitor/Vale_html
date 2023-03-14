

function transferData() {
  const numero = document.getElementById("numero").value;
  const valor = document.getElementById("valor").value;
  const nome = document.getElementById("nome").value;
  const cpf = document.getElementById("cpf").value;
  const cidade = document.getElementById("cidade").value;
  const data = document.getElementById("data").value;

  if (!validateCPF(cpf)) {
    alert("CPF inválido");
    return;
  }

  document.getElementById("numero_vale").innerHTML = numero;
  document.getElementById("valor_vale").innerHTML = valor;
  document.getElementById("nome_vale").innerHTML = nome;
  document.getElementById("cpf_vale").innerHTML = cpf;
  document.getElementById("cidade_vale").innerHTML = cidade;
  document.getElementById("data_vale").innerHTML = data;
}

  

  
