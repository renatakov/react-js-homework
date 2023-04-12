import React from 'react';
import s from './Profile.module.css'

class Profile extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    }
    deleteProfile = () => {
        
    }
    render() {
        return (
            <div className={s.profileContainer}>
                <h1>{this.props.name}</h1>
                <p>Email: {this.props.email} </p>
                <p>Phone: {this.props.phone}</p>
                <p>Address: {this.props.address}, {this.props.city}</p>
                <button className={this.props.key}  onClick={this.deleteProfile}>Delete Profile</button>
            </div>
        )
    }
}

export default Profile;
