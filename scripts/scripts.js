function EnviaDados() {
    let nome = document.querySelector("#nome").value;
    let email = document.querySelector("#email").value;
    let recebeDados = { nome: nome, email: email };

    dadosCliente = JSON.stringify(recebeDados);

    localStorage.setItem("dadosCliente", dadosCliente);

    alert(`Obrigado ${nome}! Recebemos seus dados.`)
}

function AddCar() {
    let buttoncar = document.querySelector('#buttoncar')
    alert("Adicionado ao carrinho com sucesso!")
}