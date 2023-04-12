import React from 'react';
import Profile from '../Profile/Profile';
import s from "./Profiles.module.css"
class Profiles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profiles: [
                {
                    id: '1',
                    name: 'John Doe',
                    email: 'kenaa@example.com',
                    phone: '1234567890',
                    address: '1234 Main St',
                    city: 'New York',
                },
                {
                    id: '2',
                    name: 'Alex',
                    email: 'kenaa@example.com',
                    phone: '0123456789',
                    address: '1234 Main St',
                    city: 'San Francisco',
                },
            ],
        }
    }
    deleteProfile = (id) => {
        const filteredProfiles = this.state.profiles.filter(profile => profile.id !== id);
        this.setState({
            profiles: filteredProfiles,
        });
    }


    getAllProfiles = () => {
        return this.state.profiles.map(profile => (
            <Profile
                onDelete={() => this.deleteProfile(profile.id)}
                key={`id-${profile.id}`}
                name={profile.name} 
                email={profile.email} 
                phone={profile.phone}
                city={profile.city}
                address={profile.address}
            />
        ));
    }
    inputNameRef = React.createRef();
    inputEmailRef = React.createRef();
    inputPhoneRef = React.createRef();
    inputAddressRef = React.createRef();
    inputCityRef = React.createRef();
    createProfile = () => {
        this.setState({
            profiles: [...this.state.profiles, {
                id: this.state.profiles.length + 1,
                name: this.inputNameRef.current.value,
                email: this.inputEmailRef.current.value,
                phone: this.inputPhoneRef.current.value,
                address: this.inputAddressRef.current.value,
                city: this.inputCityRef.current.value,
            }],
        });
        this.inputNameRef.current.value = '';
        this.inputEmailRef.current.value = '';
        this.inputPhoneRef.current.value = '';
        this.inputAddressRef.current.value = '';
        this.inputCityRef.current.value = '';
    }


    render() {
        return (
            <div className={s.profilesSection}>
                <h1 className={s.mainTitle}>Profiles</h1>
                <ul>
                    {this.getAllProfiles()}
                </ul>
                <div className={s.createProfileDiv}>
                <h2>Create New Profile</h2>
                <input ref={this.inputNameRef} placeholder='Write Your Name' type="text" />
                <input ref={this.inputEmailRef} placeholder='Write Your Email' type="email" />
                <input ref={this.inputPhoneRef} placeholder='Write Your Phone Number' type="phone" />
                <input ref={this.inputAddressRef} placeholder='Write Your Adress' type="text" />
                <input ref={this.inputCityRef} placeholder='Write Your City' type="text" />
                <button onClick={this.createProfile}>Create Profile</button>
                </div>
            </div>
        );
    }
}

export default Profiles;