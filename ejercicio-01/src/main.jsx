import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import App from './App.jsx'
import Header from './assets/components/header/Header'
import Section from './assets/components/Sections/Section'
import Footer from './assets/components/footer/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Section/>
    <Footer />
  </React.StrictMode>,
)
