import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import { Link, Outlet } from "react-router-dom";

class Navbar extends React.Component
{
 

  constructor(props)
  {
      super(props);
  }

 
  render()
  {


    return(

      <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link className="navbar-brand" to="/">
                    <img className="ml-4" src="/img/casetta-adrian-fb.jpg" width="180" height="100" alt="" />
                </Link>
                <div className=" navbar" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/agents"><h2>Agenti</h2></Link>
                        </li>
                        <li  className="nav-item ml-4">
                            <Link className="nav-link" to="/houses"><h2>Case</h2></Link>
                        </li>
                    </ul>
                </div>
            </nav>


            <Outlet />
      </div>

    );

  }


}

export default Navbar;