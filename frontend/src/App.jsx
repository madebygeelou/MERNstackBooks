import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import CreateBooks from './pages/CreateBooks';
import ViewBook from './pages/ShowBook';
import EditBooks from './pages/EditBooks';
import RemoveBook from './pages/DeleteBook';

 const App = () => {
   return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/books/create' element={<CreateBooks />} />
      <Route path='/books/details/:id' element={<ViewBook />} />
      <Route path='/books/edit/:id' element={<EditBooks />} />
      <Route path='/books/delete/:id' element={<RemoveBook />} />
    </Routes>
   )
 }
 
 export default App