import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

const Side = () => {
    return (
        <>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-2 sd">
                        <a class="navbar-brand text-white fw-bold " href="/">
                            <h3>Gestion incidents</h3>
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
                </div>
                </div>
                
            </div>




        </>

    )
}

export default Side