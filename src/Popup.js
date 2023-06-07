import React from "react";
import ReactDOM from "react-dom";
import "leaflet/dist/leaflet.css";
import Leaf from "./Leafletmap.js"

export default function Popup(props) {
  const [popup, setPopup] = React.useState(true);
  const [formData, setFormData] = React.useState({
    id: 0,
    title: "",
    rating: 5,
    map: "https://www.openstreetmap.org/export/embed.html?bbox=6.591024398803712%2C43.251890990327354%2C6.679430007934571%2C43.286514253894225&amp;layer=mapnik",
    description: "description"
  });

  function handleChange(e) {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  return ReactDOM.createPortal(
    <>
      {popup && (
        <>
          <div id="popup-overlay" onClick={props.overlayClose}></div>
          <div id="popup">
          <p id="popup-close" onClick={props.close}>x</p>
          <br></br>
            <h2 id="popup-add">Add Trip Entry</h2>
            <form id="form">
            <label id="form-location">Location: 
            </label><input id="form-location-input" name="title" onChange={handleChange}/>

            <label id="form-rating">Rating:  
            </label><input id="form-rating-input" name="rating" onChange={handleChange}/>

            <label id="form-map">Map: 
            </label><input id="form-map-input" name="map" onChange={handleChange}/>
            <Leaf />

            <label id="form-description">Description: 
            </label><textarea id="form-description-input" name="description" onChange={handleChange}/>
            
            <button id="popup-submit"onClick={props.submission}>Submit</button>
            </form>
          </div>
        </>
      )}
    </>,

    document.getElementById("root")
  );
}


