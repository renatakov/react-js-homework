import React from 'react';
import s from './Profile.module.css'

class Profile extends React.Component {


    render() {
        return (
            <div className={s.profileContainer}>
                <h1>{this.props.name}</h1>
                <p>Email: {this.props.email} </p>
                <p>Phone: {this.props.phone}</p>
                <p>Address: {this.props.address}, {this.props.city}</p>
                <button onClick={this.props.onDelete}>Delete Profile</button>
            </div>
        )
    }
}

export default Profile;
