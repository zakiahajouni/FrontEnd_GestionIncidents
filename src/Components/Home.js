import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import   Footer  from '../Components/Footer'
import { Link } from 'react-router-dom';
import MyImage from '../assets/major-incident.png'


const Home = () => {
    return (
        <>  
            <div class="container mt-5 d-flex ">
                <div class="col-md-6 bg-img home-desc" ><h1 class="mb-5 text-primary">Gestion des incidents</h1><p class="mb-0">Une application de gestion des incidents est un outil informatique conçu pour aider les organisations à gérer efficacement les incidents, qu'ils soient liés à la sécurité, aux opérations ou à tout autre domaine. L'application permet aux utilisateurs de signaler des incidents, de suivre leur résolution et de générer des rapports sur les tendances et les statistiques.</p>
                <Link to="/menu"><button class="mt-4 btn btn-primary" >User Space</button></Link>
                <Link to="/sideincident"><button class="mt-4 btn btn-primary mx-2" >Admin Space</button></Link>
                </div>
                <img src={MyImage} alt="" width="700" height="550" />
            </div>
            <Footer/>
        </>
    )
}

export default Home