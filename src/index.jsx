import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import GlobalStyle from './style/general-style'
import Home from './pages/Home/index.jsx'
import Logements from './pages/Logements/index.jsx'
import APropos from './pages/APropos/index.jsx'
import Header from './components/Header/index.jsx'
import Error from './pages/Error/index.jsx'
import Footer from './components/Footer/index.jsx'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Logement/:id" element={<Logements />} />
            <Route path="/APropos" element={<APropos />} />
            <Route path="*" element={<Error />} />
          </Routes>
        <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
