import React,{useState} from "react";
import { Button, Col, Container, Form, FormControl, Row } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import  logo from './images/logo.jpeg'
import {FaSearch,FaStoreAlt,FaRegHeart} from 'react-icons/fa';
import {GiPhone,GiShoppingCart,GiHamburgerMenu} from 'react-icons/gi';
import './Navbar.css';
import { MenuItems } from './MenuItems';
import { allJwellery } from './MenuItems';
function NavbarMain()
{ const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(true);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  const [showLinks,setShowLinks]= useState(false);
  return (
            <div className="Top">
            <div className="Navbar">
              <div className="Header">
              <div className="logo">
            <img src={logo} alt="Company Logo" class="responsive" style={{width:"100px"}}></img>
             <span>Logo</span>
             </div>
            <div className="links" id={showLinks ?"hidden":""}>
             <div className="Search-bar">
              <Form inline className="Search-form" >
              <FormControl type="text" placeholder="Search for Jwellery"/>
              <Button>
                <span style={{color:'white'}}><FaSearch size="20px"/></span>
              </Button>
             </Form>
             </div>
            
             <div className="link" >
             
              <ul>
             <li> 
               <span style={{color:"gray"}}>
                <GiPhone/> 1234567890
               </span>
              </li>
             <li>
               
             <NavLink to="/" className="navlink" >
               <span>Signup</span>
             </NavLink>
             </li>
             <li>
             <NavLink to="/" className="navlink">
                <span> Try at Home</span>
             </NavLink>
             </li>  
             </ul>
             <ul>
               <li>
             <NavLink to="/" className="navlink">
              <span>
              <GiShoppingCart class="icon"size="25px"/>
              </span>  
             </NavLink>
             </li>
             <li>
             <NavLink to="/"className="navlink" >
              <span >
              <FaStoreAlt  class="icon"size="25px"/> Locate us
              </span> 
             </NavLink>
             </li>
             <li>
             <NavLink to="/" className="navlink">
               <span >
               <FaRegHeart  class="icon"size="25px"/> WishList
               </span> 
             </NavLink>
             </li>
             </ul>
            </div>
             </div>

             <button className="hider" onClick={()=>setShowLinks(!showLinks)}><GiHamburgerMenu/></button>
        
            </div>
            </div>  

            <div className="NavbarBody">

      <nav className="navbar">
        <div className="container-fluid">
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        
         <ul className={click ? 'nav-menu active' : 'nav-menu'}>
         {MenuItems.map((item, index) => {
          
          return (
            <li key={index} className="nav-item">
              <NavLink
                to={item.path}
                activeClassName="is-active" className='nav-links' onClick={closeMobileMenu}
                style={{textDecoration:'none'}}
              >
                {item.title}
              </NavLink>
            </li>
          );
        })} 
        <li className='dropdown'   onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
           <NavLink  to="/allJwellery" style={{textDecoration:'none',color: 'white'}} onClick={closeMobileMenu}>
          All Jwellery  <span class="caret"></span>
           </NavLink>
          <ul className="dropdown-menu" >
         
          <li className="category"><span>Shop by category <br></br></span></li>
           
          {dropdown &&allJwellery.map((item, index) => {
          return (
            <li key={index}  >
              <NavLink
                to={item.path}
                style={{textDecoration:'none',width:100,marginBottom:-20}}
              >
                {item.title}
              </NavLink>
            </li>
          );
        })} 
          </ul>
          </li>
         </ul>
      </div>
     </nav>
   </div>
   </div>      
    
         )
        }

export default NavbarMain
