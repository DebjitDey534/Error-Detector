import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { MessageProvider } from './context/MessageContext.jsx'

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <MessageProvider>
      <App />
    </MessageProvider>
  </HashRouter>
)
