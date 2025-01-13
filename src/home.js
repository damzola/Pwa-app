import React, { useEffect, useState } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';
function Home(){
    const [book, setBook] = useState([]);
    const [latest, setLatest] = useState([]);
    const [data, setDate] = useState('');
    useEffect(()=>{
        axios.get('https://www.googleapis.com/books/v1/volumes?q=javascript&key=AIzaSyDSlj2MHXFdMeq2Yg7lr4ZBT_6wzdWkcdk').then((res)=>{
         setBook(res.data.items || []);
            // console.log(res.data.items);
        })
        .catch((err) => {
            console.error(err);
          });
    },[]);

    return(
        <>
        <div className="theme"> 
       <div className=" theme-search text-black">
        <div className="">
        <h1 className="display-1">Reading is an habit, so you too can master it</h1>
        </div>
        <h4 className="text-white-50">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and </h4>       
        <div className="d-grid gap-2 d-md-flex justify-content-md-start text-white-50">
            <h2  className=""> Latest Books</h2>
          
        </div>
          <div className="col-lg-4 col-mg-6 col-sm-12 text-light">
        <div>
            <h3>1000 chairs</h3>
        <div className="d-flex justify-content-center align-items-center">
            
            <a href="image/book6.jpg"> 
                <img src="image/book6.jpg" alt="ebony" className=""/></a>
                    </div>
                                
            </div>
           
            
        </div> 
       </div>

       <div className=" container-fluid">
        <h2 className=" btn-outline-seconday b px-4 md-md-2">Random Books</h2>
        {book.map((books, item)=>(
            <div className="mb-2 pt-2  " key={item}>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start" >
            <div>                
                <div className="d-flex justify-content-center align-items-center"> 
                <Link to={books.volumeInfo.infoLink}> 
                <img src={books.volumeInfo.imageLinks.thumbnail} alt=""/></Link>
                </div>
                </div>                
                <i>Title: {books.volumeInfo.title}</i><br/>
                 <i>Author: {books.volumeInfo.authors}</i>
                 <p>Description: {books.volumeInfo.description}</p>

            </div>
                   
        
        </div>
        ))}
        
      
        
       
       </div>


       </div>
        </>
    )
}
export default Home