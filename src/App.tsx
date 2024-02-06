import './App.css'
import Data from './components/Data'
import Home from './components/Home'
import { Route, Routes } from 'react-router'

function App() {

  return (
    <>


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/data' element={<Data />} />
      </Routes>

    </>
  )
}

export default App
