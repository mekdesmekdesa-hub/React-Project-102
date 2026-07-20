import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from '../components/header.jsx'
import Entry from '../components/entry.jsx'

function App() {


  return (
    
      <div className='whole-body'>
        < Header />
        <Entry />
      </div>
  )
}

export default App
