import React, { useEffect, useState } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';
function Home(){
    const [book, setBook] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    
    

    useEffect(()=>{
        axios.get('https://www.googleapis.com/books/v1/volumes?q=*&maxResults=40&key=AIzaSyDSlj2MHXFdMeq2Yg7lr4ZBT_6wzdWkcdk').then((res)=>{
         const findbooks = (res.data.items || []);
         const selectbooks = shuffleArray(findbooks);
         const id = removeDuplicates(selectbooks)
         setBook(id.slice(0, 7)); 
        //  console.log(res.data.items);      
        })

        .catch((err) => {
            console.error(err);
          });
    },[]);
    //Remove duplication display
    const removeDuplicates = (books) => {
        const uniqueBooks = [];
        const seenIds = new Set();
      
        for (const book of books) {
          if (!seenIds.has(book.id)) {
            uniqueBooks.push(book);
            seenIds.add(book.id);
          }
        }
      
        return uniqueBooks;
      };
      //Return a random books
    const shuffleArray = (Array) =>{
        for(let i = Array.length - 1; i > 0; i--){
            const see = Math.floor(Math.random() * (i + 1));
            [Array[1], Array[see]] = [Array[see], Array[i]];
        }
        return Array;
    }
    //PAGINATION
    const itemperpage = 7;

    const lastPage = currentPage * itemperpage;
    const firstPage = lastPage - itemperpage;
    const showBook = book.slice(firstPage, lastPage);

    const handleChangePage = (itemperpage)=>{
        setCurrentPage(itemperpage);
        console.log("page changing", itemperpage);
    };
    const total = Math.ceil(book.length / itemperpage);

    

    return(
        <>
        <div className="theme container-fluid"> 
       <div className="theme-search text-black ps-2 pe-2">
        <div className=" row shadow bg-white shadow-lg rounded-bottom-4 mb-32">
        <h1 className="display-2 col-lg-5 col-md-6 col-sm-12">Reading is an habit, so you too can master it</h1>
        <img className="col-lg-7 col-md-6 col-sm-12 img rounded-end-pill " src="/image/reading.jpg" alt="Readers"/>
        </div>                    

       </div>

       <div className=" container-fluid">
        <h2 className="border-0 bg-black outline-0 text-white-50 p-1">Random Books</h2>
        {showBook.map((books)=>(
            <div className="mb-2 pt-2  " >
        <div className="d-grid gap-2 d-md-flex justify-content-md-start" key={book.id}>
            <div>                
                <div className="d-flex justify-content-center align-items-center"> 
                <Link to={books.volumeInfo.infoLink} target="_head"> 
                {books.volumeInfo.imageLinks?.thumbnail ? (
                    <img src={books.volumeInfo.imageLinks.thumbnail} alt="Book FrontPage"/>
                ): (<img className="img-thumb" src="/image/bookIcon.svg" alt="check" />
                )}                
                </Link>
                </div>
                </div>                
                <i>Title: {books.volumeInfo.title}</i>
                 <i>Author: {books.volumeInfo.authors}</i>
                 <p>Description: {books.volumeInfo.description}</p>

            </div>                   
        
        </div>
        ))}            
       
       </div>
       <div>
        
        
      </div>
      <div>
      <ul className="pagination justify-content-end pagination-md ">
        <li
        key='previous'
          className={`page-link ${currentPage === 1 ? "disabled" : ""}`}
          onClick={() => currentPage > 1 && handleChangePage(currentPage - 1)}
        >
          Previous
        </li>
        {Array.from({ length: total }, (_, index) => (
          <li
            key={index + 1}
            className={`page-link ${currentPage === index + 1 ? "active" : ""}`}
            onClick={() => handleChangePage(index + 1)}
          >
            {index + 1}
          </li>
        ))}
        <li
        key='next'
          className={`page-link ${currentPage === total ? "disabled" : ""}`}
          onClick={() => currentPage < total && handleChangePage(currentPage + 1)}
        >
          Next
        </li>
      </ul>
    </div>

       </div>
        </>
    )
}
export default Home