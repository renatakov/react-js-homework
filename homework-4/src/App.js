import {BrowserRouter, Route, Routes} from'react-router-dom';
import Home from "./Components/HomePage/HomePage.jsx"
import About from "./Components/AboutUs/AboutUs.jsx"
import Contacts from "./Components/Contacts/Contacts.jsx"
import Header from "./Components/Header/Header.jsx"
import Profiles from './Components/Profiles/Profiles.jsx';
const App = () => {
  return(
    <div>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contacts/>}/>
      <Route path='/profiles' element={<Profiles/>}/>

    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;
