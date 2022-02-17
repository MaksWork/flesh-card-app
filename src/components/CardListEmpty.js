import React from "react";
import { Link } from "react-router-dom";

import "./CardListEmpty.css";

const CardListEmpty = () =>{
	return(
		<div className="no-cards-container"> 
			<h3 className="no-cards-alert center">You have no flash cards.</h3>
			<Link to="/new-cards"> 
				<button id="make-card-btn">Make One</button>
			</Link>
		</div>
	);
}

export default CardListEmpty;