import Notes from './Components/Notes/Notes';

const App = (props) => {
  return (
    <div className="App">
      <Notes 
      store={props.store}
      />
    </div>
  );
}

export default App;
