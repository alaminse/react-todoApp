import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { Input, InputLabel, FormControl } from '@material-ui/core';
import Todo from './Todo';
import db from '../firebase';
import firebase from "firebase";
import logo from '../img/logo.png';

const Home = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

  // when the app loads, we need to listen to the database and fetch new todos as they get added/remove
  useEffect( () => {
     db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      //console.log(snapshot.docs.map(doc => doc.data().timestamp));
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo:doc.data().todo})))
    })
  }, [])

  const addTodo = (event) => {
    // this will fire off when we click the button
    event.preventDefault(); //will stop the REFRESHING 
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setTodos([...todos, input]); //spreading array keep first value that is stored then store input value.
    setInput(''); //clear Input field after

  }

    return (
    <div className="content">
    <form action="">
        <img src={logo} alt=""/>
        <h2>Hello To Do app 📝</h2>
        <FormControl>
            <InputLabel>Write To Do 📝</InputLabel>
            <Input value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>
        <Button style={{ marginTop: '10px' }} onClick={addTodo} type='submit' disabled={!input} variant="contained" color="primary">
            Add to do
        </Button>
    </form>
     <div>
        {
            todos.map(todo => (
            <Todo todo={todo}/>
            ))
        }
     </div>
    </div>
    );
}

export default Home;
