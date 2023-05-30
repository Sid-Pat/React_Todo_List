import React from 'react'
import ListItem from '@mui/material/ListItem';
import { useState } from 'react';
import Create from "@mui/icons-material/Create"
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

export default function TodoForm({addTodo}) {
const [text,setText] = useState("");
const handleChange = (evt) => {
    setText(evt.target.value);
};

const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
}

  return (
    <ListItem>
        <form onSubmit={handleSubmit}>
            <TextField 
                id="outlined-basic" 
                label="Add-Todo" 
                variant="outlined" 
                value={text}
                onChange={handleChange}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                        <IconButton
                            aria-label="create todo"
                            edge="end"
                            // onClick={handleSubmit}
                            type="submit"
                        >
                            <Create/>
                        </IconButton>
                        </InputAdornment> 
                    )
                }}
                
            />
        </form>
    </ListItem>
  )
}
