import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AanswerProvider } from '@aanswer/react'

const widgetKey = import.meta.env.VITE_AANSWER_WIDGET_KEY
const host = import.meta.env.VITE_AANSWER_HOST || 'https://ast.re.cx'
const widgetKey = 'cwk_86d8f29e74d0a588e638742914225ed64ac8d22957bd48b1'
const host = 'https://ast.re.cx'

if (!widgetKey) {
  throw new Error('[Aanswer] VITE_AANSWER_WIDGET_KEY is not defined.')
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AanswerProvider widgetKey={widgetKey} host={host}>
      <App />
    </AanswerProvider>
  </StrictMode>,
)
