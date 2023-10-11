function Pessoa(nome, sobrenome, idade){
    this.nome
    this.sobrenome
    this.idade

    this.metodo = function(){
        console.log(`${nome}, aqui um metodo`)
    }
}

let p1 = new Pessoa ('Carlos', 'Araújo', 20)
let p2 = new Pessoa ('Gessi', 'Holanda', 19)

p2.metodo()