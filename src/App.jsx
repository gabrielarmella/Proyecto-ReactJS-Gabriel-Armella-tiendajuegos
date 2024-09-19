import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import { CarritoProvider } from './context/CarritoContext';


const App = () => {
  return (
    <>
    <BrowserRouter>
     <carritoProvider>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/categoria/:idCategoria' element={<ItemListContainer/>}/>
        <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
      </Routes>
     </carritoProvider>
    </BrowserRouter>
      
      
    </>
  );
};

export default App