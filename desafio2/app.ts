
interface cad {
    nome:string,
    idade:number,
    profissao?: Profissao
};

enum Profissao {
    Atriz,
    Padeiro,
}
let pessoa1: cad= {
    nome: "maria",
    idade: 29,
    profissao: Profissao.Atriz
}
let pessoa2: cad = {
    nome : "roberto",
    idade : 19,
    profissao : Profissao.Padeiro
}
let pessoa3: cad = {
    nome: "laura",
    idade: 32,
    profissao: Profissao.Atriz
};

let pessoa4: cad = {
    nome: "carlos",
    idade: 19,
    profissao: Profissao.Padeiro
}