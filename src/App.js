import './App.css';
import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import usersReducers from "./store/reducer/user";

import Users from './Pages/Users';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
function App() {
  const store = createStore(usersReducers);
  return (
    <Provider store={store}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/users' element={<Users />} />
          </Routes>
    </Provider>
  );
}

export default App;
