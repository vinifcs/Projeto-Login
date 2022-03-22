function save() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    if (name && email) {
        document.getElementById("error").innerHTML = "";
        document.getElementById("saved-name").innerHTML = name;
        document.getElementById("saved-email").innerHTML = email;
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
    } else {
        const error = "Preencha todos os dados.";
        document.getElementById("error").innerHTML = error;
    }
}

function init() {
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");
    if (name) {
        document.getElementById("saved-name").innerHTML = name;
    }
    if (email) {
        document.getElementById("saved-email").innerHTML = email;
    }
}

function limpar() {
    console.log("limpando");
}

