import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

const Maps = React.createClass({
	// getInitialState() {
	// 	return {
	// 		name: "",
	// 		zip: null,
	// 		lat: null,
	// 		lng: null
	// 	};
	// },
	// componentDidMount() {

	// 	  // $('iframe').attr('src', url + mode +'?key='+ key +param);
	// 	  $('iframe').attr('src',
	// 	  	"https://www.google.com/maps/embed/v1/search?key=AIzaSyDbJUsdZAQ7Zlsa3L9Vdu1pM4E__7kZZDc&q=C4Q"
	// 	  	// url + mode +'?key='+ key +param
	// 	  	);

	// },

	// src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBR3YnmH_sCLgjpiBnGsIb8YALCQvMbhRQ&q=Coalition+for+Queens"
	// let query = 
	
	render() {
		let src = "https://www.google.com/maps/embed/v1/place?key=AIzaSyBR3YnmH_sCLgjpiBnGsIb8YALCQvMbhRQ&q=" + this.props.query;
		
		return (

			 <iframe
			  id="map"
			  width="600"
			  height="450"
			  frameBorder="0"
			  src={src} allowFullScreen>
			</iframe>
		);
	}
});

export default Maps;

