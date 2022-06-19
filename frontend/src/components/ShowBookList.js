import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
import ShowBookDetails from './ShowBookDetails';
import BookCard from './BookCard';

export default function ShowBookList(){
    const [bookObj, setBookObj] = useState([]);

    axios
        .get('/')
        .then(result => setBookObj([...result]))
        .catch(err=> console.log(err));

    return (
        <div>
            {bookObj.map((book)=> <p>{<BookCard book={book} />}</p>)};
        </div>
    )

    
}