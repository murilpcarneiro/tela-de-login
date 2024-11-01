const senha = document.getElementById('senha');
const email = document.getElementById('email');

function login() {
  console.log(senha.value, email.value);
  if (email.value === "pedro@giroto.com" && senha.value === "223344") {
    window.location = "https://www.detran.pa.gov.br/index_.php";
  }
  else if (email.value === "alessandra@chefa.com" && senha.value === "1122") {
    window.location = "https://www.cesupa.br";
  }
  else if (email.value === "isaacjava@java.com" && senha.value === "asdasd") {
    window.location = "https://en.idopterlabs.com.br";
  }
  else {
    document.write("erro");
  }
}