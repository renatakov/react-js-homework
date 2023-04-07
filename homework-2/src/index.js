import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
const currentTime = new Date()
const notesStore = [
  {
    title: 'Note 1',
    description: 'This is the first note',
    time: currentTime,
  }
]

console.log(notesStore)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App 
    store={notesStore}
    />
  </React.StrictMode>
);


reportWebVitals();
