// 4. Crie duas variáveis. Na primeira coloque um total de minutos e
// defina um valor para ela (por exemplo, minutos = 120). Na segunda
// coloque o total em segundos destes minutos armazenados na
// primeira variável. Apresente no documento html a seguinte
// informação: "_ minutos equivale à _ segundos!"


let totalMinutos = parseInt(prompt('Digite um valor em minutos:'));
let segundos = totalMinutos * 60;

if(totalMinutos === 1){

    document.write(`${totalMinutos} minuto equivale a ${segundos} segundos`);

}else{
    document.write(`${totalMinutos} minutos equivale a ${segundos} segundos`);

}


