const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O ciclo acabou e você precisa decidir qual será seu primeiro grande passo em direção a vida adulta. Qual camiho você escolhe?",
        alternativas: [
            {
                texto: "Ingressar imediatamente na faculdade ou curso técnico para se especializar em sua área",
                afirmacao: "Sua busca por especialização acadêmica te ajudou a construir uma base teórica sólida para sua carreira"
            },
            {
                texto: "Entrar no mercado de trabalho para ganhar experiêriencia prática e independência financeira rápida.",
                afirmacao: " A inserção rápida no mercado de trabalho trouxe maturidade e uma visão prática sobre o mundo corporativo."
            }
        ]
    },
    {
        enunciado: "Você recebeu uma oportunidade de trabalho, mas ela exige que você saia da sua zona de conforto. O que você faz?",
        alternativas: [
            {
                texto: "Aceito a oportunidade e encaro o desafio.",
                afirmacao: "Sua coragem para enfrentar mudanças pode ajudar no seu crescimento pessoal e profissional."
            },
            {
                texto: "Recuso e prefiro continuar em algo que já conheço.",
                afirmacao: " Sua busca por segurança mostra que você valoriza estabilidade antes de assumir novos riscos."
            }
        ]
    },
    {
        enunciado: "Você precisa escolher entre continuar estudando ou começar a trabalhar. Qual caminho você escolheria?",
        alternativas: [
            {
                texto: "Continuar estudando para aumentar minhas oportunidades.",
                afirmacao: "Seu foco na educação  demonstra que você pensa no crescimento e nas oportunidades futuras. "
            },
            {
                texto: "Começar a trabalhar para conquistar minha independência.",
                afirmacao: "Sua iniciativa mostra vontade de conquistar independência e experiência profissional."
            }
        ]
    },
    {
        enunciado: "Você precisa tomar uma decisão importante sobre o futuro, mas sua família pensa diferente de você. O que você faz?",
        alternativas: [
            {
                texto: "Sigo minha própria decisão.",
                afirmacao: "Sua independência mostra confiança para escolher o caminho que acredita ser melhor para você. "
            },
            {
                texto: "Sigo os conselhos da minha família.",
                afirmacao: "Você valoriza a experiência e a opinião das pessoas que fazem parte da sua vida."
            }
        ]
    },
    {
        enunciado: "Você conseguiu seu primeiro salário. Qual seria sua principal atitude?",
        alternativas: [
            {
                texto: "Guardar uma parte do dinheiro.",
                afirmacao: "Sua preocupação com o futuro demonstra responsabilidade financeira."
            },
            {
                texto: "Usar o dinheiro para realizar algo que desejo.",
                afirmacao: "Você valoriza suas conquistas e gosta de aproveitar os resultados do seu esforço."
            }
        ]
    }
];




let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();