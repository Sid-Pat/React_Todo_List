import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CssBaseLine from '@mui/material/CssBaseline';
import TodoList from './TodoList';
import NavBar from './NavBar';
import './App.css'

function App() {

  return (
    <>
      <CssBaseLine />
      <NavBar />
      <TodoList />
    </>
  )
}

export default App
