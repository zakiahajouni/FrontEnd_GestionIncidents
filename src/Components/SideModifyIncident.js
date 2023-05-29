import React from 'react'
import { Link } from 'react-router-dom'
import ModifyIncident from './ModifyIncident'

const SideModifyIncident = () => {
    return (
        <>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-2 sd">
                        <a class="navbar-brand text-white fw-bold " href="/"><svg width="40" height="40" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
                            <rect width="100" height="100" fill="#B98FF8" />
                            <text class="fw-bold" x="20" y="60" font-size="40" fill="#fff" font-family="Arial">GESTION INCIDENT</text>
                        </svg>
                        </a>
                        <hr class="text-light" />
                        <ul class="nav flex-column mt-3">
                            
                            <li class="nav-item">
                                <Link class="nav-link active text-light" to="/sideincident">Incidents</Link>
                            </li>
                            
                            
                            <li class="logout">
                                <hr class="text-light" />
                                <a class="nav-link text-light mb" href="/"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z" />
                                    <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
                                </svg><span class='mx-3'>Logout</span></a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-10 ">
                        <ModifyIncident/>
                    </div>
                </div>

            </div>
        </>
    )
}

export default SideModifyIncident