import React from "react";
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';import DirectionsCarOutlinedIcon from "@material-ui/icons/DirectionsCarOutlined";
import "./forum.css";
import SujetForm from '../Sujet/sujet'




const Forum = () => {

 /*  function handleClick(e) {
    e.preventDefault();
    console.log('Le lien a été cliqué.');
  } */
  return (
    
    <form>
      <a href="/sujetForm" /* onClick={handleClick} */>
      Cliquer ici pour ajouter un sujet
    </a>

      <div className="search-box">
        <select name='' id=''>
          <option value='tout'> Tout</option>
          <option value='titres'> Titres</option>
          <option value='description'> Description</option>
        </select>
        <input type="text" name="search" placeholder="recherche ..."/>
        <button> <i className="fa fa-search"> <SearchRoundedIcon/></i></button>
      </div>
      <div className="container">
        <div className="subforum">
          
          <div className="subforum-title">
            <h1>informations générales</h1>
          </div>

          <div className="subforum-row">
            <div className="subforum-icon subforum-column center">
              <i className="fa fa-car">
                <DirectionsCarOutlinedIcon />
              </i>
            </div>
              
            
            <div className="subforum-description subforum-column center">
              <b><h1>
                <a href="/sujet">titre de la description</a>
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
                <b><a href="">dernier commentaire</a> par{" "}
                <a href="">Nom de l'abonné</a>
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
                <a href=""> titre de la description</a>
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
                <b><a href="">dernier commentaire</a> par{" "}
                <a href="">Nom de l'abonné</a>
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
                <a href="">titre de la description</a>
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
                <b><a href="">dernier commentaire</a> par{" "}
                <a href="">Nom de l'abonné</a>
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
                <a href="">titre de la description</a>
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
                <b><a href="">dernier commentaire</a> par{" "}
                <a href="">Nom de l'abonné</a>
                <br/> le 
                <small> 22-mar-21 </small></b>
            </div>
          </div>
{/* <hr className="subforum-devider"/> */}
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
                <a href="">titre de la description </a>
              </h1> <br/>
              <p>
                le contenue de la description: les voitures les plus connues{" "}
              </p></b>
              </div>
              <div className="subforum-stats subforum-column center">
                <span> 24 vues | 15 commentaires </span>
              </div>
              <div className="subforum-info subforum-column center">
                <b><a href="">dernier commentaire</a> par{" "}
                <a href="">Nom de l'abonné</a>
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
                <a href="">titre de la description</a>
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
                <b><a href="">dernier commentaire</a> par{" "}
                <a href="">Nom de l'abonné</a>
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
                <a href="">titre de la description</a>
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
                <b><a href="">dernier commentaire</a> par{" "}
                <a href="">Nom de l'abonné</a>
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
                <a href="">titre de la description </a>
              </h1> <br/>
              <p>
                le contenue de la description: les voitures les plus connues{" "}
              </p></b>
              </div>
              <div className="subforum-stats subforum-column center">
                <span> 24 vues | 15 commentaires </span>
              </div>
              <div className="subforum-info subforum-column center">
                <b><a href="">dernier commentaire</a> par{" "}
                <a href="">Nom de l'abonné</a>
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
                <a href="">titre de la description</a>
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
                <b><a href="">dernier commentaire</a> par{" "}
                <a href="">Nom de l'abonné</a>
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
                <a href="">titre de la description</a>
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
                <b><a href="">dernier commentaire</a> par{" "}
                <a href="">Nom de l'abonné</a>
                <br/> le 
                <small> 22-mar-21 </small></b>
            </div>
          </div>
{/* <hr className="subforum-devider"/> */}
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
                <a href="">titre de la description </a>
              </h1> <br/>
              <p>
                le contenue de la description: les voitures les plus connues{" "}
              </p></b>
              </div>
              <div className="subforum-stats subforum-column center">
                <span> 24 vues | 15 commentaires </span>
              </div>
              <div className="subforum-info subforum-column center">
                <b><a href="">dernier commentaire</a> par{" "}
                <a href="">Nom de l'abonné</a>
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
                <a href="">titre de la description</a>
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
                <b><a href="">dernier commentaire</a> par{" "}
                <a href="">Nom de l'abonné</a>
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
                <a href="">titre de la description</a>
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
                <b><a href="">dernier commentaire</a> par{" "}
                <a href="">Nom de l'abonné</a>
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
                <a href="">titre de la description </a>
              </h1> <br/>
              <p>
                le contenue de la description: les voitures les plus connues{" "}
              </p></b>
              </div>
              <div className="subforum-stats subforum-column center">
                <span> 24 vues | 15 commentaires </span>
              </div>
              <div className="subforum-info subforum-column center">
                <b><a href="">dernier commentaire</a> par{" "}
                <a href="">Nom de l'abonné</a>
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
                <a href="">titre de la description</a>
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
                <b><a href="">dernier commentaire</a> par{" "}
                <a href="">Nom de l'abonné</a>
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
                <a href="">titre de la description</a>
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
                <b><a href="">dernier commentaire</a> par{" "}
                <a href="">Nom de l'abonné</a>
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
                <a href="">titre de la description </a>
              </h1> <br/>
              <p>
                le contenue de la description: les voitures les plus connues{" "}
              </p></b>
              </div>
              <div className="subforum-stats subforum-column center">
                <span> 24 vues | 15 commentaires </span>
              </div>
              <div className="subforum-info subforum-column center">
                <b><a href="">dernier commentaire</a> par{" "}
                <a href="">Nom de l'abonné</a>
                <br/> le 
                <small> 22-mar-21 </small></b>
            </div>
          </div>
          <hr className="subforum-devider"/>

        </div>
      </div>
    </form>
  );
};

export default Forum;
