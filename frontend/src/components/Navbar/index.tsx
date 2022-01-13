import {ReactComponent as GitHubIcon } from 'assets/img/github.svg';
import './navbar.css'

function Navbar() {
    return(
        <header>
        <nav className="container">
          <div className="dsmovie-nav-content">
            <h1>DS Movie</h1>
            <a href="https://github.com/luisbelisario" className='dsmovie-link-container'>
              <div className='dsmovie-contact-container'>
                <GitHubIcon />
                <p className='ds-movie-contact-link'>/luisbelisario</p>
              </div>
            </a>
          </div>
        </nav>
      </header>
    )
}

export default Navbar;