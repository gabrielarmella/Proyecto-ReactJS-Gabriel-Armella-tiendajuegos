import React from 'react'
import NavBar from './assets/components/NavBar/NavBar'
import ItemListContainer from './assets/components/ItemListContainer/ItemListContainer'
import ItemCount from './assets/components/ItemCount/ItemCount'

const App = () => {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Mis Juegos"/>
      <ItemCount stock={5}/>
    </>
  )
}

export default App