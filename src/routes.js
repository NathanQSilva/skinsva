import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Estaticos

// Paginas
import App from './pages/HomePage'

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<App />} />
            </Routes>
        </Router>
    )
}