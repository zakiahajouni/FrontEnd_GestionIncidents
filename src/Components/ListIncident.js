import React from 'react';
import UserMenu from './UserMenu';
import axios from 'axios';

const ListIncident = () => {
    const [incidents, setIncidents] = React.useState([]);
    const [comments, setComments] = React.useState([]);
    const [newComment, setNewComment] = React.useState('');


    const getIncidents = async () => {
        const response = await axios.get('http://localhost:8000/api/publications');
        setIncidents(response.data['hydra:member']);
    };

    const getComments = async () => {
        const response = await axios.get('http://localhost:8000/api/commentaires');
        setComments(response.data['hydra:member']);
    };

    React.useEffect(() => {
        getIncidents();
        getComments();
    }, []);


    const addComment = async (e, id) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/commentaires', {
                comment: newComment,
                incidentId: id
            });
            setComments([...comments, response.data]);
            setNewComment('');
        } catch (error) {
            console.error('Error adding comment:', error);
        }
    };

    const handleCommentChange = (e) => {
        setNewComment(e.target.value);
    };

    return (
        <>
            <UserMenu />
            <h2 className="text-center mt-3">List Incident</h2>
            {incidents.map((incident) => (
                <div className="card mb-3 mt-3" key={incident.id}>
                    <div className="card-body">
                        <h5 className="card-title">{incident.title}</h5>
                        <p className="card-text">{incident.description}</p>

                        <form onSubmit={(e) => addComment(e, incident.id)} className="d-flex">
                            <ul>
                                <textarea value={newComment}
                                    onChange={handleCommentChange} name="comment" className="comment" cols="30" rows="10"></textarea>
                            </ul>
                            <button className="btn btn-primary mx-3" type="submit">Comment</button>
                        </form>

                        <h5 className="mt-2 mx-3">Comments:</h5>
                        {comments
                            .filter((comment) => comment.id === incident.id)
                            .map((comment) => (
                                <ul className="list-group list-group-flush" key={comment.id}>
                                    <li className="list-group-item">
                                        <span>{comment.pubuser.nom_utilisateur}</span>
                                        {comment.comment}
                                    </li>
                                </ul>
                            ))}
                    </div>
                </div>
            ))}
        </>
    );
};

export default ListIncident;
