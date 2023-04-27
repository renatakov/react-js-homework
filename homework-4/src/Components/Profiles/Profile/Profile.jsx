const Profile = (props) => {
return(
    <div className="profile">
        <h2>{props.username}</h2>
        <p>{props.email}</p>
    </div>
)
}

export default Profile;