import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
const currentTime = new Date()
const notesStore = [
  {
    title: 'Note 1',
    text: 'This is the first note',
    time: currentTime.toLocaleString(),
  },
  {
    title: 'Note 2',
    text: 'This is the second note',
    time: currentTime.toLocaleString(),
  },
]

console.log(notesStore)

const root = ReactDOM.createRoot(document.getElementById('root'));
const rerender = (store) => {
  root.render(
      <App 
      store = {store}
      rerender = {rerender}
      />
  );
}
rerender(notesStore)


reportWebVitals();
