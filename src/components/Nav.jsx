import React, { useState } from 'react'
import './Nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { NavLink, Link } from 'react-router-dom'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Nav() {
    const [open, setOpen] = useState(false)
    return (
        <header className="site-nav">
            <div className="nav-inner">
                <div className="nav-left">
                    <Link className="logo" to="/" aria-label="home">
                        <span className="logo-brackets">[</span>
                        <span className="logo-char">PS</span>
                        <span className="logo-brackets">]</span>
                    </Link>
                </div>

                <nav className="nav-center" aria-label="main navigation">
                    <NavLink className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'} to="/about">About</NavLink>
                    <NavLink className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'} to="/work">Work</NavLink>
                    <NavLink className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'} to="/learning">Learning</NavLink>
                    <NavLink className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'} to="/connect">Contact</NavLink>
                </nav>

                <div className="nav-right">
                    <div className="socials">
                        <a className="icon" href="https://www.linkedin.com/in/sandaruwan-hapudeniya" aria-label="LinkedIn" title="LinkedIn">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a className="icon" href="https://github.com/Prabod-Sandaruwan" aria-label="GitHub" title="GitHub">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>

                    <span className="divider" aria-hidden="true" />

                    <button className="theme-toggle" aria-label="Toggle light mode">
                        <svg className="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2 12h2M20 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                    </button>
                    <button
                        className="mobile-toggle"
                        aria-label="Toggle menu"
                        aria-expanded={open}
                        onClick={() => setOpen(v => !v)}
                    >

                        <FontAwesomeIcon className='burger' icon={faBars} />
                    </button>
                </div>
                                {open && (
                                        <div className="mobile-menu" role="menu">
                                                <NavLink className="nav-link" to="/about" role="menuitem" onClick={() => setOpen(false)}>About</NavLink>
                                                <NavLink className="nav-link" to="/work" role="menuitem" onClick={() => setOpen(false)}>Work</NavLink>
                                                <NavLink className="nav-link" to="/learning" role="menuitem" onClick={() => setOpen(false)}>Learning</NavLink>
                                                <NavLink className="nav-link" to="/connect" role="menuitem" onClick={() => setOpen(false)}>Contact</NavLink>
                                                <div className="mobile-socials">
                                                    <a className="icon" href="https://www.linkedin.com/in/sandaruwan-hapudeniya" aria-label="LinkedIn" title="LinkedIn">
                                                        <FontAwesomeIcon icon={faLinkedin} />
                                                    </a>
                                                    <a className="icon" href="https://github.com/Prabod-Sandaruwan" aria-label="GitHub" title="GitHub">
                                                        <FontAwesomeIcon icon={faGithub} />
                                                    </a>
                                                </div>
                                        </div>
                                )}
            </div>
        </header>
    )
}
