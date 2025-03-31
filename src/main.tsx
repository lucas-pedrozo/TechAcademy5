// import do react e react-dom para rodar o site e do projeto global
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// importando css global
import './index.css'
// app arquivo feito para rotas no site 
import App from './App'

// importando context de autenticação
import { AuthProvider } from "@/context/AuthContext";

// renderizando o app
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>,
)
