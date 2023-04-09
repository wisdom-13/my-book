import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Signin from './page/Signin';
import Add from './page/Add';
import Detail from './page/Detail';
import Edit from './page/Edit';
import NotFound from './page/NotFound';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signin' element={<Signin />} />
      <Route path='/add' element={<Add />} />
      <Route path='/book/:id' element={<Detail />} />
      <Route path='/edit/:id' element={<Edit />} />
      <Route element={<NotFound />} />
    </Routes>
  );
}

export default App;
