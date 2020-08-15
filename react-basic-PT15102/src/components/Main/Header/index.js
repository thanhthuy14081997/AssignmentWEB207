import React from 'react'
import PropTypes from 'prop-types'

const Header = props => {
    return (
      <div>
      <div className="agileits_header">
        <div className="w3l_offers">
          <a href="products.html">Today's special Offers !</a>
        </div>
        <div className="w3l_search">
          <form action="#" method="post">
            <input type="text" name="Product" defaultValue="Search a product..." onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Search a product...';}" required />
            <input type="submit" defaultValue=" " />
          </form>
        </div>
        <div className="product_list_header">  
          <form action="#" method="post" className="last">
            <fieldset>
              <input type="hidden" name="cmd" defaultValue="_cart" />
              <input type="hidden" name="display" defaultValue={1} />
              <input type="submit" name="submit" defaultValue="View your cart" className="button" />
            </fieldset>
          </form>
        </div>
        <div className="w3l_header_right">
          <ul>
            <li className="dropdown profile_details_drop">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-user" aria-hidden="true" /><span className="caret" /></a>
              <div className="mega-dropdown-menu">
                <div className="w3ls_vegetables">
                  <ul className="dropdown-menu drp-mnu">
                    <li><a href="login.html">Login</a></li> 
                    <li><a href="login.html">Sign Up</a></li>
                  </ul>
                </div>                  
              </div>	
            </li>
          </ul>
        </div>
        <div className="w3l_header_right1">
          <h2><a href="mail.html">Contact Us</a></h2>
        </div>
        <div className="clearfix"> </div>
      </div>
      <div className="logo_products">
        <div className="container">
          <div className="w3ls_logo_products_left">
            <h1><a href="index.html"><span>Grocery</span> Store</a></h1>
          </div>
          <div className="w3ls_logo_products_left1">
            <ul className="special_items">
              <li><a href="events.html">Events</a><i>/</i></li>
              <li><a href="about.html">About Us</a><i>/</i></li>
              <li><a href="products.html">Best Deals</a><i>/</i></li>
              <li><a href="services.html">Services</a></li>
            </ul>
          </div>
          <div className="w3ls_logo_products_left1">
            <ul className="phone_email">
              <li><i className="fa fa-phone" aria-hidden="true" />(+0123) 234 567</li>
              <li><i className="fa fa-envelope-o" aria-hidden="true" /><a href="mailto:store@grocery.com">store@grocery.com</a></li>
            </ul>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
    </div>

    )
}

Header.propTypes = {

}

export default Header
