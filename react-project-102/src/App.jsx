import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from '../components/header.jsx'
import Entry from '../components/entry.jsx'
import data from './assets/data.js' 

function App() {
  const dataDetails= data.map((detail)=>{
    return(
      <Entry 
        key={detail.id}
        img={detail.img}
        title={detail.title}
        country={detail.country}
        googleMapsLink={detail.googleMapsLink}
        dates={detail.dates}
        text={detail.text}
      />
    )
  })

  return (
    
      <div className='whole-body'>
        < Header />
        {dataDetails}
      </div>
  )
}

export default App
