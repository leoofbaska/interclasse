let esporte = []
let atleta = ["henrique","leonardo","joaquim","athos","lavinia"]

/// essa é a 8, só um objeto simples, não me recordo muito sobre objeto mas abri os slides para relembrar, desculpa se tiver erros :(
    let time = {
        nomeDoTime: "racionalistas",
        corDoTime: "azul",
        turmaDoTime: "turma",
        mascoteDoTime: "yete",
        atletaDoTime: ["henrique","leonardo","joaquim","athos","lavinia"],
        esporteDoTime: "volei",
        pontuacao: 0
    }

let afazer
while (afazer != 11) {
    let info4 = prompt ("Oque voce deseja fazer \n[1] - adicionar informações da turma\n[2] - ver os atletas\n[3] - adicionar um atleta\n [4] - adicionar um grito de guerra\n[5] - escolher um esporte que sua turma deseja participar\n[6] - adicionar ou remover um esporte\n[7] - listar atletas no console\n[8] - listar atletas numerados no console\n [9] - mudar o mascote\n [10] - adiconar pontos para asua turma\n [11] - encerrar interseries")
    afazer = info4

    switch (afazer) {
        case '1':
        AddInfo()    
        break;
        
        case '2':
        verAtletas()
        break;
        
        case '3':
        adicinarAtleta()
        break;
        
        case '4':
        gritoDeGuerra()
        break;
        
        case '5':
        escolherEsportes()
        break;
        
        case '6':
        maisEsporte()
        break;
        
        case '7':
        listarAtletas
        break;
        case '8':
        lisaAtleta
        break;
        
        case '9':
        mudarMascote()
        break;
        
        case '10':
        pontosInterseries()
        break;
        case '11':
        encerrarInterseries()
        break;
    }



}



///essa é a atividade da 1 e da 2, como na 2 so falava para modificar o codigo, foi isso que eu fiz
function AddInfo() {
    

let turma = prompt ("qual sua turma")
let nome = prompt("qual o nome do seu time das interseries")
let cor = prompt("qual a cor da sua turma nas interseries")
let mascote = prompt ("qual o mascote da sua turma?")
}
///essa é a 3 que fala sobre o grito de guerra, ela armazena e manda pro console de forma que os caracter estejam em maiuscula e miniscula, (adicionei um else so pra testar essa dica q me falaram para se caso a pessoa não colque nada na aba)
function gritoDeGuerra() {
    

let guerra = prompt("Digite o grito de guerra para o time:")
if (guerra !== "") {
let mai = guerra.toUpperCase()
let minu = guerra.toLowerCase()
console.log("grito de guerra em maiusculas:" + mai)
console.log("grito de guerra em minusculas:" + minu)
} else {
console.log("nenhum grito de guerra foi fornecido.")
}
}
/// essa é sobre a atividade 4, eu usei um array basico e usei um .join que transforma o array em uma string, resolvendo o problema de colocar uma virgula em cada atleta (tive diversos problemas com esse principalmente na confusão de nomes com o objeto, mas isso foi algo que consegui resolver)
function verAtletas() {
    

console.log (atleta.join(", "))
alert (atleta.join(", "))
}
///essa é sobre a atividade 5, fiz com escolha caso, não entendi muito bem o desafio, apenas coloquei texto extra caso escolha os esportes que precisam de mensagnes extras
function escolherEsportes (){
let esporte2 = prompt("escolha o esporte que voce deseja usar (futebol, vôlei, basquete, xadrez ou fifa)")
switch (esporte2) {
    case 'basquete':
        console.log("existe essa modaliade nas interseries")
        break;
        case 'xadrez':
            console.log("existe essa modaliade nas interseries")
            break;
            case 'fifa':
        console.log("existe essa modaliade nas interseries e ela é muito disputada!")
        break;
        case 'volei':
            console.log("existe essa modaliade nas interseries")
            break;
        case 'futebol':
            console.log ("existe essa modalidade nas interseries e essa é a mais disputada do senac")


    default:
        console.log ("não existe essa modalidade nas interseries")
        break;
}
}
///essa é sobre a atividade 6 foi o codigo mais dificil que tive, ainda mais pelo desafio, usei um for para falar de cada atleta e o i para numerar cada atleta, (tive dificuldade apenas em parar o codigo, mas com o .lenght foi facil)
function lisaAtleta() {

    console.log("Os atletas do time são:")
    
    for (let i = 0; i < atleta.length; i++)
    {
        console.log(`${i + 1} ${atleta[i]}`)
    }
    }

///aqui aqui é a 7, a atividade é bem simples e foi facil de fazer essa
function listarAtletas(time) {
    
    console.log (time.atleta)
}

/// essa é sobre o desafio da 7, ativiidade simples sem dificuldades
function adicinarAtleta() {
    let atleta7 = prompt("adicione mais um atleta")
    atleta.push(atleta7)
}

console.log(time)
/// sobre a atividade da 9, sobre uma função usando if e else e .pop e .push para mexer no array dos esportes
function maisEsporte() {
    alert (esporte)
 let info = prompt("voce deseja [1] - retirar o ultimo esporte OU [2] - adicinar esporte")
    if (info == 1) {
     esporte.pop()
    }
    if (info == 2) {
    let novespo = prompt ("digite seu novo esporte")
    esporte.push(novespo)
    console.log(esporte)
}
        
    }
///atividade 10
    function mostrarTudo() {
    console.log (`bem vindo ${nome} da turma ${turma}, o ${mascote} como mascote fico muito bem representativo, e ${cor} como cor principal fico muito elegante`)    
    }
/// atividade 11
function mudarMascote() {
        let novomascote = prompt ("digite seu novo mascote")
        mascote = novomascote
        alert (`o novo mascote do time é ${mascote}`)
}
/// atividade 12

function pontosInterseries() {
    let pontos = prompt ("digite seus pontos:")
    pontos = Number(pontos)
    alert (`sua turma fez ${pontos}!`)
}
/// atividade 13 essa eu não consegui fazer
function encerrarInterseries() {
    alert (`muito bem! a turma ${turma} fez ${pontos}`)
    
}