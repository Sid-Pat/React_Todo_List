import {React,useState} from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function TodoItem({value,labelId,removeTodo,toggleTodo}) {
  return (
    <>
    
          <ListItem 
            secondaryAction={
              <IconButton edge="end" aria-label="comments" onClick={removeTodo}>
                <DeleteIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={value.completed}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                  onChange={toggleTodo}
                />
              </ListItemIcon>
              {(value.completed) && <ListItemText sx={{textDecoration:"line-through"}} id={labelId} primary={`${value.text}`} />}
              {(!value.completed) && <ListItemText id={labelId} primary={`${value.text}`} />}
            </ListItemButton>
          </ListItem>
    </>
  )
}

export default TodoItem