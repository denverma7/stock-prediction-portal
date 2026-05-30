import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './assets/css/style.css'
import Main from './components/Main'
import Register from './components/Register'
import Login from './components/Login'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {

  return (
    <>
      <Router>
      <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      <Footer />
      </Router>
    </>
  )
}

export default App
