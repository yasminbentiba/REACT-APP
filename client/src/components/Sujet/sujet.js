import React from "react";
import "./sujet.css";

class SujetForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titre: "",
      image: "",
      description: "",
    };

    this.handleChangeTitre = this.handleChangeTitre.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleChangeImage = this.handleChangeImage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeTitre(event) {
    this.setState({ titre: event.target.titre });
  }

  handleChangeDescription(event) {
    this.setState({ description: event.target.description });
  }

  handleChangeImage(event) {
    this.setState({ image: event.target.image });
  }

  handleSubmit(event) {
    alert("Sujet ajouté avec succée: " + this.state.titre);
    event.preventDefault();
  }

  render() {
    return (
      <form  className ="sujetform" onSubmit={this.handleSubmit}>
       

        <div className="row">
          <div className="col-25">
            <label for="titresujet">Titre Sujet</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              id="titresujet"
              name="titresujet"
              value={this.state.titre}
              onChange={this.handleChangeTitre}
              placeholder="Titre de votre sujet.."
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="col-25">
            <label for="subject">Description du Sujet</label>
          </div>
          <div className="col-75">
            <textarea
              id="subject"
              name="subject"
              value={this.state.description}
              onChange={this.handleChangeDescription}
              placeholder="Ecrire la descrption de votre sujet .."
              style={{ height: "200px" }}
              required
            ></textarea>
          </div>
          </div>
          {/* ajouter image */}

          <div className="row">
            <div className="col-25">
              <label for="myfile">Votre logo</label>
            </div>
            <div className="col-75">
              <input
              className="addfileinput"
                type="file"
                id="myfile"
                name="myfile"
                value={this.state.image}
                onChange={this.handleChangeImage}
                required
                
              />
            </div>
          </div>
        
        <div className="row">
          <input type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}

export default SujetForm;
