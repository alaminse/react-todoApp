import React, { useState } from 'react';
import { List, ListItem, ListItemText, Modal, Button, Input } from '@material-ui/core';
import db from './firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { makeStyles } from '@material-ui/core/styles';

// modal style
const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absilute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

function Todo(props) { 
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState();

    const handleOpen = () => {
        setOpen(true);
    }
    const updateTodo = () => {
        // update the todo with the new input text
        db.collection('todos').doc(props.todo.id).set({
            todo: input
        }, {merge: true});
        setOpen(false);
    }

    return (
        <>
        <Modal
        open={open}
        onClose={e => setOpen(false)} >
            <div className={classes.paper}>
                <h1>modle</h1>
                <Input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)}/>
                <Button style={{cursor: 'pointer'}} variant="contained" color="secondary" onClick={updateTodo}>Update Todo</Button>
            </div>
        </Modal>

        <List>
            <ListItem> 
                <ListItemText primary={props.todo.todo} secondary="To Do 📝" />
            </ListItem>
            <button onClick={e=> setOpen(true)}>Edit me</button>
            <DeleteForeverIcon style={{cursor: 'pointer'}} variant="contained" color="secondary" onClick={event => db.collection('todos').doc(props.todo.id).delete()} />
        </List>
        </>
    )
}

export default Todo;

// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link,
//     useParams
//   } from "react-router-dom";
//   import Todo from './Todo/Todo';
  
//   function App() {
    
//     return (
//       <>
//       <Router>
//       <Switch>
//         <Route path="/todo">
//           <Todo />
//         </Route>
//         <Route exact path="/">
//           <Home />
//         </Route>
//       </Switch>
//       </Router>
//       </>
//     );
//   }
  
//   function Home() {
//     return (
//       <div>
//         <h2>Home</h2>
//         <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/todo">Todo</Link>
//             </li>
//           </ul>
//       </div>
//     );
//   }
  