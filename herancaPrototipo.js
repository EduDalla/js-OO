const user = {
    nome: 'Juliana',
    email: 'j@j.com',
    nascimento: '2024-01-01',
    role: 'estudante',
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email)
    }
}


const admin = {
    nome: 'Eduardo',
    email: 'e@e.com',
    nascimento: '2024-10-11',
    role: 'admin',
    ativo: true,
    criarCurso: function () {
        console.log('curso criado')
    }
}

// Herança de portótipo
Object.setPrototypeOf(admin, user)

admin.criarCurso()
admin.exibirInfos()