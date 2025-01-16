import axios from "axios";
import { useState, useEffect } from "react";
import {useLocation, Link} from 'react-router-dom';

function Search(){
    const location= useLocation();
    const [search, setSearch] = useState([]);
    const query = new URLSearchParams(location.search).get('searchQuery') || '';
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false) 
    useEffect(()=>{
        if(query){
          axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyDSlj2MHXFdMeq2Yg7lr4ZBT_6wzdWkcdk`).then((res)=>{
        setSearch(res.data.items || []);
        setError(false);
        setLoading(false);
        });  
       
        }
        
    },[query]);
    return(
        <>
        <div className="theme ">
            <div className="container-fluid">            
            <h1>Search Outcome</h1>
            {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {!loading && !search.length && <p>No results found</p>}
      <div className="container">
  <div className="row g-3">
    {search.map((index) => (
      <div className="col-lg-4 col-md-6 col-sm-12" key={index.id}>
        <div className="card h-100"> 
          <h4 className="card-header">Title: {index.volumeInfo.title}</h4>
          <div className="card-body "> 
            
            <Link to={index.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer">
              <img
                className="img-fluid rounded img-thumb " 
                src={index.volumeInfo.imageLinks?.thumbnail || 'No Image'}
                alt={index.volumeInfo.title}
              />
            </Link>
          </div>
          <p className="card-footer">Author: {index.volumeInfo.authors?.join(", ") || "Unknown"}</p>
        </div>
      </div>
    ))}
  </div>
</div>
          
            
            </div>
        </div>
        </>
    )
}
export default Search