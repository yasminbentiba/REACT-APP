import React from "react";

import WbIncandescentOutlinedIcon from "@material-ui/icons/WbIncandescentOutlined";
import TimeToLeaveOutlinedIcon from "@material-ui/icons/TimeToLeaveOutlined";
import BuildOutlinedIcon from "@material-ui/icons/BuildOutlined";
const Modal = (props) => {
  const divStyle = {
    display: props.displayModal ? "block" : "none",
  };
  function closeModal(e) {
    e.stopPropagation();
    props.closeModal();
  }
  
  return (
    <div className="modal" onClick={closeModal} style={divStyle}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <div className="part first">
          <a href="/ateliermecanique">
            <BuildOutlinedIcon fontSize="large" />
            <i className="icon fa fa-chain fa-2x"></i>
            <h4 className="part-title">Atelier Mécanique</h4>
            <hr className="line" />
            <p className="part-desc">Descpription Atelier Mécanique</p>
          </a>
        </div>



        <div className="part ">
          <a href="/ateliermecanique">
            <BuildOutlinedIcon fontSize="large" />
            <i className="icon fa fa-chain fa-2x"></i>
            <h4 className="part-title">Atelier Mécanique</h4>
            <hr className="line" />
            <p className="part-desc">Descpription Atelier Mécanique</p>
          </a>
        </div>


        <div className="part last">
          <a href="/ateliermecanique">
            <BuildOutlinedIcon fontSize="large" />
            <i className="icon fa fa-chain fa-2x"></i>
            <h4 className="part-title">Atelier Mécanique</h4>
            <hr className="line" />
            <p className="part-desc">Descpription Atelier Mécanique</p>
          </a>
        </div>


        
      </div>
    </div>
  );
};
export default Modal;
