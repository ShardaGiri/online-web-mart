
import React from 'react'
import { Button, Col, Container, Form, FormControl, Row } from 'react-bootstrap'
import { FaCcMastercard, FaCcVisa, FaFacebookF, FaInstagram,FaTwitter } from 'react-icons/fa';
import {AiOutlineCopyrightCircle} from 'react-icons/ai';
import { NavLink } from 'react-router-dom'
import './Footer.css';

export default function Footer() {
    return (
        <div className="FooterBody" style={{marginTop:"20px"}}>
            
         <div className="container">
             <Row>
                 <Col md={2.5} >
                 <ul className="Footer-ul">
                     <li class="Footer-heading">ABOUT US</li>
                     <li>
                     <NavLink to="/offers" className="Footer-NavLink">
                      Who we are?
                     </NavLink> 
                     </li>
                     <li>
                     <NavLink className="Footer-NavLink" to="/offers"  >
                      Management Team
                     </NavLink> 
                     </li>
                 
                     <li class="Footer-heading">CONTACT US</li>
                     <li>
                     <NavLink className="Footer-NavLink" to="/faq"  >
                      FAQ
                     </NavLink> 
                     </li>
                     <li>
                     <NavLink className="Footer-NavLink" to="/contact">
                      Contact
                     </NavLink> 
                     </li>
                     <li>
                     <span className="Footer-span">1234567890</span>
                     </li>
                     
                     <li>
                     <span className="Footer-span">(9 am-10 pm, 7 days a week)</span>
                     </li>
                 </ul>
                 </Col>
                 <Col md={4} >
                 <ul className="Footer-ul">
                     <li class="Footer-heading">POLICIES</li>
                     <li>
                     <NavLink to="/offers" className="Footer-NavLink">
                      30-Day Returns
                     </NavLink> 
                     </li>
                     <li>
                     <NavLink className="Footer-NavLink" to="/offers"  >
                      Exchange & Buy back
                     </NavLink> 
                     </li>
                     <li>
                     <NavLink className="Footer-NavLink" to="/offers"  >
                      Privacy Policies
                     </NavLink> 
                     </li>
                     <li>
                     <NavLink className="Footer-NavLink" to="/offers"  >
                        Terms & Conditions
                     </NavLink> 
                     </li>
                     <li class="Footer-heading">SHOP WITH CONFIDENCE</li>
                     <li>
                     <NavLink className="Footer-NavLink" to="/offers"  >
                      Why Buy From Us?
                     </NavLink> 
                     </li>
                     <li>
                     <NavLink className="Footer-NavLink" to="/offers"  >
                      Our Certification
                     </NavLink> 
                     </li>
                 </ul>
                 </Col >
                 
             </Row>
             </div>
         <div className="Footer-base">
               </div>
        </div>
    )
}
