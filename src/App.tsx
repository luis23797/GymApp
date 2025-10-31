
import { Route, Routes } from 'react-router'
import './App.css'
import { Debst } from './pages/debts/Debts'
import { NotFound } from './pages/notFound/NotFound'
import { Header } from './components/header/Header'

function App() {
  

  return (
    <>
    <Header/>
     <Routes>
      <Route path='/' Component={Debst}/>
      <Route path='*' Component={NotFound}/>
     </Routes>
    </>
  )
}

export default App
