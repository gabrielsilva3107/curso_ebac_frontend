const alunos = [
    { nome: 'Gabriel', nota: 7 },
    { nome: 'Ana', nota: 5 },
    { nome: 'Lucas', nota: 8 },
    { nome: 'Maria', nota: 4 },
    { nome: 'João', nota: 6 },
];

    function filtrarAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}

const alunosAprovados = filtrarAprovados(alunos);
console.log(alunosAprovados);