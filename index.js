let readlineSync = require('readline-sync');//repositorio para simular entrada de dados no terminal
let userName = readlineSync.question("Digite o nome do seu heroi: ");
let quantXp = readlineSync.question("Digite o quanto de XP seu heroi tem: ");
let inteiro = parseInt(quantXp);
let listaRank = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"];

if (inteiro < 1000)
{
    console.log("O Heroi de nome " + userName + " esta no nível "+ listaRank[0]);
}
else if (inteiro >= 1001 && inteiro <= 2000) 
{
    console.log("O Heroi de nome " + userName + " esta no nível " + listaRank[1]);
}
else if(inteiro >= 2001 && inteiro <= 5000)
{
    console.log("O Heroi de nome " + userName + " esta no nível " + listaRank[2]);
}
else if(inteiro >= 6001 && inteiro <= 7000)
{
    console.log("O Heroi de nome " + userName + " esta no nível " + listaRank[3]);
}
else if(inteiro >= 7001 && inteiro <= 8000)
{
    console.log("O Heroi de nome " + userName + " esta no nível " + listaRank[4]);
}
else if(inteiro >= 8001 && inteiro <= 9000)
{
    console.log("O Heroi de nome " + userName + " esta no nível " + listaRank[5]);
}
else if(inteiro >= 9001 && inteiro <= 10000)
{
    console.log("O Heroi de nome " + userName + " esta no nível " + listaRank[6]);
}
else if(inteiro >= 10001)
{
    console.log("O Heroi de nome " + userName + " esta no nível "+ listaRank[7]);
}