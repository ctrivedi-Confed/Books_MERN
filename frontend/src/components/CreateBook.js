import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

export default function CreateBook(){
    const [bookInfo, setBookInfo] = useState({title: '', isbn: '', author: '', publisher: ''}); 

    function changeValue(e) {
        setBookInfo({...bookInfo, [e.target.name]: e.target.value});
    }

    // function clearForm() {
    //     setBookInfo({title: '', isbn: '', author: '', publisher: ''});

    //     for(let  in bookInfo){
    //         let eleName = document.getElementsByName(i.name);
    //     }
    // }

    function submit(e) {
        e.preventDefault();
        console.log(bookInfo);
        axios
            .post('/', bookInfo)
            .then((res) => {
                if(res.status === 200){
                    setBookInfo({title: '', isbn: '', author: '', publisher: ''});
                } else {
                    console.log('Error in adding book: '+ res);
                }
            });
    }

    return (
        <form onSubmit={submit} className='form-container'>
            <label>
                Title:
                <input type='text' name='title' className='form-input' onChange={changeValue}/>
            </label><br />
            <label>
                ISBN:
                <input type='text' name='isbn' className='form-input' onChange={changeValue}/>
            </label><br />
            <label>
                Author:
                <input type='text' name='author' className='form-input' onChange={changeValue}/>
            </label><br />
            <label>
                Publisher:
                <input type='text' name='publisher' className='form-input' onChange={changeValue}/>
            </label><br />
            <input type='submit' value='Create Book' className='form-submit'/>
            {/* <input type='button' value='Clear' onClick={clearForm} className='form-clear' /> */}
        </form>
    );
}