import React, { useEffect } from "react";
import MyImage from '../assets/da.png'
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const ModifyIncident = () => {

    const [description, setDescription] = React.useState('');
    const [title, setTitle] = React.useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/publications/${id}`)
            .then((response) => {
                setDescription(response.data.description);
                setTitle(response.data.title);
            })
        }, [id]);

        const data = {
            title: title,
            description: description,
        };

        function updateIncident(e) {
            e.preventDefault();
            axios.put(`http://localhost:8000/api/publications/${id}`, data)
                .then((response) => {
                    navigate('/listincident');
                })
        }
        





    return (
        <>
            
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />

            <div id="contact" class="contact-area section-padding mt-3">
                <div class="container">
                    <div class="section-title text-center">
                        <h1 class='text-primary '>Modify Incident</h1>

                    </div>
                    <div class="row">
                        <div class="col-lg-7">
                            <div class="contact">
                                <form >
                                    <div class="row">
                                        
                                        
                                        <div class="form-group col-md-12">
                                            <input type="text" name="subject" class="form-control" placeholder="Subject" required="required" value={title} onChange={(e) => setTitle(e.target.value)} ></input>
                                        </div>
                                        <div class="form-group col-md-12">
                                            <textarea rows="6" name="message" class="form-control" placeholder="Your Message" required="required" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                                        </div>
                                        <div class="col-md-12 text-center">
                                            <button className='btn btn-primary' type="submit" value="Send message" name="submit" id="submitButton" title="Submit Your Message!" onClick={updateIncident}>Modify incident </button>
                                        </div>
                                
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <img src={MyImage} alt="s" width="500px"></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModifyIncident