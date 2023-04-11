import React from 'react';
import Profile from '../Profile/Profile';
import s from "./Profiles.module.css"
class Profiles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profiles: [
                {
                    id: 1,
                    name: 'John Doe',
                    email: 'kenaa@example.com',
                    phone: '1234567890',
                    address: '1234 Main St',
                    city: 'New York',
                },
                {
                    id: 2,
                    name: 'Alex',
                    email: 'kenaa@example.com',
                    phone: '0123456789',
                    address: '1234 Main St',
                    city: 'San Francisco',
                },
            ],
        }
    }

    getAllProfiles = () => {
        return this.state.profiles.map(profile => (
            <Profile 
                key={profile.id} 
                name={profile.name} 
                email={profile.email} 
                phone={profile.phone}
                city={profile.city}
                address={profile.address}
            />
        ));
    }

    render() {
        return (
            <div>
                <h1>Profiles</h1>
                <ul>
                    {this.getAllProfiles()}
                </ul>
                <div className={s.createProfileDiv}>
                <h2>Create New Profile</h2>
                <input placeholder='Write Your Name' type="text" />
                <input placeholder='Write Your Email' type="text" />
                <input placeholder='Write Your Phone Number' type="text" />
                <input placeholder='Write Your Adress' type="text" />
                <input placeholder='Write Your City' type="text" />
                <button>Create Profile</button>
                </div>
            </div>
        );
    }
}

export default Profiles;