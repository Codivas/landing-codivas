const message = {
  201: ["Cadastro feito com sucesso!!!", "success"],
  400: ["Username já cadastro", "warning"],
  500: ["Serviço temporariamente indisponível","danger"],

  getMessage(code) {
    code = code.toString();
    return this[code] || this[500];
  },
};

function showData(event) {
  event.preventDefault();

  let userName = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let name = document.getElementById("username").value;

  const url = "https://proj-83c-codivas.herokuapp.com/users/pre_cadastro/";
  const options = {
    user_name: userName,
    name: name,
    email: email,
  };

  axios
    .post(url, options)
    .then((response) => (printErro(response.status)))
    .catch((e) => {
      let status = e.message;
      printErro(status.replaceAll(/[^0-9]/g, ""));
    });
}

function printErro(code) {
    const [msg, color] = message.getMessage(code)
    document.getElementById("resposta").innerHTML = `
        <div class="alert alert-${color}" role="alert">
        ${msg}
        </div>
`;
}