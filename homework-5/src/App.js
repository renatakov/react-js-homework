import Weather from './Components/Weather/Weather';
import NotesContainer from './redux/NotesContainer';

const App = () => {
  return (
    <div>
      <h1>Hello World!</h1>
      <Weather />
      <NotesContainer /> 
    </div>
  );
};

export default App;
