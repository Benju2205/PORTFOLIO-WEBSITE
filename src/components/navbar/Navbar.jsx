import React from "react";
import {Link} from 'react-scroll'
import "../navbar/navbar.css";


const Navbar = () => {
  return (
    <div className="n">
      <div className="n-items">
        
        <ul className="ul">
        <li className="list-item">
            <Link to="intro" spy={true} smooth={true} offset={50} duration={500} className="link"> Home</Link>
          </li>
          <li className="list-item">
            <Link to="about" spy={true} smooth={true} offset={50} duration={500} className="link"> About</Link>
          </li>
          <li className="list-item">
            <Link to="productlist" spy={true} smooth={true} offset={50} duration={500} className="link"> Achievements</Link>
          </li>
          <li className="list-item">
            <Link to="contact" spy={true} smooth={true} offset={50} duration={500} className="link"> Contact Me</Link>
          </li>
        </ul>
      </div>

      {/* <BrowserRouter>
        <Routes>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/productlist" element={<ProductList/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
        <ul className="ul">
          <li className="li-items">
            <Link to='/about' className="li-item">About</Link>
          </li>
          <li className="li-items">
            <Link to='/productlist' className="li-item">Products</Link>
          </li>
          <li className="li-items">
            <Link to='/contact' className="li-item">Contact Me</Link>
          </li>
        </ul>
      </BrowserRouter> */}
    </div>
  );
};

export default Navbar;
