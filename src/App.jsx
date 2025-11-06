import { useState } from 'react'
import './App.css'
import PinkCard from './components/pinkCard'
import GreenCard from './components/greenCard'
import Phone from './components/phone'
import NotificationCard from './components/notificationCard'
import Particle from './components/particle'
import Linear from './components/linear'


function App() {

  return (
    <>
      <Particle />
      <Linear />
      <NotificationCard />
      <Phone />
      <PinkCard />
      <GreenCard />
    </>
  )
}

export default App
