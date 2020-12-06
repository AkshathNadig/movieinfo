import React from 'react'

 function Footer() {
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-md-12">
                    <div className="footer p-3 mt-4 text-center bg-dark text-light">
                        Developed by:
                        <span className ="text-warning font-weight-normal">
                            Akshath Nadig
                        </span>
                        ,Using <i className="fab fa-react" /> React JS &amp; Redux JS integrated with 
                        external movies data API <span> </span>
                        <a
                            href="http://www.omdbapi.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                        OMBD  
                        </a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Footer