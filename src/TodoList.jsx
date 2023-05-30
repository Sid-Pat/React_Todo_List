import {React,useState,useEffect} from 'react';
import TodoItem from './TodoItem';
import List from '@mui/material/List';
import TodoForm from './TodoForm';
import {Box,Typography} from '@mui/material';


const getInitialTodos = () => {
    const data = JSON.parse(localStorage.getItem("todos"));
    if(!data) return [];
    return data;
}

export default function CheckboxList() {
const [todos,setTodos] = useState(getInitialTodos);

useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos));
},[todos])

const removeTodo = (id) => {
    setTodos((curr) => 
        curr.filter((t)=>t.id!==id))
}

const toggleTodo = (id) => {
    setTodos((curr)=>{
        return curr.map((t)=> {
            if(t.id===id) return {...t,completed:!t.completed};
            return {...t};
        })}
    )
}

const addTodo = (text) => {

    setTodos((curr) => {
        return [...curr,{text:text,id:crypto.randomUUID(),completed:false}]
    })
    
}

  return (
    <Box 
        sx={{
            display:"flex",
            justifyContent:"center",
            flexDirection:"column",
            alignItems:"center",
            m:5,
            border:"2px solid black",
        }}
    >

        <Typography variant="h2" component="h2" sx={{flexGrow:1}}>
            Todo List
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {todos.map((value) => {
            const labelId = `checkbox-list-label-${value.id}`;

            return ( 
                <TodoItem 
                    key={value.id} 
                    value={value} 
                    labelId={labelId} 
                    removeTodo={()=> removeTodo(value.id)}
                    toggleTodo={()=>toggleTodo(value.id)}
                />
                );
            })}
            <TodoForm addTodo={addTodo}/>
        </List>
    </Box>
  );
}
