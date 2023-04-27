import {Link} from 'react-router-dom';

const Home = () => {
    return(
        <div>
            <h1>This is Home Page!</h1>
            <Link to="/profiles">Profiles</Link>
        </div>
    )
}

export default Home;