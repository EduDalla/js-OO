import User from "./User.js"

class Docente extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = true) {
        // super classe de Admin(User)
        super(nome, email, nascimento, role, ativo);
    }

    aprovarEstudante(estudante, curso) {
        return `O estudante ${estudante} passou no curso de ${curso}, reponsável ${this.nome}`
    }
}

const novaDocente = new Docente("Rodrigo", "r@r.com", '2024-01-01')
console.log(novaDocente)
console.log(novaDocente.exibirInfos())

console.log(novaDocente.aprovarEstudante('Eduardo', 'Python'))