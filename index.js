let participantes = [
  {
    nome: "Davi Whagner",
    email: "daviwhagner@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: null
  },
  {
    nome: "Maria Silva",
    email: "maria.silva@example.com",
    dataInscricao: new Date(2024, 2, 23, 10, 30),
    dataCheckIn: new Date(2024, 2, 26, 18, 45)
  },
  {
    nome: "João Oliveira",
    email: "joao.oliveira@example.com",
    dataInscricao: new Date(2024, 2, 24, 14, 15),
    dataCheckIn: new Date(2024, 2, 27, 20, 10)
  },
  {
    nome: "Ana Santos",
    email: "ana.santos@example.com",
    dataInscricao: new Date(2024, 2, 25, 8, 0),
    dataCheckIn: null
  },
  {
    nome: "Pedro Souza",
    email: "pedro.souza@example.com",
    dataInscricao: new Date(2024, 2, 26, 12, 45),
    dataCheckIn: new Date(2024, 2, 29, 10, 20)
  },
  {
    nome: "Mariana Pereira",
    email: "mariana.pereira@example.com",
    dataInscricao: new Date(2024, 2, 27, 17, 30),
    dataCheckIn: new Date(2024, 2, 30, 21, 15)
  },
  {
    nome: "Carlos Ferreira",
    email: "carlos.ferreira@example.com",
    dataInscricao: new Date(2024, 2, 28, 9, 20),
    dataCheckIn: new Date(2024, 3, 1, 12, 40)
  },
  {
    nome: "Juliana Lima",
    email: "juliana.lima@example.com",
    dataInscricao: new Date(2024, 2, 29, 13, 10),
    dataCheckIn: new Date(2024, 2, 4, 16, 55)
  },
  {
    nome: "Rafael Martins",
    email: "rafael.martins@example.com",
    dataInscricao: new Date(2024, 2, 30, 11, 50),
    dataCheckIn: null
  },
  {
    nome: "Camila Almeida",
    email: "camila.almeida@example.com",
    dataInscricao: new Date(2024, 2, 31, 15, 40),
    dataCheckIn: new Date(2024, 3, 1, 19, 10)
  }
];

const criarNovoParticipante =  (participante) => {
  const dataInscricao = dayjs(Date.now())
  .to(participante.dataInscricao)

  let dataCheckIn = dayjs(Date.now())
  .to(participante.dataCheckIn)

  // condicional
  if(participante.dataCheckIn == null) {
    dataCheckIn = `
      <button
        data-email="${participante.email}"
        onclick="fazerCheckIn(event)"
      >
        Confirmar check-in
      </button>    
    `
  }
  
  return `
  <tr>
    <td>
      <strong>
        ${participante.nome}
      </strong>
      <br>
      <small>
        ${participante.email}
      </small>
    </td>
    <td>${dataInscricao}</td>
    <td>${dataCheckIn}</td>
  </tr>
  `
}

const atualizarLista = (participante) => {
  let output = ""
  // estrutura de repetição - loop
  for(let participante of participantes) {
    output = output + criarNovoParticipante(participante)
  }
  // substituir informação HTML
  document
  .querySelector('tbody')
  .innerHTML = output
}

atualizarLista(participantes)

const adicionarParticipante = (event) => {
  event.preventDefault()

  const dadosDoFormulario = new FormData(event.target)

  const participante = {
    nome: dadosDoFormulario.get('nome'),
    email: dadosDoFormulario.get('email'),
    dataInscricao: new Date(),
    dataCheckIn: null
  }

  // verificar se o participante já existe
  const participanteExiste = participantes.find(
    (p) => p.email == participante.email
  )

  if(participanteExiste){
    alert('Email já cadastrado!')
    event.target.querySelector('[name="nome"]').value = ""
    event.target.querySelector('[name="email"]').value = ""
    return
  }

  participantes = [participante, ...participantes]
  atualizarLista(participantes)

  //limpar o formulario
  event.target.querySelector('[name="nome"]').value = ""
  event.target.querySelector('[name="email"]').value = ""
}

const fazerCheckIn = (event) => {
  // confirmar se realmente quer o check-in
  const mensagemConfirmacao = 'Tem certeza que deseja fazer o check-in?'
  if(!confirm(mensagemConfirmacao)){
    return
  }

  // encontrar o participante dentro da lista
  const participante = participantes.find(
    (p) => p.email == event.target.dataset.email
  )
  // atualizar o check-in do participante
  participante.dataCheckIn = new Date()

  // atualizar a lista de participantes
  atualizarLista(participantes)
}