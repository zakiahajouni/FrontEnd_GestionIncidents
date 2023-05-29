import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const IncidentTab = () => {

    const [incidents, setIncidents] = React.useState([])

    const getIncidents = async () => {
        const response = await axios.get('http://localhost:8000/api/publications')
        setIncidents(response.data['hydra:member'])
    }

    React.useEffect(() => {
        getIncidents()
    }, [])



    // delete incident
    const deleteIncident = async (id) => {
        await axios.delete(`http://localhost:8000/api/publications/${id}`)
        getIncidents()
    }







    return (
        <>
            <div class="col-md-10 mt-3">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 card-margin">
                            <div class="card search-form">
                                <div class="card-body p-0">
                                    <form id="search-form">

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="card card-margin">
                                <div class="card-body">
                                    <div class="row search-body">
                                        <div class="col-lg-12">
                                            <div class="search-result">
                                                <div class="result-header">
                                                    <div class="row">
                                                        <div class="col-lg-6">
                                                            <h3>Incident Table :<Link to="/addsideincident"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                                                            </svg></Link></h3>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <div class="result-actions">
                                                                <div class="result-sorting">

                                                                </div>
                                                                <div class="result-views">
                                                                    <button type="button" class="btn btn-soft-base btn-icon">

                                                                    </button>
                                                                    <button type="button" class="btn btn-soft-base btn-icon">

                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="result-body">
                                                    <div class="table-responsive">
                                                        <table class="table widget-26">
                                                            <tbody>
                                                                {incidents.map(incident => (
                                                                    <tr key={incident.id}>
                                                                        <td>
                                                                            <span class="text-primary">{incident.id}</span>
                                                                        </td>

                                                                        <td>
                                                                            <div class="widget-26-job-title">
                                                                                <span class="text-primary">{incident.title}</span>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div class="widget-26-job-info">
                                                                                <span class="text-primary">{incident.description}</span>
                                                                            </div>
                                                                        </td>


                                                                        <td>
                                                                            <div class="">
                                                                                <Link to={`/modifyincident/${incident.id}`}>
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                                                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                                                                    </svg>
                                                                                </Link>

                                                                                <span class="mx-2"></span>
                                                                                <p class="btn" onClick={() => deleteIncident(incident.id)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash2-fill" viewBox="0 0 16 16">
                                                                                <path d="M2.037 3.225A.703.703 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2a.702.702 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671L2.037 3.225zm9.89-.69C10.966 2.214 9.578 2 8 2c-1.58 0-2.968.215-3.926.534-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466-.18-.14-.498-.307-.975-.466z" />
                                                                            </svg></p>

                                                                            </div>
                                                                        </td>
                                                                    </tr>


                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IncidentTab