# HTML

*Hypertext*

*Markup*
- Tags: <tag> </tag>
- Atributos

*Language*

# CSS
Cascadind StyleSheet

```css
/* declarações */
body {
  background-color: #121214;
  color: #ffffff;
}
```
# JavaScript
```js
// variaveis
const mensagem = "Oi, tudo bem?"
// tipos de dados
  //number
  //string
// funcao
alert(mensagem)

//arrow function
const atualizarLista = () => {
  alert("Estou dentro da função")
}

atualizarLista()

// objeto javascript
const participante = {
  nome: "Mayk Brito",
  email: "mayk@gmail.com",
  dataInscricao: new Date(2024, 2, 22, 19, 20),
  dataCheckIn: new Date(2024, 2, 25, 22, 00)
}
// array
let participantes = [
  {
    nome: "Mayk Brito",
    email: "mayk@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: new Date(2024, 2, 25, 22, 00)
  }, 
]

// estrutura de repetição - loop
for(let participante of participantes) {
  //faça alguma coisa aqui
  //enquanto tiver participantes nessa lista
}

  // condicional
  if(participante.dataCheckIn == null){
    dataCheckIn = `
      <button
        data-email="${participante.email}"
        onclick="fazerCheckIn(event)"
      >
        Confirmar check-in
      </button>
    `
  }
```