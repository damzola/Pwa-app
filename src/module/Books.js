import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
function Book() {
    const [book, setBook] = useState([]);
    useEffect(() => {
        axios.get('https://www.googleapis.com/books/v1/volumes?q=react&key=AIzaSyDSlj2MHXFdMeq2Yg7lr4ZBT_6wzdWkcdk').then((res) => {
            setBook(res.data.items || []);
            console.log(res.data.items);
        })
            .catch((err) => {
                console.error(err);
            });
    }, []);
    return (
        <>
            <div className="theme">
                <div className=" text-white-50">
                    <h2 className="bg-black text-white-50 p-1 "> Latest Books (2000s)</h2>
                     </div>
                    <div className="col-lg-4 col-mg-6 col-sm-12 text-light">
                        <div>
                            <h3>1000 chairs</h3>
                            <div className="d-flex justify-content-center align-items-center">

                                <a href="image/book6.jpg">
                                    <img src="image/book6.jpg" alt="ebony" className="img" />
                                </a>
                            </div>

                       

                    </div>
                </div>
                {/* Old books */}

                <div className=" text-white-50">
                    <h2 className="bg-black text-white-50 p-1 "> Old Books (90s)</h2>
                     </div>

                {book.map((books, item) => (
                    <ul key={item}>
                        <li>Title: {books.volumeInfo.title}</li>
                        <li>Author: {books.volumeInfo.authors}</li>
                        <Link to={books.volumeInfo.infoLink}>Visit the link now</Link>
                        <img src={books.volumeInfo.imageLinks.thumbnail} alt="" /><br />
                        <i>{books.volumeInfo.publishedDate}</i>
                    </ul>
                ))}
            </div>

        </>
    )

}
export default Book