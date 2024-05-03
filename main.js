// Criando a variável const form para tirar a média de nota //
const form = document.getElementById('form-atividade');

// Adicionando emogis para os resultados de nota //
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji celebrando" />';
const imgReprovado = '<img src="./images/reprovado.png" alt="emoji triste" />';

// Criando arrays para calcular as médias //
const atividades = [];
const notas = [];

// Span para aprovação ou reprovação //
const spanAprovado = '<span class="resultado aprovado" >Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado" >Reprovado</span>';

// Criando um prompt onde a variável recebe a nota minima dada pelo usuário //
const notaMinima = parseFloat(prompt('Digite uma nota minima:'));

// Criando uma variável com valor vazio para inserir uma nova linha na tabela //
let linhas = '';

// Adicionando o eventListener para a verificação do evento submit //
form.addEventListener('submit', function(e) {
    
    // Removendo a função de atualizar a página após o evento 'submit' //
    e.preventDefault();

    // Adicionando a função adicionaLinha para o eventListener // 
    adicionaLinha();

    // Adicionando a função atualizaTabela para o eventListener //
    atualizaTabela();

    // Adicionando a função atualizaMediaFinal para o eventListener //
    atualizaMediaFinal();
});

function adicionaLinha() {
    // Criando const's para capturar os dados colocados pelo usuario nos inputs //
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');


    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade: ${inputNomeAtividade.value} já esta incluida.`)
    } else {
        // adicionando o push. para os arrays //
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));
    
        // Criando uma variável para adicionar notas à tabéla //
        let linha = '<tr>';
    
        // Atribuindo à variável linha os valores colocados nos inputs pelo usuário // 
        // Usando a atribuição '+=' para atualizar as notas colocadas pelo usuário // 
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
    
        // Criando um operador ternário para aprovação ou reprovação do aluno //
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += '</tr>';
    
        // A variável 'linhas' recebe a variável 'linha' e a atribuição de '+=' para atualizar a tábela //
        // A variável 'linhas' vai ser responsável por criar uma nova linha e atualizar com um novo valor que o úsuario coloca, graças as atribuição de '.value' que criamos na variável 'linha' //
        linhas += linha;
    }

    // Limpando os inputs após o usuário inserir os dados e ativar o evento 'submit' //
    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizaTabela() {
// Criando uma const corpoTabela para atualizar as linha da tabela //
    const corpoTabela = document.querySelector('tbody');

// Inserindo conteúdo na tag <tbody> utilizando innerHTML //
    corpoTabela.innerHTML = linhas;

}

function atualizaMediaFinal() {
    // Criando const para receber o return média final //
    const mediaFinal = calculaMediaFinal();

    // adicionando conteudo as tags //
    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculaMediaFinal () {
    // declarando variável para o laço //
    let somaDasNotas = 0;

    // criando laço para calcular a média // 
    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    }
    
    // Criando o retorno da função de calculo de média final //
    return somaDasNotas / notas.length;
}