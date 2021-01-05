<ul >
          <li>
            <NavLink to="/" activeClassName="is-active" exact style={{textDecoration:'none',color: 'white'}} >
              HOME
            </NavLink> 
          </li>
          <li> 
            <NavLink to="/offers" activeClassName="is-active" style={{textDecoration:'none',color: 'white'}}>
              OFFERS
            </NavLink> 
          </li>
          <li class="dropdown">
            <NavLink  to="/allJwellery" style={{textDecoration:'none',color: 'white'}}>
              All Jwellery  <span class="caret"></span>
            </NavLink>
          <ul class="dropdown-menu">
            <li>
             <NavLink to="/Rings" style={{textDecoration:'none',color: 'black'}}>
               Rings
             </NavLink>
            </li>
          </ul>
          </li>
         </ul>