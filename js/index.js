
const cofre1 = document.getElementById("cofre1");
const cofre2 = document.getElementById("cofre2");
const cofre3 = document.getElementById("cofre3");

const mensagem = document.getElementById("mensagem");
const totalTentativasSpan = document.getElementById("totaltentativas");
const totalVitoriasSpan = document.getElementById("totalvitorias");
const BotaoTenteNovamente = document.getElementById("botaotentenovamente");

// Variáveis do jogo
let cofrePremiado = 0;
let tentativas = 0;
let vitorias = 0;

// sortear o cofre premiado (1 a 3)
function sortearCofre() {
    return Math.floor(Math.random() * 3) + 1;
}

// Inicia a primeira rodada
cofrePremiado = sortearCofre();

// Função que processa a escolha 
function verificarEscolha(numeroCofre) {
    tentativas++;
    totalTentativasSpan.textContent = tentativas;

    // Compara o cofre escolhido com o premiado
    if (numeroCofre === cofrePremiado) {
        vitorias++;
        totalVitoriasSpan.textContent = vitorias;
        mensagem.textContent = `🎉 Você abriu o cofre ${numeroCofre} e encontrou o prêmio!`;
    } else {
        mensagem.textContent = `❌ Você abriu o cofre ${numeroCofre}... Ele está vazio! O prêmio estava no cofre ${cofrePremiado}.`;
    }

    // Bloqueia novos cliques até a próxima rodada
    bloquearCofres(true);
}

// Função para ativar/desativar botões dos cofres
function bloquearCofres(bloquear) {
    cofre1.disabled = bloquear;
    cofre2.disabled = bloquear;
    cofre3.disabled = bloquear;
}

// eventos de clique para cada cofre
cofre1.addEventListener("click", function() {
    verificarEscolha(1);
});

cofre2.addEventListener("click", function() {
    verificarEscolha(2);
});

cofre3.addEventListener("click", function() {
    verificarEscolha(3);
});

// Implementação do "Jogar Novamente"
botaotentenovamente.addEventListener("click", function() {
    // Sorteia um novo cofre premiado
    cofrePremiado = sortearCofre();
    
    // Reseta a mensagem
    mensagem.textContent = "Escolha um cofre!";
    
    // Habilita novamente os três cofres
    bloquearCofres(false);
});