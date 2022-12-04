// 5. Crie cinco variáveis. Na primeira armazene o nome de um aluno. Na
// segunda, terceira e quarta coloque 3 notas (valores de 0 à 10).
// Calcule a média das notas e armazene na quinta variável criada.
// Apresente no documento html a seguinte informação:
// "O aluno _____ ficou com média _,_"

let nomeAluno = prompt("Digite seu nome: ");
let n1 = parseFloat(prompt("Digite a primeira nota: "));
let n2 = parseFloat(prompt("Digite a segunda nota: "));
let n3 = parseFloat(prompt("Digite a terceira nota: "));
let n4 = parseFloat(prompt("Digite a quarta nota: "));

let mediaFinal = (n1 + n2 + n3 + n4) / 5;

if(mediaFinal >= 6.0){

    document.write(`O aluno ${nomeAluno} ficou com a media ${mediaFinal.toFixed(2)} e foi APROVADO <br>`);
    
}else{

    document.write(`O aluno ${nomeAluno} ficou com a media ${mediaFinal.toFixed(2)} e foi REPROVADO <br>`);

}
