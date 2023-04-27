import React from "react"
import { useState, useEffect } from "react"
import Profile from "./Profile/Profile";
import s from "./Profiles.module.css"
const Profiles = () => {
const [profiles, setProfiles] = useState([
    {
        id: "id-1",
        username: "Renata",
        email: "renata@gmail.com",
    },
    {
        id: "id-2",
        username: "John",
        email: "john@gmail.com",
    }
])
useEffect(()=>{
    getProfiles(profiles)
    console.log("mount")
})
const getProfiles = () =>{
    return profiles.map((profile, i)=>{
        return <Profile
        key={`id-${i}`}
        username={profile.username}
        email={profile.email}
        />
    })
}
const inputNameRef = React.createRef();
const inputEmailRef = React.createRef();


const createNewProfile = () =>{
    setProfiles([
        ...profiles,
            {
                username: inputNameRef.current.value,
                email: inputEmailRef.current.value
            }
    ])
    inputNameRef.current.value = "";
    inputEmailRef.current.value = "";
}
return(
    <div>
    <h1>All Profiles:</h1>
    <ul>
        {getProfiles(profiles)}
    </ul>
    <div className={s.newProfiles}>
        <input ref={inputNameRef} type="text" placeholder="Write Your Name"/>
        <input ref={inputEmailRef} type="email" placeholder="Write Your Email"/>
        <button onClick={createNewProfile}>Create New Profile</button>
    </div>
    </div>
)
}

export default Profiles