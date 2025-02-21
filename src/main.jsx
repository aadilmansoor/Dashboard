import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './Redux/store.js'
import { SnackbarProvider } from 'notistack'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <SnackbarProvider autoHideDuration={2000} preventDuplicate dense>
        <StrictMode>
          <App />
        </StrictMode>
      </SnackbarProvider>
    </Provider>
  </BrowserRouter>
)
