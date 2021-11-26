import "./styles.css";

import {
    BrowserRouter as Router,
    NavLink
  } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className= "navigation">
                <NavLink to="/">
                    <img className ="netflix_logo"  src ="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
                alt ="netflix-logo"/> 
                </NavLink>
               
                
                <img className ="profile_icon"
                src ="https://occ-0-748-1723.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABSdDhmLG89acb6rHYbxdlywq5vY8EzduXrQyhtcjHFkhIOcV42COk9-49usjHoiXuM7WvODRTx-kAV4NZ8b51-zH-um2.png?r=535" 
                alt = "avatar"/>
            </div>
            <div className = "navigationBar">
                <NavLink exact to="/" className = "home">
                    <h2>Home</h2> 
                </NavLink>
                <h2>TV Shows</h2> 
                <h2>Movies</h2> 
                <h2>New & Popular</h2> 
                <NavLink to="/my-list" className = "mylist">
                    <h2>My List</h2> 
                </NavLink>
       
            </div>
            
        </nav>
    );
};
