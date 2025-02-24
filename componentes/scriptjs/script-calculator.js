const botao = document.querySelectorAll(".bt");
let valorBotao = "";
let firstValor = "";
let nextValor = "";
const sinalOperador = document.querySelectorAll('.btn-cal.operador');
let sinal = "";
const errButton = document.querySelectorAll('.err');

document.getElementById("backspace").addEventListener("click", (event) => {
    let tela = document.getElementById("tela");
    let nova = tela.value;
    tela.value = nova.slice(0, -1); // Remove o último caractere
    valorBotao = nova.slice(0, -1);
    //alert("Fui clicado")
})

document.getElementById("clean").addEventListener("click", (event) => {
    tela.value = 0;
    valorBotao = 0;
    //alert("Fui clicado")
})

document.getElementById("clean-e").addEventListener("click", (event) => {
    tela.value = 0;
    valorBotao = 0;
    //alert("Fui clicado")
})

// Adicionar evento de clique de cada botão
botao.forEach(botao => {
    botao.addEventListener("click", (event) => {
        const clicado = event.target; // Identifica o botão clicado 
        //alert(`Você clicou no: ${clicado.value}`);
        if (!([...sinalOperador].some(op => op.value === clicado.value))){
            valorBotao += clicado.value;
            document.getElementById("tela").value = valorBotao;
        }
        
        if ([...sinalOperador].some(op => op.value === clicado.value)) {
            if (firstValor === "") {
                firstValor += valorBotao; 
                // Acumula os valores no firstValor   
            }
                valorBotao = ""; // Reseta o valor temporário
                
            } else if (firstValor !== "") {
                nextValor = valorBotao;
                // alert(nextValor);
        }


        /*if (clicado.value === "="){
            alert("Os valores digitados sao: " + firstValor + " e " + nextValor);
            
        }
        */
    });
});

sinalOperador.forEach(operador => {
    operador.addEventListener("click", (event) => {
        const clicado = event.target;
        let v1 = parseFloat(firstValor) || 0;
        let v2 = parseFloat(nextValor) || 0;
        let result = 0;
        alert(v1);
        switch (clicado.value) {
            case "+":  
                document.getElementById("tela").value = clicado.value;
                sinal = clicado.value;
                result = (v1 + v2);
            break;
            case "-": 
                document.getElementById("tela").value = clicado.value;
                sinal = clicado.value;
            break;
            case "*":
                document.getElementById("tela").value = clicado.value;
                sinal = clicado.value;
            break;
            case "/":
                document.getElementById("tela").value = clicado.value;
                sinal = clicado.value; 
            break;
            case "=": 
                switch (sinal) {
                    case "+":
                        result = v1 + v2;
                        break;
                    case "-":
                        result = v1 - v2;
                        break;
                    case "*":
                        result = v1 * v2;
                        break;
                    case "/":
                        result = v2 !== 0 ? v1 / v2 : "Erro: Divisão por zero"; // Tratamento para divisão por zero
                        break;
                    default:
                        //result = "Operação inválida";
                        document.getElementById("tela").value = "Error";
                }
                //alert("Os valores digitados são: " + firstValor + " " + sinal + " " + nextValor);
                //alert("Resultado: " + result);
                //document.getElementById("tela").value = firstValor + " " + sinal + " " + nextValor + " = " + result;
                document.getElementById("tela").value = result;
                firstValor = "";
                nextValor = "";
            break;
        }
    });
});

errButton.forEach(operador => {
    operador.addEventListener("click", (event) => {
        alert("Em desenvolvimento");
        
    })
})

/* 
let minhaString = "88888888897969870"; // String original
let novaString = minhaString.slice(0, -1); // Remove o último caractere

console.log(novaString); // Resultado: "8888888889796987"

function verificarValor(valor) {
        if (!isNaN(valor) && valor !== '') { 
            // É um número
            const numero = Number(valor);
            if (Number.isInteger(numero)) {
                console.log("O valor é um número inteiro:", numero);
            } else {
                console.log("O valor é um número decimal:", numero);
            }
        } else {
            // Não é um número
            if (/^[a-zA-Z]$/.test(valor)) {
                console.log("O valor é uma letra:", valor);
            } else {
                console.log("O valor é um símbolo ou outro caractere:", valor);
            }
        }
    }*/

/*document.getElementById("change-sign").addEventListener("click", (event) => {
    let tela = document.getElementById("tela");
    let nova = tela.value;

    if ((Number(valorBotao) > 0) && (firstValor == v1)){
        tela.value = '-' + tela.value;
        v1 = v1 * (-1);
        alert(v1);
    } 
    if ((Number(valorBotao) > 0) && (nextValor == v2) && (nextValor != "")){
        tela.value = '-' + tela.value;
        v2 *= -1;
    }
    //alert("Fui clicado");
})*/