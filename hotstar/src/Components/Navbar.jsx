import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import nv from "../CSS/Navbar.module.css";
import SearchInputAndList from "./SearchInputAndList";

function Navbar() {
    return (
        <div id='navbar' className={nv.navbar}>
            <div>

                <div className={nv.Menu} >
                    <i className="fa-solid fa-bars"></i>
                </div>

                <div className={nv.menuExt}>
                    <button>Channels</button>
                    <button>Languages</button>
                    <button>Genres</button>
                </div>
                <NavLink to='/'>
                    <div>
                        <img src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg" alt='hotstart' />
                    </div>
                </NavLink>

                <div className={nv.tvDiv}>
                    <button>TV</button>
                </div>
                <div className={nv.tvExt} >
                    <button>Hotstar Special</button>
                    <button>Star Plus</button>
                    <button>Star Bharat</button>
                    <button>Star Sport</button>
                    <button>Star Maa</button>
                </div>

                <div className={nv.movieDiv} >
                    <NavLink to='/movies'>
                        <button>Movie</button>
                    </NavLink>
                </div>
                <div className={nv.movieExt} >
                    <button>English</button>
                    <button>Hindi</button>
                    <button>Tamil</button>
                    <button>Telugu</button>
                    <button>Bhojpuri</button>
                </div>
                <div className={nv.disneyplus}>
                    <NavLink to="/sports">
                        <button>Disney+</button>
                    </NavLink>
                </div>
                <div className={nv.kidsDiv}>
                    <NavLink to='kids'>
                        <img src="https://snipboard.io/vngDdt.jpg" alt='Kids' />
                    </NavLink>
                </div>

                <div style={{
                    color: "white"
                }}
                className={nv.musicDiv}
                >
                    <NavLink to='/music'>
                        <button> Music <i style={{ marginLeft: "10px" }} className="fa-solid fa-music"></i></button>
                    </NavLink>
                </div>


            </div>
            <div>
                <div>
                    <SearchInputAndList />
                </div>
                <div>
                    <NavLink to='/subscribe'>
                        <button className={nv.subscribe} onClick={() => { localStorage.setItem('sub', true) }} >SUBSCRIBE</button>
                    </NavLink>
                </div>
                <div>
                    <NavLink to='/login'>
                        <button>Login</button>
                    </NavLink>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
}

export default Navbar;
