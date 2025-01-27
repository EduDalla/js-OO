import User from "./User.js";
import Docente from "./Docente.js";
import Admin from "./Admin.js";

const novoUser = new User('Eduardo', 'eduardodallabella@gmail.com', '2025-01-01');

console.log(novoUser.exibirInfos());
novoUser.nome = 'Edu'
console.log(novoUser.nome)


const novoAdmin = new Admin("Rodrigo", 'r@r.com', '2025-01-01');
console.log(novoAdmin.exibirInfos())


const novoDocente = new Docente("Rodrigo", 'r@r.com', '2025-01-01');
console.log(novoDocente.exibirInfos())


const dados = User.exibirInfosGenericos('Cassio', 'c@c.com')
console.log(dados)
// console.log(novoUser.nome)
// // novoUser.#nome = "Marcio";
// // console.log(novoUser.exibirInfos())
// // console.log(novoUser.nome)