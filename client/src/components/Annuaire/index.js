import React, { Component } from "react";
import "./modal.css";
import ModalElectrique from "./ModalElectrique";
import ModalMecanique from "./ModalMecanique";
import ModalTolerie from "./ModalTolerie";
import ModalServiceRapide from "./ModalServiceRapide";
import ModalTeinture from "./ModalTeinture";
import ModalPieceDetachee from "./ModalPieceDetachee";
import ModalConcessionnaire from "./ModalConcessionnaire";
import ModalPieceCrroserie from "./ModalPieceCarroserie";

import { Button } from "@material-ui/core";

import BuildOutlinedIcon from "@material-ui/icons/BuildOutlined";
import WbIncandescentOutlinedIcon from "@material-ui/icons/WbIncandescentOutlined";
import TimeToLeaveOutlinedIcon from "@material-ui/icons/TimeToLeaveOutlined";
class Annuaire extends Component {
  state = {
    modalElectrique: false,
    modalMecanique: false,
    modalTolerie: false,
    ModalConcessionnaire: false,
    ModalPieceCrroserie: false,
    ModalPieceDetachee: false,
    ModalServiceRapide: false,
    ModalTeinture: false,
  };

  selectModalElectrique = (info) => {
    this.setState({ modalElectrique: !this.state.modalElectrique }); // true/false toggle
  };
  selectModalMecanique = (info) => {
    this.setState({ modalMecanique: !this.state.modalMecanique }); // true/false toggle
  };
  selectModalTolerie = (info) => {
    this.setState({ modalTolerie: !this.state.modalTolerie }); // true/false toggle
  };
  selectModalConcessionnaire = (info) => {
    this.setState({ ModalConcessionnaire: !this.state.ModalConcessionnaire }); // true/false toggle
  };
  selectModalPieceCrroserie = (info) => {
    this.setState({ modalPieceCrroserie: !this.state.modalPieceCrroserie }); // true/false toggle
  };
  selectModalPieceDetachee = (info) => {
    this.setState({ modalPieceDetachee: !this.state.modalPieceDetachee }); // true/false toggle
  };
  selectModalServiceRapide = (info) => {
    this.setState({ modalServiceRapide: !this.state.modalServiceRapide }); // true/false toggle
  };
  selectModalTeinture = (info) => {
    this.setState({ modalTeinture: !this.state.modalTeinture }); // true/false toggle
  };

  render() {
    return (
      <form>
        <div className="annuaire">
          <div className="container">
            <div className="App">
              {/* ----------------1------------- */}
              <div className="part first">
                <BuildOutlinedIcon fontSize="large" />
                <i className="icon fa fa-chain fa-2x"></i>
                <h4 onClick={this.selectModalElectrique} className="part-title">
                  Atelier Electrique
                </h4>
                <hr className="line" />
                <p className="part-desc">Descpription Atelier Electrique</p>
              </div>

              <ModalElectrique
                closeTimeoutMS={2000}
                displayModal={this.state.modalElectrique}
                closeModal={this.selectModalElectrique}
              />

              {/* ----------------2------------- */}
              <div className="part">
                <WbIncandescentOutlinedIcon fontSize="large" />
                <i className="icon fa fa-bolt fa-2x"></i>
                <h4 onClick={this.selectModalmecanique} className="part-title">
                  Atelier mecanique{" "}
                </h4>
                <hr className="line" />
                <p className="part-desc">Descpription Atelier mecanique</p>
              </div>
              <ModalMecanique
                closeTimeoutMS={2000}
                displayModal={this.state.modalMecanique}
                closeModal={this.selectModalMecanique}
              />

              {/* ----------------3------------- */}
              <div className="part ">
                <TimeToLeaveOutlinedIcon />
                <i className="icon fa fa-tachometer fa-2x"></i>
                <h4 onClick={this.selectModalTolerie} className="part-title">
                  Atelier Tolerie
                </h4>
                <hr className="line" />
                <p className="part-desc">Atelier Tolerie</p>
              </div>
              <ModalTolerie
                closeTimeoutMS={2000}
                displayModal={this.state.modalTolerie}
                closeModal={this.selectModalTolerie}
              />
            </div>

            {/* ----------------4------------- */}

            <div className="part first">
              <BuildOutlinedIcon fontSize="large" />
              <i className="icon fa fa-chain fa-2x"></i>
              <h4
                onClick={this.selectModalConcessionnaire}
                className="part-title"
              >
                Concessionnaire
              </h4>
              <hr className="line" />
              <p className="part-desc">Descpription Concessionnaire</p>
            </div>

            <ModalConcessionnaire
              closeTimeoutMS={2000}
              displayModal={this.state.ModalConcessionnaire}
              closeModal={this.selectModalConcessionnaire}
            />

            {/* ----------------5------------- */}
            <div className="part">
              <WbIncandescentOutlinedIcon fontSize="large" />
              <i className="icon fa fa-bolt fa-2x"></i>
              <h4
                onClick={this.selectModalPieceCrroserie}
                className="part-title"
              >
                Atelier de Pièce Carroserie{" "}
              </h4>
              <hr className="line" />
              <p className="part-desc">Descpription pièces Carroseries </p>
            </div>
            <ModalPieceCrroserie
              closeTimeoutMS={2000}
              displayModal={this.state.ModalPieceCrroserie}
              closeModal={this.selectModalPieceCrroserie}
            />

            {/* ----------------6------------- */}
            <div className="part ">
              <TimeToLeaveOutlinedIcon fontSize="large" />
              <i className="icon fa fa-tachometer fa-2x"></i>
              <h4
                onClick={this.selectModalPieceDetachee}
                className="part-title"
              >
                Atelier Tolerie
              </h4>
              <hr className="line" />
              <p className="part-desc">Atelier des pièces détachées</p>
            </div>
            <ModalPieceDetachee
              closeTimeoutMS={2000}
              displayModal={this.state.ModalPieceDetachee}
              closeModal={this.selectModalPieceDetachee}
            />
          </div>
          {/* ------------7----------- */}

          
            <div className="part first">
              <BuildOutlinedIcon fontSize="large" />
              <i className="icon fa fa-chain fa-2x"></i>
              <h4
                onClick={this.selectModalServiceRapide}
                className="part-title"
              >
                Atelier services rapides
              </h4>
              <hr className="line" />
              <p className="part-desc">Descpription Atelier services rapides</p>
            </div>

            <ModalServiceRapide
              closeTimeoutMS={2000}
              displayModal={this.state.ModalServiceRapide}
              closeModal={this.selectModalServiceRapide}
            />

            {/* ----------------8------------- */}
            <div className="part">
              <WbIncandescentOutlinedIcon fontSize="large" />
              <i className="icon fa fa-bolt fa-2x"></i>
              <h4 onClick={this.selectModalTeinture} className="part-title">
                Atelier Teinture{" "}
              </h4>
              <hr className="line" />
              <p className="part-desc">Descpription Atelier Teinture</p>
            </div>
            <ModalTeinture
              closeTimeoutMS={2000}
              displayModal={this.state.ModalTeinture}
              closeModal={this.selectModalTeinture}
            />

            {/* ----------------9------------- */}
            <div className="part ">
              <TimeToLeaveOutlinedIcon fontSize="large" />
              <h4 onClick={this.selectModalElectrique} 
              className="part-title">
                Atelier xxx
              </h4>
              <hr className="line" />
              <p className="part-desc">Atelier xxxx</p>
            </div>
            <ModalElectrique
              closeTimeoutMS={2000}
              displayModal={this.state.ModalElectrique}
              closeModal={this.selectModalElectrique}
            />
          </div>
        
      </form>
    );
  }
}
export default Annuaire;
