
import { Route, Routes } from 'react-router'
import './App.css'
import { Debst } from './pages/debts/Debts'
import { NotFound } from './pages/notFound/NotFound'
import { Header } from './components/header/Header'
import Home from './pages/home/Home'

function App() {
  

  return (
    <>
    <Header/>
     <Routes>
      <Route index Component={Home}/>
      <Route path='/debts' Component={Debst}/>
      <Route path='*' Component={NotFound}/>
     </Routes>
    </>
  )
}

export default App
