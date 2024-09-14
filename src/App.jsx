import './App.css'
import Titulo from './components/Titulo'
import { Card, Container } from 'react-bootstrap'
import Formulario from './components/Formulario'
import ListaNoticias from './components/ListaNoticias'
import { useState } from 'react'
function App() {
  const [categoria, setCategoria] = useState('')
  const [pais, setPais] =useState('')

  return (
    <Container>
      <Titulo></Titulo>
      <Card>
        <Formulario setCategoria={setCategoria} setPais={setPais}></Formulario>
        <ListaNoticias categoria={categoria} pais={pais}></ListaNoticias>
      </Card>
    </Container>
  )
}

export default App
