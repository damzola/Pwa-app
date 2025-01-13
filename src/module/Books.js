import React, { useEffect, useState } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';
function Book(){
    const [book, setBook] = useState([]);
    useEffect(()=>{
        axios.get('https://www.googleapis.com/books/v1/volumes?q=react&key=AIzaSyDSlj2MHXFdMeq2Yg7lr4ZBT_6wzdWkcdk').then((res)=>{
         setBook(res.data.items || []);
            console.log(res.data.items);
        })
        .catch((err) => {
            console.error(err);
          });
    },[]);
    return(
        <>
        <div className="theme">
            <h1>This is a general book section</h1>
            {book.map((books, item)=>(
                <ul key={item}>
                    <li>Title: {books.volumeInfo.title}</li>
                    <li>Author: {books.volumeInfo.authors}</li>
                    <Link to={books.volumeInfo.infoLink}>Visit the link now</Link>
                    <img src={books.volumeInfo.imageLinks.thumbnail} alt=""/><br/>
                    <i>{books.volumeInfo.publishedDate}</i>
                </ul>
            ))}
        </div>
        
        </>
    )
    
}
export default Book