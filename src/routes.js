import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Estaticos
import HomePage from './pages/HomePage'

// Paginas
import { LoginPage } from './pages/Login'
import { LojaPage } from './pages/Loja'
import { Header } from './Components/Header'
import { CarrinhoPage } from './pages/Carrinho'
import { ContatoPage } from './pages/Contato'

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Header />}>
                    <Route index element={<HomePage />} />
                    <Route path='login' element={<LoginPage />} />
                    <Route path='carrinho' element={<CarrinhoPage />} />
                    <Route path='loja' element={<LojaPage />} />
                    <Route path='contato' element={<ContatoPage />} />
                </Route>
            </Routes>
        </Router>
    )
}