let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

let subTotal= 0;

limparSaldo();

function somarAoSaldo(soma: number) {
 if(campoSaldo){
    subTotal += soma;
    campoSaldo.innerHTML = subTotal.toString();
    limparCampoSoma();
    }
}
function limparCampoSoma(){
    soma.value= "";
}

function limparSaldo() {
    if(campoSaldo){
        subTotal=0;
        campoSaldo.innerHTML = '';
    }
}

botaoAtualizar?.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
});

botaoLimpar?.addEventListener('click', function () {
    limparSaldo();
});