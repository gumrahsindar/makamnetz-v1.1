import { Container, MantineProvider } from '@mantine/core'
import Navbar from './components/Navbar'
import { theme } from './components/ui/theme'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import CesniWorld from './pages/CesniWorld/CesniWorld'
import Makams from './pages/Makams/Makams'
import MakamNetwork from './pages/MakamNetwork/MakamNetwork'
import Home from './pages/Home/Home'
import Info from './pages/Info/Info'

function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme='dark'>
      <Container maw='90rem'>
        <Router>
          <main>
            <header>
              <Navbar />
            </header>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/cesni-world' element={<CesniWorld />} />
              <Route path='/makams' element={<Makams />} />
              <Route path='/makam-network' element={<MakamNetwork />} />
              <Route path='/info' element={<Info />} />
            </Routes>
          </main>
        </Router>
      </Container>
    </MantineProvider>
  )
}

export default App
