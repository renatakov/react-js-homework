import "./Header.module.css"

const Header = (props) =>{
    const navTitles = [
  { id: "id-1", name: "Home" },
  { id: "id-2", name: "About Us" },
  { id: "id-3", name: "Contacts" },
];
const arrNav = navTitles.map((item)=>{
    return <li key="`${item.id}`">{item.name}</li>
})
return(
    <header>
        <ul>
        {arrNav}
        </ul>
        </header>
)
}

export default Header