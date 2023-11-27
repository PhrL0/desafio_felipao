
let listaRank = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"];
var saldo = balance(200,5);

function balance(wins,loses)
{
    saldo = wins - loses
    
    if (saldo <= 10)
    {
        console.log("O Herói tem o saldo de " + saldo + " está no nível de " + listaRank[0]);
    }
    else if(saldo > 11 && saldo < 20)
    {
        console.log("O Herói tem o saldo de " + saldo + " está no nível de " + listaRank[1]);
    }
    else if(saldo > 21 && saldo < 50)
    {
        console.log("O Herói tem o saldo de " + saldo + " está no nível de " + listaRank[2]);
    }
    else if(saldo > 51 && saldo < 80)
    {
        console.log("O Herói tem o saldo de " + saldo + " está no nível de " + listaRank[3]);
    }
    else if(saldo > 81 && saldo < 90)
    {
        console.log("O Herói tem o saldo de " + saldo + " está no nível de " + listaRank[4]);
    }
    else if(saldo > 91 && saldo < 100)
    {
        console.log("O Herói tem o saldo de " + saldo + " está no nível de " + listaRank[5]);
    }
    else if(saldo >= 101)
    {
        console.log("O Herói tem o saldo de " + saldo + " está no nível de " + listaRank[6]);
    }
    return saldo;
}









   


