import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom"
import LivroHome from "./components/templates/LivroHome"
import Pesquisador from "./components/templates/Pesquisador"
import Autor from "./components/templates/AutorHome"
import Emprestimos from "./components/templates/Emprestimo"
import NavBar from "./components/templates/NavBar"
import NovoLivro from "./components/templates/NovoLivro"
import AutorHome from "./components/templates/AutorHome"
import AutorEditar from "./components/templates/AutorEditar"
import LivroEditar from "./components/templates/LivroEditar"
import NovoAutor from "./components/templates/NovoAutor"
import PesquisadorHome from "./components/templates/Pesquisador"


function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <NavBar />
        <div className="ml-60 p-4 flex-grow">
          <Routes>
            <Route path="/acervo" element={<LivroHome />} />
            <Route path="/pesquisador" element={<PesquisadorHome />} />
            <Route path="/autor" element={<AutorHome />} />
            <Route path="/emprestimo" element={<Emprestimos />} />
            <Route path="/novoLivro" element={<NovoLivro />} />
            <Route path="/alterar/:id" element={<LivroEditar />} />
            <Route path="/novoAutor" element={<NovoAutor />} />
            <Route path="/autorEditar/:id" element={<AutorEditar />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
