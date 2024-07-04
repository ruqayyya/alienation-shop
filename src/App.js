
import React from 'react'
import Home from './pages/Home'
import GlobalContext from './utils/MainContext'

const App = () => {
  return (
    <GlobalContext>
    <Home/>
    </GlobalContext>
  )
}

export default App
