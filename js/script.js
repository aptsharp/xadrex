/*Variaveis Globais */

var tabuleiro = [{}];
var tabuleiroPlayer = [{}];

/*Carregamento */

document.addEventListener("DOMContentLoaded", (event) => {
    //the event occurred
    preenchimentoTabuleiro();
    preenchimentoTabuleiroPlayer();
});

/*Functions */
preenchimentoTabuleiro = () => {
    tabuleiro = {
        T1P2: {
            linha: 1,
            coluna: 1,
            peca: "T1P2",
            player: 2,
            nome: "torre",
            cliqueAndar: "false",
        },
        C1P2: {
            linha: 1,
            coluna: 2,
            peca: "C1P2",
            player: 2,
            nome: "cavalo",
            cliqueAndar: "false",
        },
        B1P2: {
            linha: 1,
            coluna: 3,
            peca: "B1P2",
            player: 2,
            nome: "bispo",
            cliqueAndar: "false",
        },
        D1P2: {
            linha: 1,
            coluna: 4,
            peca: "D1P2",
            player: 2,
            nome: "rainha",
            cliqueAndar: "false",
        },
        R1P2: {
            linha: 1,
            coluna: 5,
            peca: "R1P2",
            player: 2,
            nome: "rei",
            cliqueAndar: "false",
        },
        B2P2: {
            linha: 1,
            coluna: 6,
            peca: "B2P2",
            player: 2,
            nome: "bispo",
            cliqueAndar: "false",
        },
        C2P2: {
            linha: 1,
            coluna: 7,
            peca: "C2P2",
            player: 2,
            nome: "cavalo",
            cliqueAndar: "false",
        },
        T2P2: {
            linha: 1,
            coluna: 7,
            peca: "T2P2",
            player: 2,
            nome: "torre",
            cliqueAndar: "false",
        },
        P1P2: {
            linha: 2,
            coluna: 1,
            peca: "P1P2",
            player: 2,
            nome: "piao",
            cliqueAndar: "false",
        },
        P2P2: {
            linha: 2,
            coluna: 2,
            peca: "P2P2",
            player: 2,
            nome: "piao",
            cliqueAndar: "false",
        },
        P3P2: {
            linha: 2,
            coluna: 3,
            peca: "P3P2",
            player: 2,
            nome: "piao",
            cliqueAndar: "false",
        },
        P4P2: {
            linha: 2,
            coluna: 4,
            peca: "P4P2",
            player: 2,
            nome: "piao",
            cliqueAndar: "false",
        },
        P5P2: {
            linha: 2,
            coluna: 5,
            peca: "P5P2",
            player: 2,
            nome: "piao",
            cliqueAndar: "false",
        },
        P6P2: {
            linha: 2,
            coluna: 6,
            peca: "P6P2",
            player: 2,
            nome: "piao",
            cliqueAndar: "false",
        },
        P7P2: {
            linha: 2,
            coluna: 7,
            peca: "P7P2",
            player: 2,
            nome: "piao",
            cliqueAndar: "false",
        },
        P8P2: {
            linha: 2,
            coluna: 8,
            peca: "P8P2",
            player: 2,
            nome: "piao",
            cliqueAndar: "false",
        },

        //JOGADOR 1//

        T1P1: {
            linha: 8,
            coluna: 1,
            peca: "T1P1",
            player: 1,
            nome: "torre",
            cliqueAndar: "false",
        },
        C1P1: {
            linha: 8,
            coluna: 2,
            peca: "C1P1",
            player: 1,
            nome: "cavalo",
            cliqueAndar: "false",
        },
        B1P1: {
            linha: 8,
            coluna: 3,
            peca: "B1P1",
            player: 1,
            nome: "bispo",
            cliqueAndar: "false",
        },
        D1P1: {
            linha: 8,
            coluna: 4,
            peca: "D1P1",
            player: 1,
            nome: "rainha",
            cliqueAndar: "false",
        },
        R1P1: {
            linha: 8,
            coluna: 5,
            peca: "R1P1",
            player: 1,
            nome: "rei",
            cliqueAndar: "false",
        },
        B2P1: {
            linha: 8,
            coluna: 6,
            peca: "B2P1",
            player: 1,
            nome: "bispo",
            cliqueAndar: "false",
        },
        C2P1: {
            linha: 8,
            coluna: 7,
            peca: "C2P1",
            player: 1,
            nome: "cavalo",
            cliqueAndar: "false",
        },
        T2P1: {
            linha: 8,
            coluna: 8,
            peca: "T2P1",
            player: 1,
            nome: "torre",
            cliqueAndar: "false",
        },
        P1P1: {
            linha: 7,
            coluna: 1,
            peca: "P1P1",
            player: 1,
            nome: "piao",
            cliqueAndar: "false",
        },
        P2P1: {
            linha: 7,
            coluna: 2,
            peca: "P2P1",
            player: 1,
            nome: "piao",
            cliqueAndar: "false",
        },
        P3P1: {
            linha: 7,
            coluna: 3,
            peca: "P3P1",
            player: 1,
            nome: "piao",
            cliqueAndar: "false",
        },
        P4P1: {
            linha: 7,
            coluna: 4,
            peca: "P4P1",
            player: 1,
            nome: "piao",
            cliqueAndar: "false",
        },
        P5P1: {
            linha: 7,
            coluna: 5,
            peca: "P5P1",
            player: 1,
            nome: "piao",
            cliqueAndar: "false",
        },
        P6P1: {
            linha: 7,
            coluna: 6,
            peca: "P6P1",
            player: 1,
            nome: "piao",
            cliqueAndar: "false",
        },
        P7P1: {
            linha: 7,
            coluna: 7,
            peca: "P7P1",
            player: 1,
            nome: "piao",
            cliqueAndar: "false",
        },
        P8P1: {
            linha: 7,
            coluna: 8,
            peca: "P8P1",
            player: 1,
            nome: "piao",
            cliqueAndar: "false",
        },
    };
};

preenchimentoTabuleiroPlayer = () => {
    let tabuleiroAux = Object.values(tabuleiro);
    for (let index = 0; index < tabuleiroAux.length; index++) {
        let nomePos = tabuleiroAux[index].linha + "" + tabuleiroAux[index].coluna;
        tabuleiroPlayer[nomePos] = tabuleiroAux[index].player;
    }
};

preenchimentoTabuleiroHTML = () => {};

andarTorre = (torre, peca) => {
    let linha = torre.linha;
    let coluna = torre.coluna;
    let linhaAux;
    if (tabuleiro[peca].cliqueAndar == "false") {
        linhaAux = linha + 1;
        for (let index = linhaAux; index <= 8; index++) {
            let Ndiv = "#m" + index + "" + coluna + "";

            if ($(Ndiv).html()) {
                //loop para saber da casa
            } else {
                $(Ndiv).html("");
                $(Ndiv).append(
                    "<div class='moverPeca casa' onClick='clique2(58)' </div>"
                );
            }
        }

        linhaAux = linha - 1;
        for (let index = linhaAux; index >= 1; index--) {
            let Ndiv = "#m" + index + "" + coluna + "";
            let linha2 = index;
            let coluna2 = coluna;

            if ($(Ndiv).html()) {
                if (tabuleiroPlayer[index + "" + coluna] != torre.player) {
                    $(Ndiv).append(
                        "<div class='moverPeca ' onClick='clique2(\"" +
                        linha2 +
                        '","' +
                        coluna2 +
                        '","' +
                        peca +
                        "\")'> </div>"
                    );
                }
            } else {
                $(Ndiv).html("");
                $(Ndiv).append(
                    "<div class='moverPeca ' onClick='clique2(\"" +
                    linha2 +
                    '","' +
                    coluna2 +
                    '","' +
                    peca +
                    "\")'> </div>"
                );
            }
        }
    }
    return true;
};

clique2 = (linha2, coluna2, peca) => {
    //\""+value.profissional_id+"\",\""+idMedico+"\"
    let proximaCasa = "#m" + "" + linha2.trim() + "" + coluna2.trim();
    proximaCasa = proximaCasa.trim();

    $(proximaCasa).html("");
    $(proximaCasa).append(
        "<button class='peca' onClick=cliquePeca('" + peca + "')  >&#9814;</button>"
    );

    $(".moverPeca").remove();
    let casaAtual = tabuleiro[peca].linha + "" + tabuleiro[peca].coluna;

    tabuleiro[peca].cliqueAndar = "false";
    tabuleiro[peca].linha = linha2;
    tabuleiro[peca].coluna = coluna2;

    casaAtual = casaAtual.trim();
    $("#m" + casaAtual).html("");
};

cliquePeca = (peca) => {
    if (tabuleiro[peca].nome == "torre") {
        let resposeAndar = andarTorre(tabuleiro[peca], peca);
        tabuleiro[peca].cliqueAndar = resposeAndar;
        return true;
    }
};

/*
var pecas = {
  torre1: {
    name: 'Torre 1'
  },
  torre2: {
    name: 'Torre 2'
  }
}

console.log(JSON.stringify(pecas));
console.log(JSON.stringify(Object.values(pecas)))

Object.values(pecas).map((peca) => { console.log(peca) })

console.log(pecas['torre1']);
*/