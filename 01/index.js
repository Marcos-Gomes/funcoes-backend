const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};

function corrigirProva(prova) {
    let soma = 0;
    for (let i = 0; i < prova.questoes.length; i++) {
        if (prova.questoes[i].resposta == prova.questoes[i].correta) {
            soma++;
        }
    }
    const resultado = soma * 2;
    console.log(`O aluno(a) ${prova.aluno} acertou ${soma} questões e obteve nota ${resultado}`);
}

corrigirProva(prova);