import React from 'react'
import './App.css'
import './pages/pages.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import Learning from './pages/Learning'
import Connect from './pages/Connect'
import { motion } from 'framer-motion'
import Nav from './components/Nav'

function App() {
  return (
    <BrowserRouter>
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/connect" element={<Connect />} />
        </Routes>
      </main>
      <footer id='footer'>
       
        <div className="footer_head">
          
          <div className="footer_logo_div">
            <a className="footer_logo" href="/" aria-label="home">
              <span className="logo-brackets">[</span>
              <span className="logo-char">PS</span>
              <span className="logo-brackets">]</span>
            </a>
          </div>
          <div className="footer_text">
                <div className="footer_links">
                  <p className="footer_link_title">Links</p>
                  <a href="/about">About</a>
                  <a href="/work">Work</a>
                  <a href="/learning">Learning</a>
                  <a href="/connect">Connect</a>
                </div>
                <div className="footer_otherwise">
                  <p className="footer_otherwise_title">Otherwise</p>
                  <a href="mailto:sandaruwanhapudeniya@gmail.com">Email</a>
                  <a href="https://www.linkedin.com/in/sandaruwan-hapudeniya">LinkedIn</a>
                  <a href="https://github.com/Prabod-Sandaruwan">GitHub</a>
                  <a href="facebook.com">Facebook</a>
                </div>
          </div>
        </div>
        <div className="footer_bottom">
          <p className="rights">© 2026 Prabod Sandaruwan. All rights reserved.</p>
          <p className="update-date">Last updated: 03 May 2026</p>
        </div>
         <img src="footer-g.svg" alt="" id="footer_img" loading="lazy" aria-hidden="true" />
      </footer>
    </BrowserRouter>
  )
}

export default App