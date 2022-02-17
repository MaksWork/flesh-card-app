import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import './Cards.css';

import CardListEmpty from "../CardListEmpty";

let initStateValue = 0;

const Cards = (props) =>{
	let [completed, setCompleted] = useState(initStateValue);
	
	if(completed > props.cards.length){
		initStateValue = 0;
		setCompleted(0);
	}

	function doneCard(){
		props.cards[completed].done = true;
		setCompleted(completed + 1);
		initStateValue++;
	}

	const getButton = (ar_length) =>{
		if(completed !== ar_length && props.cards[completed] !== undefined){
			return(
				<button onClick={() => doneCard(ar_length)}>Next</button>
			);
		}
		else{
			return(
				<div className="end-buttons-container">
					<Link to="/card-list">
						<button>View Card List</button> 
					</Link>
					<Link to="/new-cards">
						<button>Create New</button>
					</Link>
					
				</div>
			);
		}
	}

	if(props.cards.length !== 0){ 
		const cards_arr = props.cards;
		let text
		let counter;

		let buttons = getButton(cards_arr.length);

		if(cards_arr[completed] !== undefined){
			text = cards_arr[completed].text;
			counter = <h3 className="completed">{completed}/{cards_arr.length}</h3>;
		}
		else{
			text = "You done all things";
		}
		

		return( 
			<div className="card-list-container">
				<div className="card-container">
					<h1>{text}</h1>
					{buttons}
				</div>

				{counter}
			</div>
		);
	}
	else{ 
		return(
			<CardListEmpty/>
		);
	}
};

export default Cards;