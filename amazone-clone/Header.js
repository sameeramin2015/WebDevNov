import React from 'react';
import Header from "./Headers.css";
import {Link} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasletIcon from "@material-ui/icons/ShoppingBasket";
import Home from "./Home";


function Header1() {
  return( 
    <div className='container'>
  <div className='header'>
      <Link to="/">
      <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
       alt='' />
       </Link>
       {/*Search box*/}
       <div className='header__search'>
        <input type="text" className='header__searchInput'/>
        <SearchIcon className='header__searchIcon' />
        </div>
        {/*3 links*/}
        <div className='header__nav'>
        {/*1st links*/}
        <Link to="/Login" className='header__link'>
        <div className='header__option'>
        <span className='header__optionLineOne'>Hello Sameer</span>
        <span className='header__optionLineTwo'>Sign In</span>
        </div>
        </Link>
        {/*2nd links*/}
        <Link to="/Login" className='header__link'>
        <div className='header__option'>
        <span className='header__optionLineOne'>Returns</span>
        <span className='header__optionLineTwo'>& Orders</span>
        </div>
        </Link>
        {/*3nd links*/}
        <Link to="/Login" className='header__link'>
        <div className='header__option'>
        <span className='header__optionLineOne'>Your</span>
        <span className='header__optionLineTwo'>Prime</span>
        </div>
        </Link>
        {/*4th links*/}
        <Link to="/Checkout" className='header__link'>
        <div className='header__optionBasket'>
        {/*Shopping icon in the basket*/}
        <ShoppingBasletIcon />
         {/*Number of items in the basket*/}
         <span className="header__optionLineTwo">0</span>
        </div>
        </Link>
        
        </div>
       
  </div>
  <Home />
  </div>
 
  );
 
}

export default Header1;
