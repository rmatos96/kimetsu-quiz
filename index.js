const perguntas = [
    
        {
            pergunta: "Qual é o nome completo do protagonista de Kimetsu no Yaiba?",
            respostas: ["Tanjiro Kamado", "Zenitsu Agatsuma", "Inosuke Hashibira"],
            correta: 0
        },
        {
            pergunta: "Qual é o nome da irmã mais nova de Tanjiro Kamado?",
            respostas: ["Nezuko Kamado", "Kanao Tsuyuri", "Shinobu Kocho"],
            correta: 0
        },
        {
            "pergunta": "Quem é o Hashira do Som em 'Demon Slayer'?",
            "respostas": ["Tengen Uzui", "Gyomei Himejima", "Shinobu Kocho"],
            "correta": 0
        },
        {
            pergunta: "Qual é o nome da respiração ancestral que Tanjiro utiliza?",
            respostas: ["Respiração da Água", "Respiração do Fogo", "Respiração do Trovão"],
            correta: 0
        },
        {
            pergunta: "Quem é o Hashira da Serpente em 'Demon Slayer'?",
            respostas: ["Obanai Iguro", "Gyomei Himejima", "Muzan Kibutsuji"],
            correta: 0
        },
        {
            pergunta: "Qual é o objetivo principal de Tanjiro na história?",
            respostas: ["Tornar-se o Hashira mais forte", "Vingar a morte de sua família", "Curar Nezuko"],
            correta: 2
        },
        {
            pergunta: "Como é chamada a organização responsável por caçar demônios em 'Demon Slayer'?",
            respostas: ["Clã Uchiha", "Corpo de Caçadores de Demônios", "Tropa de Exploração"],
            correta: 1
        },
        {
            pergunta: "Qual é o nome do demônio que matou a família de Tanjiro?",
            respostas: ["Rui", "Muzan Kibutsuji", "Kokushibo"],
            correta: 1
        },
        {
            pergunta: "Quem é o Hashira do Fogo, vulgo personagem mais subestimado e forte em 'Demon Slayer'?",
            respostas: ["Kyojuro Rengoku", "Tengen Uzui", "Sanemi Shinazugawa"],
            correta: 0
        },
        {
            "pergunta": "Qual é o nome do estilo de luta de Inosuke Hashibira?",
            "respostas": ["Respiração do Vento", "Respiração do Trovão", "Respiração da Besta"],
            "correta": 2
        },
    
    
    // {
    //     pergunta: "Qual é o nome completo do protagonista de Kimetsu no Yaiba?",
    //     respostas: [
    //         "Tanjiro Kamado",
    //         "Zenitsu Agatsuma",
    //         "Inosuke Hashibira"
    //     ],
    //     correta: 0
    // },
    // {
    //     pergunta: "Qual é o nome da irmã mais nova de Tanjiro?",
    //     respostas: [
    //         "Kanae",
    //         "Nezuko",
    //         "Shinobu"
    //     ],
    //     correta: 1
    // },
    // {
    //     pergunta: "Qual é o estilo de respiração de Zenitsu?",
    //     respostas: [
    //         "Estilo da Água",
    //         "Estilo do Trovão",
    //         "Estilo do Fogo"
    //     ],
    //     correta: 1
    // },
    // {
    //     pergunta: "Quem é o Hashira das Serpentes?",
    //     respostas: [
    //         "Obanai Iguro",
    //         "Kanao Tsuyuri",
    //         "Mitsuri Kanroji"
    //     ],
    //     correta: 0
    // },
    // {
    //     pergunta: "Qual é o nome do grupo de vilões liderados por Muzan Kibutsuji?",
    //     respostas: [
    //         "Hashira",
    //         "Oni",
    //         "Lua Crescente"
    //     ],
    //     correta: 2
    // },
    // {
    //     pergunta: "Qual é o nome do irmão mais novo do Hashira do vento, Sanemi?",
    //     respostas: [
    //         "Genya Shinazugawa",
    //         "Tengen Uzui",
    //         "Kanao Tsuyuri"
    //     ],
    //     correta: 0
    // },
    // {
    //     pergunta: "Qual é o nome do espírito de Nezuko?",
    //     respostas: [
    //         "Tamayo",
    //         "Yushiro",
    //         "Kibutsuji Muzan"
    //     ],
    //     correta: 1
    // },
    // {
    //     pergunta: "Qual é o objetivo principal de Tanjiro no início da série?",
    //     respostas: [
    //         "Tornar-se o Hashira das Chamas",
    //         "Encontrar uma cura para a transformação de Nezuko",
    //         "Derrotar Muzan Kibutsuji"
    //     ],
    //     correta: 1
    // },
    // {
    //     pergunta: "Quem é o mestre de Tanjiro?",
    //     respostas: [
    //         "Sakonji Urokodaki",
    //         "Tomioka Giyu",
    //         "Sanemi Shinazugawa"
    //     ],
    //     correta: 0
    // },
    // {
    //     pergunta: "Qual é a habilidade especial de Inosuke?",
    //     respostas: [
    //         "Comunicação com os animais",
    //         "Sentidos aguçados",
    //         "Transformação em besta"
    //     ],
    //     correta: 2
    // }
];


const quiz = document.querySelector('#quiz');
const template = document.querySelector('template');
 // APPENDCHILD = COLOCAR UM FILHO

 const corretas = new Set()
 const totalDePerguntas = perguntas.length
 const mostrarTotal = document.querySelector('#acertos span')
 

for(const item of perguntas){
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for(const resposta of item.respostas){
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item)) // DIFERENCIAR CADA INPUT COM SUA RESPOSTA
        dt.querySelector('input').value = item.respostas.indexOf(resposta) // ADICIONAR A RESPOSTA A CADA INPUT

         dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta
            if(!estaCorreta){
                abrirModalErro()
            }
            corretas.delete(item)
            if(estaCorreta) {
                corretas.add(item)
            }

            if(corretas.size == '10') {
                abrirModal()
            }
            
            mostrarTotal.textContent = `${corretas.size} de ${totalDePerguntas}`
         }

        quizItem.querySelector('dl').appendChild(dt)
    }

    
    quizItem.querySelector('dl dt').remove()
    
    quiz.appendChild(quizItem);
}

function abrirModal(){
  new bootstrap.Modal('#zoomImg').show();
}

function abrirModalErro() {
    new bootstrap.Modal('#zoomImgErro').show();
    setTimeout(()=>{
        window.location.reload()
    },"2000")
}

