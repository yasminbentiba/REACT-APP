import React, { Component } from 'react';
import './modal.css';
import Modal from './Modal'
import { Button } from '@material-ui/core'

import BuildOutlinedIcon from '@material-ui/icons/BuildOutlined';
import WbIncandescentOutlinedIcon from '@material-ui/icons/WbIncandescentOutlined';
import TimeToLeaveOutlinedIcon from '@material-ui/icons/TimeToLeaveOutlined';
class Annuaire extends Component {
    state = {
       modal: false
    }
     
    selectModal = (info) => {
      this.setState({modal: !this.state.modal}) // true/false toggle
    }
    
    render() {
       return (
        <form>
        <div className="annuaire">
         <div className="container">
          <div className="App"> 
             <div  onClick={ this.selectModal }  className="part first">
                    <BuildOutlinedIcon fontSize='large'/>
                     <i  className="icon fa fa-chain fa-2x" ></i>
                    <h4 className="part-title">Atelier Mécanique</h4>
                    <hr className="line"/>
                    <p className="part-desc">
                        Descpription Atelier Mécanique
                    </p>
                </div>

             <Modal
              
                 closeTimeoutMS={2000}
                 displayModal={this.state.modal}
                 closeModal={this.selectModal}
             />
          </div>
          </div>
        </div>
        </form>
       );
}}
export default Annuaire;