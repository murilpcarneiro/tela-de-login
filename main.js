const senha = document.getElementById('senha');
const email = document.getElementById('email');

function login() {
  console.log(senha.value, email.value);
  if (email.value === "admin@cesupa.br" && senha.value === "123123") {
    window.location = "https://www.cesupa.br";
  }
  else if (email.value === "alessandra@chefa.com" && senha.value === "1122") {
    window.location = "https://www.cesupa.br";
  }
  else if (email.value === "isaacjava@oracle.com" && senha.value === "asdasd") {
    window.location = "https://www.cesupa.br";
  }
  else {
    document.write("erro");
  }
}