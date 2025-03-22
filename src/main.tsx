// import do react e react-dom para rodar o site e do projeto global
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// importando css global
import './index.css'
// app arquivo feito para rotas no site 
import App from './App'

// renderizando o app
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
