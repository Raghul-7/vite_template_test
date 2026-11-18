import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AanswerProvider } from '@aanswer/react'

const widgetKey = 'cwk_7e089d6eacc244e7d1ac1655fcc1d52b158741b8a300bf2e'
const host = 'https://ast.re.cx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AanswerProvider widgetKey={widgetKey} host={host}>
      <App />
    </AanswerProvider>
  </StrictMode>,
)
