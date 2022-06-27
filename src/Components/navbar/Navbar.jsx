import React from 'react'
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import {Button} from '../../Components';
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" href="www.google.com">DEO OBOMBY</a>
            {/* paste*/}
            <div id="icon" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <RiMenu3Line />
          </div>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasNavbarLabel"> </h5>
                <div   type="button" data-bs-dismiss="offcanvas" aria-label="Close">
                  <RiCloseLine />
                </div>
              </div>
              <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li class="nav-item">
                    <a class="nav-link " aria-current="page" href="www.google.com">About</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="www.google.com">Experience</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="www.google.com">Work</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="www.google.com">Contact</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="./resume.pdf"download><Button name="resume"/></a>
                  </li>
                </ul>
              </div>
          </div>
        </div>
    </nav>
    </div>
    
  )
}

export default Navbar