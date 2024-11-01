import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Portfolio from './components/Portfolio'
import { HelmetProvider } from 'react-helmet-async';

function App() {

  return (
    <>
    <HelmetProvider>
    <Portfolio/>
    </HelmetProvider>
     
    </>
  )
}

export default App
