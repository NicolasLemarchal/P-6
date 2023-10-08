import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import GlobalStyle from './utils/style/general-style'
import Home from './pages/Home'
import Location from './pages/Location'
import APropos from './pages/APropos'
import Header from './components/Header'
import Error from './components/Error'
import Footer from './components/Footer'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Location" element={<Location />} />
            <Route path="/APropos" element={<APropos />} />
            <Route path="*" element={<Error />} />
          </Routes>
        <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
