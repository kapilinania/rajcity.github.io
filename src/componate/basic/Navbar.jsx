import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className='container-fluid'>
          <div className='container'>
            <div className='row'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">RAJASTHAN</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">JODHOUR</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">JAIPUR</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">KOTA</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">AJMER</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">PALI</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">NAGAUR</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-uppercase" href="#">Jaisalmer</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-uppercase" href="#">Udaipur</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-uppercase" href="#">Bikaner</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-uppercase" href="#">Barmer</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-uppercase" href="#">Sikar</a>
                        </li>
                        
                    </ul>
                    </div>
                </div>
             </nav>
            </div>
          </div>
        </div>
    
    </>
  )
}

export default Navbar