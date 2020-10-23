
/*Variaveis Globais */

var tabuleiro = [{}];

/*Carregamento */


document.addEventListener('DOMContentLoaded', (event) => {
  //the event occurred
  preenchimentoTabuleiro();
})

/*Functions */
preenchimentoTabuleiro = () => {
 tabuleiro = [
  {
   linha:1,
   coluna:1,
   peca:'T1P2',
   player:1,
   nome:"torre",
  },
  {
    linha:1,
    coluna:2,
    peca:'C1P2',
    player:1,
    nome:'cavalo',
  },
  {
    linha:1,
    coluna:2,
    peca:'B1P2',
    player:1,
    nome:"bispo"
  },
  {
    linha:1,
    coluna:2,
    peca:'C1P2',
    player:1,
    nome:"bispo"
  }
];
 console.log(tabuleiro[0].linha);
 /*
  
  tabuleiro[13] = "B1P2"
  tabuleiro[14] = "D1P2"
  tabuleiro[15] = "R1P2"
  tabuleiro[16] = "B2P2"
  tabuleiro[17] = "C2P2"
  tabuleiro[18] = "T2P2"
  tabuleiro[21] = "P1P2"
  tabuleiro[22] = "P2P2"
  tabuleiro[23] = "P3P2"
  tabuleiro[24] = "P4P2"
  tabuleiro[25] = "P5P2"
  tabuleiro[26] = "P6P2"
  tabuleiro[27] = "P7P2"
  tabuleiro[28] = "P8P2"

  tabuleiro[81] = "T1P1"
  tabuleiro[82] = "C1P1"
  tabuleiro[83] = "B1P1"
  tabuleiro[84] = "D1P1"
  tabuleiro[85] = "R1P1"
  tabuleiro[86] = "B2P1"
  tabuleiro[87] = "C2P1"
  tabuleiro[88] = "T2P1"
  tabuleiro[71] = "P1P1"
  tabuleiro[72] = "P2P1"
  tabuleiro[73] = "P3P1"
  tabuleiro[74] = "P4P1"
  tabuleiro[75] = "P5P1"
  tabuleiro[76] = "P6P1"
  tabuleiro[77] = "P7P1"
  tabuleiro[78] = "P8P1"

  console.log(tabuleiro);
  */
}


cliquePeca = (peca,player,value) => {

  tabuleiro.forEach((elemento,index) => {
      console.log(index+'----'+elemento);
      return true;
    });

} 


/*
var pecas = {
  torre1: {
    name: 'Torre 1'	
matriz: 11	
  },
  torre2: {
    name: 'Torre 2'
  }
}

console.log(JSON.stringify(pecas));
console.log(JSON.stringify(Object.values(pecas)))

Object.values(pecas).map((peca) => { console.log(peca) })
*/