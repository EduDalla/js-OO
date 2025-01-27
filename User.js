export default class User {
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || "estudante";
        this.#ativo = ativo
    }

    exibirInfos() {
        if (this.role === 'estudante') {
            return `estudante - ${this.nome}, ${this.email}`
        }
        if (this.role === 'admin') {
            return `admin - ${this.nome}, ${this.email}`
        }
        if (this.role === 'docente') {
            return `docente - ${this.nome}, ${this.email}`
        }
    }

    get nome() {
        return this.#nome
    }

    get email() {
        return this.#email
    }

    get nascimento() {
        return this.#nascimento
    }

    get role() {
        return this.#role
    }

    get ativo() {
        return this.#ativo
    }

    set nome(novoNome) {
        if (novoNome === "") {
            throw new Error ('Fromato de nome não é aceito!')
        }
        this.#nome = novoNome
    } 

    static exibirInfosGenericos(nome, email) {
        return `${nome}, ${email}`
    }
}


