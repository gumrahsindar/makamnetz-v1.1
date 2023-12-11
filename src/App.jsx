import { Container, MantineProvider } from '@mantine/core'
import Navbar from './components/Navbar'
import { theme } from './components/ui/theme'

function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme='dark'>
      <Container maw='90rem'>
        <header>
          <Navbar />
        </header>
        <main>
          <p>Main</p>
        </main>
      </Container>
    </MantineProvider>
  )
}

export default App
