import React from "react";
import "./listesujets.css";
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import DirectionsCarOutlinedIcon from "@material-ui/icons/DirectionsCarOutlined";
import ImageIcon from '@material-ui/icons/Image';


class listeSujets extends React.Component {
  render() {
    return (

<form classeName="formsujet">
      <a className="liensujet" href="/forum" /* onClick={handleClick} */>
      <span>retour au forum sujet</span>
    </a>

      <div className="search-box">
        <select name='' id=''>
          <option value='tout'> Tout</option>
          <option value='titres'> Titres</option>
          <option value='description'> Description</option>
        </select>
        <input type="text" name="search" placeholder="recherche ..."/>
        <button> <i className="fa fa-search"> <SearchRoundedIcon/> </i></button>
      </div>
      <div className="container">
        <div className="subforum">
           {/* ------------------------------------------------- */}
             {/* More */}
          <div className="barre">
            <div  className="subforum-icon column center">
            <b><h1 >
              <i><ImageIcon/></i>
              </h1> </b>
            </div>
            <div className="subforum-description column center">
            <b><h1>
                Titres des sujets
              </h1> </b>
              </div>
              <div className="subforum-stats column center">
                <span> vues | commentaires </span>
              </div>
              <div className="subforum-info column center">
                <b>Derniers commentaires
                
                </b>
            </div>
          </div>
          <hr className="subforum-devider"/>
              {/* ----------------------------------------------- */}
            
         

          <div className="subforum-row">
            <div className="subforum-icon subforum-column center">
              <i className="fa fa-car">
                <DirectionsCarOutlinedIcon />
              </i>
            </div>
           
            <div className="subforum-description subforum-column center">
              <b><h1>
                <a className="liensujet" href="/listesujets">sujet 1</a>
              </h1> <br/>
              <p>
                {" "}
                le contenue de la description: les voitures les plus connues{" "}
              </p></b>
              </div>
              <div className="subforum-stats subforum-column center">
                <span> 24 vues | 15 commentaires </span>
              </div>
              <div className="subforum-info subforum-column center">
                <b><a className="liensujet" href="">dernier commentaire</a> par{" "}
                <a className="liensujet" href="">Nom de l'abonné</a>
                <br/> le 
                <small> 22-mar-21 </small></b>
            </div>
          </div>

          <hr className="subforum-devider"/>
          {/* More */}
          <div className="subforum-row">
            <div className="subforum-icon subforum-column center">
              <i className="fa fa-car">
                <DirectionsCarOutlinedIcon />
              </i>
            </div>
              
            
            <div className="subforum-description subforum-column center">
              <b><h1>
                <a className="liensujet" href=""> titre de la description</a>
              </h1> <br/>
              <p>
                {" "}
                le contenue de la description: les voitures les plus connues{" "}
              </p></b>
              </div>
              <div className="subforum-stats subforum-column center">
                <span> 24 vues | 15 commentaires </span>
              </div>
              <div className="subforum-info subforum-column center">
                <b><a className="liensujet" href="">dernier commentaire</a> par{" "}
                <a className="liensujet" href="">Nom de l'abonné</a>
                <br/> le 
                <small> 22-mar-21 </small></b>
            </div>
          </div>

          <hr className="subforum-devider"/>
          {/* More */}
          <div className="subforum-row">
            <div className="subforum-icon subforum-column center">
              <i className="fa fa-car">
                <DirectionsCarOutlinedIcon />
              </i>
            </div>
              
            
            <div className="subforum-description subforum-column center">
            <b><h1>
                <a className="liensujet" href="">titre de la description</a>
              </h1> <br/>
              <p>
                {" "}
                le contenue de la description: les voitures les plus connues{" "}
              </p></b>
              </div>
              <div className="subforum-stats subforum-column center">
                <span> 24 vues | 15 commentaires </span>
              </div>
              <div className="subforum-info subforum-column center">
                <b><a className="liensujet" href="">dernier commentaire</a> par{" "}
                <a className="liensujet" href="">Nom de l'abonné</a>
                <br/> le 
                <small> 22-mar-21 </small></b>
            </div>
          </div>
          <hr className="subforum-devider"/>


        </div>
      </div>
    </form>
    );
  }
}

export default listeSujets;
