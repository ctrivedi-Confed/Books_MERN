import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import CreateBook from './components/CreateBook';
import ShowBookList from './components/ShowBookList';
import ShowBookDetails from './components/ShowBookDetails';
import UpdateBookInfo from './components/UpdateBookInfo';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' component={<ShowBookList />} />
        <Route path='/create-book' component={<CreateBook />} />
        {/* <Route path='/edit-book/:id' element={<UpdateBookInfo />} />
        <Route path='/show-book/:id' element={<ShowBookDetails />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
