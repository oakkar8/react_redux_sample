import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {
  return(
    <nav>
      <div>
        <ul>
          <li><Link to="/">Shop</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation;
