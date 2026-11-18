import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AanswerProvider } from '@aanswer/react'

const widgetKey =
  import.meta.env.VITE_AANSWER_WIDGET_KEY ||
  'cwk_4051e97292c3d3aa1a2cc3c035c69828ab2b9e19abf7f764'
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
