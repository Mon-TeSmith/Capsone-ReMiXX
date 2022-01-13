import { useParams } from "react-router";


const Profile = () => {
    const { name } = useParams();
    return (
        <div>
            <h1 className="title is-1">"Profile Page</h1>
                <article className="message is-dark" style={{ marginTop: 40 }}>
                    <div className="message-header">
                        <p>{name}</p>
                    </div>
                    <p>className="message-body"</p>
                     
            </article>
        </div>
    );
};

export default Profile;