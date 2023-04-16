import './App.css'
import { AppProviders } from './providers/app-providers'
import { MuiMode } from './components/mui/mui-mode'

function App() {
  return (
    <AppProviders>
      <div className="App">
        <MuiMode />
      </div>
    </AppProviders>
  )
}

export default App
