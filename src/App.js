import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Todo from './Todo/Home';

function App() {

  return (
    <>
      <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/todo">
          <Todo />
        </Route>
      </Switch>
      </Router>
    </> 
  );
}
function Home() {
  return (
    <div>
       <ul>
           <li>
             <a href="/todo">Todo</a>
           </li>
         </ul>
     </div>
  );
}

export default App;
// git branch aa  
// git checkout -b feature_branch_name 
// git push -u origin faltu_para

// git init
// git add .
// git commit -m "before deploy in firebase"
// git remote add origin https://github.com/alaminse/react-todoApp.git
// git branch aa // make a new branch name is  aa
// git checkout -b aa //switch branch which name is aa

  
  // const [todos, setTodos] = useState([]);
  // const [input, setInput] = useState('');

  // // when the app loads, we need to listen to the database and fetch new todos as they get added/remove
  // useEffect( () => {
  //    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
  //     //console.log(snapshot.docs.map(doc => doc.data().timestamp));
  //     setTodos(snapshot.docs.map(doc => ({id: doc.id, todo:doc.data().todo})))
  //   })
  // }, [])

  // const addTodo = (event) => {
  //   // this will fire off when we click the button
  //   event.preventDefault(); //will stop the REFRESHING 
  //   db.collection('todos').add({
  //     todo: input,
  //     timestamp: firebase.firestore.FieldValue.serverTimestamp()
  //   })
  //   setTodos([...todos, input]); //spreading array keep first value that is stored then store input value.
  //   setInput(''); //clear Input field after

  // }
      {/* <form action="">
        <img src={logo} alt=""/>
        <h1>Hello To Do app 📝</h1>
        <FormControl>
          <InputLabel>Write To Do 📝</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>
        <Button style={{ marginTop: '10px' }} onClick={addTodo} type='submit' disabled={!input} variant="contained" color="primary">
          Add to do
        </Button>
      </form>

      <ul>
        {
          todos.map(todo => (
            <Todo todo={todo}/>
          ))
        }
      </ul>*/}