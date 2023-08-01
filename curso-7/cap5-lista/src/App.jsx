function App() {

  const animais = [
    "Cachorro",
    "Gato",
    "Peixe"
  ]

  return (
    <div>
      <h1>Lista de Animais</h1>
      <ul>
        {   animais.map( item => {
            return <li key={item}>{item}</li>
          })
        }
      </ul>
    </div>
  )
}

export default App
