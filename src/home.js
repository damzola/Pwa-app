import React from "react"
function Home(){
    return(
        <>
        <div className="theme container-fluid"> 
       <div className="p-3 ">
        <div className="p-2 text-center">
        <h1 className="text-light">Reading is an habit, so you too can master it</h1>
        </div>
        <h4 className="text-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and </h4>
       </div>
       <div className="m-2">
        <h2 className="shadow text-success">Avaliable Books</h2>
       <div className="  row">
        <div className="col-lg-4 col-mg-6 col-sm-12 text-light pb-2 shadow">
            <div>
                
                <div className="d-flex justify-content-center align-items-center"> 
                <a href="image/book1.png"> 
                <img src="image/book1.png" alt="ebony" /></a>
                </div>
                <h3>Ebony</h3>
            </div>
            <i>EBONY is the flagship magazine of Johnson Publishing. Founded in 1945 by John H. Johnson, it still maintains the highest global circulation of any African American-focused magazine.</i>
            <div className="row">
                <button className="btn btn-success w-25 me-2">Download</button> <button className="btn btn-primary w-25">Read More</button>
            </div>
        </div>

        <div className="col-lg-4 col-mg-6 col-sm-12 text-light">
        <div>
                <div className="d-flex justify-content-center align-items-center">
                    <a href="image/book2.jpg"> 
                <img src="image/book2.jpg" alt="ebony" className=""/></a>
                </div>             
                
                <h3>Graphic design</h3>
            </div>
            <i>Graphic design is the flagship magazine of Johnson Publishing. Founded in 1945 by John H. Johnson, it still maintains the highest global circulation of any African American-focused magazine.</i>
            <div className="row">
                <button className="btn btn-success w-25 me-2">Download</button> <button className="btn btn-primary w-25">Read More</button>
            </div>
        </div>
        <div className="col-lg-4 col-mg-6 col-sm-12 text-light">
        <div>
        <div className="d-flex justify-content-center align-items-center">
                     <a href="image/book3.jpg"> 
                <img src="image/book3.jpg" alt="ebony" className=""/></a>
                    </div>
                <h3>Python</h3>
               
            </div>
            <i>Python is the flagship magazine of Johnson Publishing. Founded in 1945 by John H. Johnson, it still maintains the highest global circulation of any African American-focused magazine.</i>
            <div className="row">
                <button className="btn btn-success w-25 me-2">Download</button> <button className="btn btn-primary w-25">Read More</button>
            </div>
        </div>
        <div className="col-lg-4 col-mg-6 col-sm-12 text-light">
        <div>
        <div className="d-flex justify-content-center align-items-center">
                     <a href="image/book4.jpg"> 
                <img src="image/book4.jpg" alt="ebony" className=""/></a>
                    </div>
                <h3>Take the risk</h3>
               
            </div>
            <i>Take the risk is the flagship magazine of Johnson Publishing. Founded in 1945 by John H. Johnson, it still maintains the highest global circulation of any African American-focused magazine.</i>
            <div className="row">
                <button className="btn btn-success w-25 me-2">Download</button> <button className="btn btn-primary w-25">Read More</button>
            </div>
        </div>
        <div className="col-lg-4 col-mg-6 col-sm-12 text-light">
        <div>
        <div className="d-flex justify-content-center align-items-center">
                     <a href="image/book5.jpg"> 
                <img src="image/book5.jpg" alt="ebony" className=""/></a>
                    </div>
                <h3>Women who don't give a fuck</h3>
               
            </div>
            <i>Women who don't give a fuck is the flagship magazine of Johnson Publishing. Founded in 1945 by John H. Johnson, it still maintains the highest global circulation of any African American-focused magazine.</i>
            <div className="row">
                <button className="btn btn-success w-25 me-2">Download</button> <button className="btn btn-primary w-25">Read More</button>
            </div>
        </div>
        <div className="col-lg-4 col-mg-6 col-sm-12 text-light">
        <div>
        <div className="d-flex justify-content-center align-items-center">
                    <a href="image/book6.jpg"> 
                <img src="image/book6.jpg" alt="ebony" className=""/></a>
                    </div>
                <h3>1000 chairs</h3>                
            </div>
            <i>1000 chairs is the flagship magazine of Johnson Publishing. Founded in 1945 by John H. Johnson, it still maintains the highest global circulation of any African American-focused magazine.</i>
            <div className="row">
                <button className="btn btn-success w-25 me-2">Download</button> <button className="btn btn-primary w-25">Read More</button>
            </div>
        </div>
        
       </div>
       </div>


       </div>
        </>
    )
}
export default Home