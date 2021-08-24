/*Variaveis Globais */

var Tabuleiro = [{}];
var TabuleiroPlayer = [{}];

/*Carregamento */

document.addEventListener("DOMContentLoaded", (event) => {
    //the event occurred
    preenchimentoTabuleiro();
    preenchimentoTabuleiroPlayer();
});

/*Functions */
preenchimentoTabuleiro = () => {
    Tabuleiro = {
        T1P2: {
            linha: 1,
            coluna: 1,
            peca: "T1P2",
            player: 2,
            nome: "torre",
            cliqueAndar: "false",
            eliminate: false,
        },
        C1P2: {
            linha: 1,
            coluna: 2,
            peca: "C1P2",
            player: 2,
            nome: "cavalo",
            cliqueAndar: "false",
            eliminate: false,
        },
        B1P2: {
            linha: 1,
            coluna: 3,
            peca: "B1P2",
            player: 2,
            nome: "bispo",
            cliqueAndar: "false",
            eliminate: false,
        },
        D1P2: {
            linha: 1,
            coluna: 4,
            peca: "D1P2",
            player: 2,
            nome: "rainha",
            cliqueAndar: "false",
            eliminate: false,
        },
        R1P2: {
            linha: 1,
            coluna: 5,
            peca: "R1P2",
            player: 2,
            nome: "rei",
            cliqueAndar: "false",
            eliminate: false,
        },
        B2P2: {
            linha: 1,
            coluna: 6,
            peca: "B2P2",
            player: 2,
            nome: "bispo",
            cliqueAndar: "false",
            eliminate: false,
        },
        C2P2: {
            linha: 1,
            coluna: 7,
            peca: "C2P2",
            player: 2,
            nome: "cavalo",
            cliqueAndar: "false",
            eliminate: false,
        },
        T2P2: {
            linha: 1,
            coluna: 7,
            peca: "T2P2",
            player: 2,
            nome: "torre",
            cliqueAndar: "false",
            eliminate: false,
        },
        P1P2: {
            linha: 2,
            coluna: 1,
            peca: "P1P2",
            player: 2,
            nome: "piao",
            cliqueAndar: "false",
            eliminate: false,
        },
        P2P2: {
            linha: 2,
            coluna: 2,
            peca: "P2P2",
            player: 2,
            nome: "piao",
            cliqueAndar: "false",
            eliminate: false,
        },
        P3P2: {
            linha: 2,
            coluna: 3,
            peca: "P3P2",
            player: 2,
            nome: "piao",
            cliqueAndar: "false",
            eliminate: false,
        },
        P4P2: {
            linha: 2,
            coluna: 4,
            peca: "P4P2",
            player: 2,
            nome: "piao",
            cliqueAndar: "false",
            eliminate: false,
        },
        P5P2: {
            linha: 2,
            coluna: 5,
            peca: "P5P2",
            player: 2,
            nome: "piao",
            cliqueAndar: "false",
            eliminate: false,
        },
        P6P2: {
            linha: 2,
            coluna: 6,
            peca: "P6P2",
            player: 2,
            nome: "piao",
            cliqueAndar: "false",
            eliminate: false,
        },
        P7P2: {
            linha: 2,
            coluna: 7,
            peca: "P7P2",
            player: 2,
            nome: "piao",
            cliqueAndar: "false",
            eliminate: false,
        },
        P8P2: {
            linha: 2,
            coluna: 8,
            peca: "P8P2",
            player: 2,
            nome: "piao",
            cliqueAndar: "false",
            eliminate: false,
        },

        //JOGADOR 1//

        T1P1: {
            linha: 8,
            coluna: 1,
            peca: "T1P1",
            player: 1,
            nome: "torre",
            cliqueAndar: "false",
            eliminate: false,
        },
        C1P1: {
            linha: 8,
            coluna: 2,
            peca: "C1P1",
            player: 1,
            nome: "cavalo",
            cliqueAndar: "false",
            eliminate: false,
        },
        B1P1: {
            linha: 8,
            coluna: 3,
            peca: "B1P1",
            player: 1,
            nome: "bispo",
            cliqueAndar: "false",
            eliminate: false,
        },
        D1P1: {
            linha: 8,
            coluna: 4,
            peca: "D1P1",
            player: 1,
            nome: "rainha",
            cliqueAndar: "false",
            eliminate: false,
        },
        R1P1: {
            linha: 8,
            coluna: 5,
            peca: "R1P1",
            player: 1,
            nome: "rei",
            cliqueAndar: "false",
            eliminate: false,
        },
        B2P1: {
            linha: 8,
            coluna: 6,
            peca: "B2P1",
            player: 1,
            nome: "bispo",
            cliqueAndar: "false",
            eliminate: false,
        },
        C2P1: {
            linha: 8,
            coluna: 7,
            peca: "C2P1",
            player: 1,
            nome: "cavalo",
            cliqueAndar: "false",
            eliminate: false,
        },
        T2P1: {
            linha: 8,
            coluna: 8,
            peca: "T2P1",
            player: 1,
            nome: "torre",
            cliqueAndar: "false",
            eliminate: false,
        },
        P1P1: {
            linha: 7,
            coluna: 1,
            peca: "P1P1",
            player: 2,
            nome: "piao",
            cliqueAndar: "false",
            eliminate: false,
        },
        P2P1: {
            linha: 7,
            coluna: 2,
            peca: "P2P1",
            player: 1,
            nome: "piao",
            cliqueAndar: "false",
            eliminate: false,
        },
        P3P1: {
            linha: 7,
            coluna: 3,
            peca: "P3P1",
            player: 1,
            nome: "piao",
            cliqueAndar: "false",
            eliminate: false,
        },
        P4P1: {
            linha: 7,
            coluna: 4,
            peca: "P4P1",
            player: 1,
            nome: "piao",
            cliqueAndar: "false",
            eliminate: false,
        },
        P5P1: {
            linha: 7,
            coluna: 5,
            peca: "P5P1",
            player: 1,
            nome: "piao",
            cliqueAndar: "false",
            eliminate: false,
        },
        P6P1: {
            linha: 7,
            coluna: 6,
            peca: "P6P1",
            player: 1,
            nome: "piao",
            cliqueAndar: "false",
            eliminate: false,
        },
        P7P1: {
            linha: 7,
            coluna: 7,
            peca: "P7P1",
            player: 1,
            nome: "piao",
            cliqueAndar: "false",
            eliminate: false,
        },
        P8P1: {
            linha: 7,
            coluna: 8,
            peca: "P8P1",
            player: 2,
            nome: "piao",
            cliqueAndar: "false",
            eliminate: false,
        },
    };
};

preenchimentoTabuleiroPlayer = () => {
    let TabuleiroAux = Object.values(Tabuleiro);
    for (let index = 0; index < TabuleiroAux.length; index++) {
        let nomePos = TabuleiroAux[index].linha + "" + TabuleiroAux[index].coluna;
        TabuleiroPlayer[nomePos] = TabuleiroAux[index].player;
    }
};

preenchimentoTabuleiroHTML = () => {};

walkPieceHTML = (Ndiv, linha2, coluna2, peca, objPeca) => {
    let posTabuleiroPlayer = linha2 + "" + coluna2;

    if (TabuleiroPlayer[posTabuleiroPlayer] != objPeca.player) {
        $(Ndiv).append(
            "<div class='moverPeca' onClick='walkTower2(\"" +
            linha2 +
            '","' +
            coluna2 +
            '","' +
            peca +
            "\")'> </div>"
        );
    }
};

walkTower1 = (torre, peca) => {
    let linha = torre.linha;
    let coluna = torre.coluna;
    let linhaAux = 0;
    let Ndiv;

    if (Tabuleiro[peca].cliqueAndar == "false") {
        linhaAux = linha - 1;
        for (let linha2 = linhaAux; linha2 >= 1; linha2--) {
            Ndiv = "#m" + linha2 + "" + coluna + "";
            walkPieceHTML(Ndiv, linha2, coluna, peca, torre);
            let posTabuleiroPlayer = linha2 + "" + coluna;
            if (TabuleiroPlayer[posTabuleiroPlayer] == torre.player) {
                return true;
            }
        }

        linhaAux = parseInt(linha) + 1;
        console.log(linhaAux);
        for (let linha2 = linhaAux; linha2 <= 9; linha2++) {
            Ndiv = "#m" + linha2 + "" + coluna + "";
            console.log(Ndiv);
            walkPieceHTML(Ndiv, linha2, coluna, peca, torre);
            let posTabuleiroPlayer = linha2 + "" + coluna;
            if (TabuleiroPlayer[posTabuleiroPlayer] == torre.player) {
                return true;
            }
        }
    }
    return true;
};

walkTower2 = (linha2, coluna2, peca) => {
    //\""+value.profissional_id+"\",\""+idMedico+"\"
    let posTabuleiroPlayer = linha2.trim() + "" + coluna2.trim();
    let proximaCasa = "#m" + "" + posTabuleiroPlayer;

    proximaCasa = proximaCasa.trim();

    $(proximaCasa).html("");
    $(proximaCasa).append(
        "<button class='peca' onClick=walk('" + peca + "')  >&#9814;</button>"
    );

    $(".moverPeca").remove();
    let casaAtual = Tabuleiro[peca].linha + "" + Tabuleiro[peca].coluna;

    Tabuleiro[peca].cliqueAndar = "false";
    Tabuleiro[peca].linha = linha2;
    Tabuleiro[peca].coluna = coluna2;

    TabuleiroPlayer[casaAtual] = "";
    TabuleiroPlayer[posTabuleiroPlayer] == Tabuleiro[peca].player;

    casaAtual = casaAtual.trim();
    $("#m" + casaAtual).html("");
};

walk = (peca) => {
    if (Tabuleiro[peca].nome == "torre") {
        let responseAndar = walkTower1(Tabuleiro[peca], peca);
        Tabuleiro[peca].cliqueAndar = responseAndar;
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