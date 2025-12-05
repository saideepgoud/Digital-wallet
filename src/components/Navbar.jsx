import React from "react";
import "./Navbar.css";
import { Menu } from "lucide-react";

export default function Navbar() {
  function Check() {
    console.log("Menu button clicked");

  }
  return (
      <div className="nav-container">
        <div className="nav-left">
        <div class="dropdown">
          <button class=" menu-btn dropdown-toggle" type="text" data-bs-toggle="dropdown" >
            <Menu/>
          </button>
          <ul class="dropdown-menu">
            <li><button class="dropdown-item" type="button">Wallet</button></li>
            <li><button class="dropdown-item" type="button">Cards</button></li>
            <li><button class="dropdown-item" type="button">Transfers</button></li>
            <li><button class="dropdown-item" type="button">Add money</button></li>
            <li><button class="dropdown-item" type="button">Pricing</button></li>
            <li><button class="dropdown-item" type="button">Rewards</button></li>
          </ul>
        </div>
        </div>
        <div className="nav-logo">D&nbsp;I&nbsp;G&nbsp;I&nbsp;T&nbsp;A&nbsp;L-W&nbsp;A&nbsp;L&nbsp;L&nbsp;E&nbsp;T&nbsp;</div>

        <div className="nav-right">
          <button className="btn btn-outline-warning"><a className="signin" href="#">sign in</a></button>
          <button className="btn btn-outline-warning"><a className="login" href="#">log in</a></button>
        </div>
      </div>
  );
}
