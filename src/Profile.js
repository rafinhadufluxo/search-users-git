import React from "react";

const Profile = ({ user }) => (
    <div>
        <div className="row">
            <div className="col-md-4">
                <div className="card" style={{ width: '18rem' }}>
                    <img className="card-img-top" src={user.avatar_url} alt="User Avatar"/>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            Repositórios:
                            <span className="badge bg-success">{user.public_repos}</span>
                        </li>
                        <li className="list-group-item">
                            Seguidores:
                            <span className="badge bg-primary">{user.followers}</span>
                        </li>
                        <li className="list-group-item">
                            Seguindo:
                            <span className="badge bg-danger">{user.following}</span>
                        </li>
                    </ul>
                    <div className="card-body">
                        <a href={user.html_url} className="btn btn-primary position-relative">Ver Perfil</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Profile;
