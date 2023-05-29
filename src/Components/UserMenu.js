import React from 'react'
import { Link } from 'react-router-dom';
const UserMenu = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-primary">
                <a class="navbar-brand text-white fw-bold mx-2" href="/">
                    <h3>Gestion incidents</h3>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link text-light btn btn-primary"  href="/listincident">See Incident</a>
                        </li>
                        <li class="nav-item ">
                            <Link class="nav-link text-light btn btn-primary" to="/declare">Declare Incident</Link>
                        </li>
                    </ul>
                    <ul class="navbar-nav xx">
                        <li class="nav-item">
                            <a class="nav-link text-white" href="/">Logout <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z" />
                                <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
                            </svg></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default UserMenu