'use strict'

const adicionar = document.getElementById('add')

// const adicionarCard = () => {
//     const container = document.getElementById('container')
//     // container.innerHTML = container.innerHTML + '<div class="items"></div>'
//     container.innerHTML += container.innerHTML + '<div class="items"></div>'
// }

const adicionarCard = (aluno, nota) => {
    const container = document.getElementById('container')
    const novaDiv = document.createElement('div')
    novaDiv.classList.add('aluno')

    novaDiv.innerHTML = `<h2 class="aluno__title">${aluno}</h2>
                            <span class="aluno__nota">${nota}</span>`


    if (nota >= 6)
        novaDiv.classList.add('azul')
    else
        novaDiv.classList.add('vermelho')


    container.appendChild(novaDiv)
}

const handleClick = () => {
    const nomeAluno = prompt('Digite um nome:')
    const notaAluno = prompt('Digite uma nota:')

    adicionarCard(nomeAluno, notaAluno)
}


adicionar.addEventListener('click', handleClick)

// SOLID - Responsivade unica
//  Funcoes puras