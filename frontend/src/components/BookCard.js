import React, { useState } from 'react';

export default function BookCard(props){
    let {title, author, isbn, publisher} = props;

    return (
        <div className='book-card'>
            <h4>{title}</h4>
            <p>{publisher}</p>
            <span>{isbn}</span>
            <h5>{author}</h5>
        </div>
    )
}