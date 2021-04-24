import React from 'react'
import "./Style.css";

//import {AppBar,Typography,Grow,Grid} from '@material-ui/core';
//import {link} from 'react-router-dom';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import { Avatar } from '@material-ui/core';
const Navbar=()=> {
 
    return (
        
        <div className="navbar">
            
            <div className="container">
                
                <div className="logo">
                    <h2 className="logo-text">Auto Services</h2>
                </div>
                
                
                <ul className="ul-list">
                    <li className="list-item"><a className="liennavbar" href="/">Home</a></li>
                    <li className="list-item"><a className="liennavbar" href="/annuaire">Annuaire</a></li>
                    <li className="list-item"><a className="liennavbar" href="/forum">Forum</a></li>
                    <li className="list-item"><a className="liennavbar" href="/about">About</a></li>
                    <li className="list-item"><a className="liennavbar" href="/contact">Contact</a></li>
                    <li className="list-item"><a className="liennavbar" href="/signUp" ><button style={{borderRadius: "50%"}}><PersonAddOutlinedIcon /></button></a> </li>
                    <li className="list-item"><a className="liennavbar" href="/profile" ><button><Avatar name="Foo Bar" /></button></a> </li>

                </ul>
                
            </div>
            
        </div>
    )
  }


export default Navbar;
