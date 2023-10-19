const formulario = document.querySelector('#cadastroFornecedor');
const btnsalvar = document.querySelector('#salvarFornecedor');


// botao salvar fornecedor em JSON no console
const salvarfornecedor = (event) => {
   
    event.preventDefault();

    const dados = new FormData(event.target);

    const dadoscompletos = Object.fromEntries(dados.entries());
    console.log(JSON.stringify(dadoscompletos))
}

formulario.addEventListener('submit', salvarfornecedor)

