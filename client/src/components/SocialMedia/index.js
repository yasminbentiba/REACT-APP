import React from 'react'
import "./Style.css"


const SocialMedia=()=> {
 
    return (
      <div className="social-media">
            
            <div className="social face">
                <i className="icon fa fa-facebook fa-lg"></i>
                <p>
                    <span className="info1">Follow Us on</span>
                    <span className="info2"> Facebook</span>
                </p>
            </div>
            
            <div className="social twitter">
                <i className="icon fa fa-twitter fa-lg"></i>
                <p>
                    <span className="info1">Tweet Us  on</span>
                    <span className="info2"> twitter</span>
                </p>
            </div>
            
            <div className="social pin">
                <i className="icon fa fa-pinterest fa-lg"></i>
                <p>
                    <span className="info1">Pin Us on</span>
                    <span className="info2"> Pinterest</span>
                </p>
            </div>
        </div>
        
    )
  }


export default SocialMedia;
