import React, { useState, useEffect } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import { Input, InputLabel, FormControl } from '@material-ui/core';
import Todo from './Todo';
import db from './firebase';
import firebase from "firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // when the app loads, we need to listen to the database and fetch new todos as they get added/remove
  useEffect( () => {
     db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      //console.log(snapshot.docs.map(doc => doc.data()));
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
  }, [])

  const addTodo = (event) => {
    // this will fire off when we click the button
    //console.log('I\'m clicked');
    event.preventDefault(); //will stop the REFRESHING 
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setTodos([...todos, input]); //spreading array keep first value that is stored then store input value.
    setInput(''); //clear Input field after

  }
  return (
    <div className="App-header">
      <form action="">
        <h1>Hello To Do app</h1>
        <FormControl>
          <InputLabel>Write To Do</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>
        <Button style={{ marginTop: '10px' }} onClick={addTodo} type='submit' disabled={!input} variant="contained" color="primary">
          Add to do
        </Button>
      </form>

      <ul>
        {
          todos.map(todo => (
            <Todo text={todo}/>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
// git branch aa  
// git checkout -b feature_branch_name 
// git push -u origin faltu_para

git init
git add .
git commit -m "before deploy in firebase"