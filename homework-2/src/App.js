import Notes from './Components/Notes/Notes';

const App = (props) => {
  return (
    <div className="App">
      <Notes
        store={props.store}
        rerender={props.rerender}
      />
    </div>
  );
};

export default App;

