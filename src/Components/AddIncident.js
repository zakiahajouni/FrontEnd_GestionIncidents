import React from 'react'
import MyImage from '../assets/glossary-what-is-incident-management-itsm.jpg'

const AddIncidents = () => {
    return (
        <>
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />

            <div id="contact" class=" section-padding mt-3 ">
                <div class="container">
                    <div class=" text-center">
                        <h1 className='text-primary'>Add Incident</h1>
                    </div>
                    <div class="row">
                        <div class="col-lg-7">
                            <div class="contact">
                                <form class="form">
                                    <div class="row">
                                        <div class="form-group col-md-6 mt-2">
                                            <input type="text" name="name" class="form-control" placeholder="Name" required="required"></input>
                                        </div>
                                        
                                        <div class="form-group col-md-12 mt-2">
                                            <input type="text" name="subject" class="form-control" placeholder="Subject" required="required"></input>
                                        </div>
                                        <div class="form-group col-md-12 mt-2">
                                            <textarea rows="6" name="message" class="form-control" placeholder="Your Message" required="required"></textarea>
                                        </div>
                                        <div class="col-md-12 text-center mt-2" >
                                            <button type="submit" value="Send message" name="submit" id="submitButton" class="btn-primary btn " title="Submit Your Message!">Send Message</button>
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

export default AddIncidents