import React from 'react'
import { List, ListItem, ListItemText } from '@material-ui/core';

function todo(props) {
    return (
        <List>
            <ListItem>
                <ListItemText primary={props.text} secondary="Todo" />
            </ListItem>
        </List>
    )
}

export default todo;