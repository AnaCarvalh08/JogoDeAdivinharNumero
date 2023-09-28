const numAleatorio = Math.floor(Math.random()*100+1)
//gera um número aleatório entre 0 e 100
//o Math.floor() converte números decimais em inteiros
// o Math.random() gera número de 0 a 0.99 
// o *100 gera um número de 0 a 99.99 mas não geraria o número 100


let numTentativas = 0;
console.log(numTentativas)

document.getElementById('btchegar').addEventListener('click', function(){
    const suposicao = parseInt(document.getElementById("suposicao").value)
    console.log(suposicao)
    numTentativas++; //numTentativas = numTentativas + 1;
    console.log(numTentativas)
    if (suposicao === numAleatorio){
        document.getElementById("mensagem").textContent = "Parabéns, você acertou em " + numTentativas + " tentativas"; // `Parabéns, você acertou em ${numTentativas} tentativas`;
        document.getElementById("mensagem").style.color = 'green';
        this.disabled = true;
    }

    else if(suposicao < numAleatorio){
        document.getElementById("mensagem").textContent = "Tente um número maior"; 
        document.getElementById("mensagem").style.color = 'orange';

    }

    else {
        console.log ("Tente um número menor")
        document.getElementById("mensagem").textContent = "Tente um número menor"
        document.getElementById("mensagem").style.color = 'red';
    }
})

