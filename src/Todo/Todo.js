import React, { useState } from 'react';
import { List, ListItem, ListItemText, Modal, Button, Input } from '@material-ui/core';
import db from '../firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { makeStyles } from '@material-ui/core/styles';
import './Todo.css';
import EditIcon from '@material-ui/icons/Edit';

// modal style
const useStyles = makeStyles((theme) => ({
    paper: {
      alignItems: 'center',
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
        setInput('');
    }

    return (
        <div className="content">
        <Modal
        open={open}
        onClose={e => setOpen(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description" >
            <div className={classes.paper}>
                <h2>EDIT To-Do 📝</h2>
                <Input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)}/>
                <Button disabled={!input} style={{cursor: 'pointer'}} variant="contained" color="secondary" onClick={updateTodo}>Update Todo</Button>
                <Button style={{cursor: 'pointer'}} variant="contained" onClick={e=> setOpen(false)}>Cancle</Button>
            </div>
        </Modal>

        <List className="item">
            <ListItem> 
                <ListItemText primary={props.todo.todo} secondary="To Do 📝" />
                <EditIcon onClick={e=> setOpen(true)} color="primary" />
                <DeleteForeverIcon style={{cursor: 'pointer'}} variant="contained" color="secondary" onClick={event => db.collection('todos').doc(props.todo.id).delete()} />
            </ListItem>
        </List>
        </div>
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
  