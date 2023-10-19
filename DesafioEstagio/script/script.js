const form = document.querySelector("#form")
const cepinput = document.querySelector("#cep")
const enderecoinput = document.querySelector("#endereco")
const bairroinput = document.querySelector("#bairro")
const municipioinput = document.querySelector("#municipio")
const estadoinput = document.querySelector("#estado")
const forminput = document.querySelectorAll("[data-input]")

// validar input cep
cepinput.addEventListener("keypress", (e) => {
    const onlyNumbers = /[0-9]/;
    const key = String.fromCharCode(e.keyCode);

    //permitindo apenas numeros
    if(!onlyNumbers.test(key)) {
        e.preventDefault();
        return;
    }   
})

//
cepinput.addEventListener("keyup", (e) => {
    const inputValue = e.target.value;

    //checar o tamanho correto do cep
    if(inputValue.length === 8) {
        getaddress(inputValue);
    }
})

const getaddress = async (cep) => { 

    cepinput.blur();

    const apiurl = `https://viacep.com.br/ws/${cep}/json/`

    const response = await fetch(apiurl);

    const data = await response.json();

    enderecoinput.value = data.logradouro;
    municipioinput.value = data.localidade;
    bairroinput.value = data.bairro;
    estadoinput.value = data.uf;

};

// multiplicação automatica dos valores quantidade * valor unitario

function calcular(){
    var valor1 = parseFloat(document.getElementById('qtdestoque').value, 10);
    var valor2 = parseFloat(document.getElementById('valorunitario').value, 10);
    parseFloat(document.getElementById('valortotal').value= valor1 * valor2);
}

function calcular2(){
    var valor3 = parseFloat(document.getElementById('qtdestoque2').value, 10);
    var valor4 = parseFloat(document.getElementById('valorunitario2').value, 10);
    parseFloat(document.getElementById('valortotal2').value= valor3 * valor4);
}

// função de adicionar produto

function addproduto(){
    borderproduto2.style.display='block'
}

//função de excluir produto
function excluirProduto(){
    borderproduto2.style.display='none'
}

function fecharModal(){
    modal.style.display='none'
    fade.style.display='none'

}
function openModal(){
    modal.style.display='block'
    fade.style.display='block'
}