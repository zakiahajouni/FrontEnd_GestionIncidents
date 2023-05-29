import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Home';

const Nav = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg  bg-body-tertiary bg-primary">
                <div class="container-fluid">
                    <a class="navbar-brand text-white fw-bold" href="/">
                        <h3>Gestion incidents</h3>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            
                        </ul>
                        
                    </div>
                </div>
            </nav>
            <div>
                <Home />
            </div>
        </>
    )
}

export default Nav