import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function Heading(){
  const [searchQuery, setSeachQuery] = useState("");
  const navigate = useNavigate();
  const handleSearch=(e)=>{ 
    e.preventDefault();
    if(searchQuery.trim()){
        navigate(`/search?searchQuery=${encodeURIComponent(searchQuery)}`);
    }

}
    return(
        
      <div className="shadow sticky-top">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
            <img className="w-25 bg-black rounded-pill" src="/image/wind.png" alt=""/>
            Pwa-app</Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                       
            <form className="ms-auto" onSubmit={handleSearch}>
          <div className="input-group mt-1">
            <input
              type="search"
              placeholder="Search For Something"
              className="form-control input-group-text shadow-0 border-2"
              value={searchQuery}
              onChange={(e)=>setSeachQuery(e.target.value)}
            />
            <input
              type="submit"
              value="Search now"
              className="border-2 btn btn-success shadow"
            />
          </div>
        </form>
        </div>
          </div>
        </nav>
    </div>
    
        
    )
}
export default Heading