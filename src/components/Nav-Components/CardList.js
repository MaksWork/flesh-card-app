import React from "react";
import { Link } from "react-router-dom";
import CardListEmpty from "../CardListEmpty";

import { setIds } from "../utils/setCardIds";

import './CardList.css';

const CardList = (props) => {
	const cards = props.cards
	
	if(cards.length !== 0){
		
		
		function deleteDone(){
			let newCards = cards.filter((card) =>{
				return card.done === false;
			})
			newCards = setIds(newCards);
			props.deleteCardsFunc(newCards);
		}
		function deleteCard(cardId){
			let newCards = cards.filter((card) =>{
				return card.id !== cardId;
			});
			newCards = setIds(newCards);
			props.deleteCardsFunc(newCards);
		}
		
		const card_list = cards.map((card, i) => {
			let doneIcon;
	
			if(card.done === true){
				doneIcon = <a className="done" id="isDone"><i class="fa-solid fa-check"></i></a>;
			}
			else{
				doneIcon = <a className="undone" id="isDone"><i class="fa-solid fa-xmark"></i></a>;
			}
	
			return(
				<div className="card-info-container" key={i}>
					<h3>{card.text}</h3>
	
					<div className="icon-links">
						{doneIcon}
						<Link to={`/new-cards/:${card.id}`} className="active-link"><i class="fa-solid fa-pen-to-square"></i></Link>	
						<button onClick={() => deleteCard(card.id)}><i class="fa-solid fa-trash"></i></button>
					</div>
				</div>
			);
		});
		
		return(
			<div className="cards-container">
				{card_list}
				<button id="delete-all-done" onClick={deleteDone}>Delete all done</button>
			</div>
		);
	}
	else{
		return(<CardListEmpty/>)
	}

}

export default CardList;