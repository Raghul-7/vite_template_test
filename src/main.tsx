import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AanswerProvider } from '@aanswer/react'

const widgetKey =
  import.meta.env.VITE_AANSWER_WIDGET_KEY ||
  'cwk_7e089d6eacc244e7d1ac1655fcc1d52b158741b8a300bf2e'
const host = import.meta.env.VITE_AANSWER_HOST || 'https://ast.re.cx'

if (!widgetKey && import.meta.env.DEV) {
  console.warn(
    '[Aanswer] VITE_AANSWER_WIDGET_KEY is not defined. Please check your .env file.',
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AanswerProvider widgetKey={widgetKey} host={host}>
      <App />
    </AanswerProvider>
  </StrictMode>,
)
