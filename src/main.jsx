import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import DescriptionMarmita from './components/pages/DescriptionMarmita'
import RelatorioMarmita from './components/pages/RelatorioMarmita'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/marmita",
    element: <DescriptionMarmita />
  },
  {
    path: "/relatorio-marmitas",
    element: <RelatorioMarmita />
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
