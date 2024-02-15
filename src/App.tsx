import { QueryClient, QueryClientProvider} from "@tanstack/react-query"
import "./App.css"

import Title from './components/Title'
import Header from './components/Header'
import Container from './components/Container'
import Modal from './components/Modal'



const queryClient = new QueryClient()


function App() {

  return (
    <QueryClientProvider client={queryClient}>
     <Title />
     <Header />
     <Container />
     <Modal />
    </QueryClientProvider>
  )
}

export default App
