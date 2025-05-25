import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Csr from "./csr/csr.jsx";


createRoot(document.getElementById('root')).render(

  <StrictMode>
    <Csr />
  </StrictMode>,
)
