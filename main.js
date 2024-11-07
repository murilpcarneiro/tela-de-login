const senha = document.getElementById('senha');
const email = document.getElementById('email');
const erroEmail = document.getElementById('erro-email');
const erroSenha = document.getElementById('erro-senha');

function login() {
  console.log(`Email: ${email.value} Senha: ${senha.value}`);
  if (email.value === "" && senha.value === "") {
    erroEmail.innerHTML = "Preencha o campo email";
    erroSenha.innerHTML = "Preencha o campo senha";
  }
  else if (email.value === "") {
    erroEmail.innerHTML = "Preencha o campo email";
    erroSenha.innerHTML = "";
  }
  else if (senha.value === "") {
    erroEmail.innerHTML = "";
    erroSenha.innerHTML = "Preencha o campo senha";
  }
  else if (email.value === "pedro@giroto.com" && senha.value === "223344") {
    window.location = "https://www.detran.pa.gov.br/index_.php";
  }
  else if (email.value !== "pedro@girotto.com" && senha.value === "223344") {
    erroEmail.innerHTML = "Email incorreto";
  }
  else if (email.value === "pedro@giroto.com" && senha.value !== "223344") {
    erroSenha.innerHTML = "Senha incorreta";
  }
  else if (email.value === "ale@cesupa.br" && senha.value === "123123") {
    window.location = "https://www.cesupa.br";
  }
  else if (email.value !== "ale@cesupa.br" && senha.value === "123123") {
    erroEmail.innerHTML = "Email incorreto";
  }
  else if (email.value === "ale@cesupa.br" && senha.value !== "123123") {
    erroSenha.innerHTML = "Senha incorreta";
  }
  else if (email.value === "isaacjava@java.com" && senha.value === "asdasd") {
    window.location = "https://en.idopterlabs.com.br";
  }
  else if (email.value !== "isaac@java.com" && senha.value === "asdasd") {
    erroEmail.innerHTML = "Email incorreto";
  }
  else if (email.value === "isaac@java.com" && senha.value !== "asdasd") {
    erroSenha.innerHTML = "Senha incorreta";
  }
  else {
    erroEmail.innerHTML = "Email incorreto";
    erroSenha.innerHTML = "Senha incorreta";
  }
}