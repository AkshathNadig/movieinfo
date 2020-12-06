import React from 'react'

 function NavBar() {
    return (
        <div>
            <nav className="navbar navar-light bg-dark mb-5">
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand text-white text-lg brand-text" href='#'>
                            Movieseriesinfo
                        </a>
                    </div>
                    <ul className="navbar-nav ml-auto text-light d-inline-block">
                        <li className="navbar-item d-inline-block mr-4">
                            <i className ="fab fa-imdb fa-5x" id="imbd-logo" />
                        </li>
                        <li className="navbar-item d-inline-block mr-4">
                            <i className ="fab fa-react fa-5x" id="react-logo" />
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar