function EnviaDados() {
    let nome = document.querySelector("#nome").value;
    let email = document.querySelector("#email").value;
    let recebeDados = { nome: nome, email: email };

    dadosCliente = JSON.stringify(recebeDados);

    localStorage.setItem("dadosCliente", dadosCliente);

    alert(`Obrigado ${nome}! Recebemos seus dados.`)

    window.location.href = "https://mrkelvinpires.github.io/loja-landing-page-bf/";
}

function AddCar() {
    let buttoncar = document.querySelector('#buttoncar')
    alert("Adicionado ao carrinho com sucesso!")
}