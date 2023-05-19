import Weather from './Components/Weather/Weather';
import Notes from './Components/Notes/Notes';

const App = (props) => {
  console.log(props.notes)
  return (
    <div>
      <h1>Hello World!</h1>
      <Weather />
      <Notes /> 
    </div>
  );
};

export default App;
