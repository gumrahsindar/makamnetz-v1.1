import { Container, MantineProvider } from '@mantine/core'
import Navbar from './components/Navbar'
import { theme } from './components/ui/theme'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import CesniWorld from './pages/CesniWorld/CesniWorld'
import Makams from './pages/Makams/Makams'
import MakamNetwok from './pages/MakamNetwork/MakamNetwok'

function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme='dark'>
      <Container maw='90rem'>
        <Router>
          <header>
            <Navbar />
          </header>
          <main>
            <Routes>
              <Route path='/' element={<CesniWorld />} />
              <Route path='/cesni-world' element={<CesniWorld />} />
              <Route path='/makams' element={<Makams />} />
              <Route path='/makam-network' element={<MakamNetwok />} />
            </Routes>
          </main>
        </Router>
      </Container>
    </MantineProvider>
  )
}

export default App
