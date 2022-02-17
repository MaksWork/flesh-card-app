import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import './NewCard.css';

let inputValue = "";
const NewCard = (props) =>{
	let [taskText, setTaskText] = useState("");
	let [isRedirect, setIsRedirect] = useState(false);

	const {id} = useParams();
	useEffect(()=>{
		if(id !== undefined){
			setTaskText(props.cards[id.slice(1)].text);
		}
	},[]);
	
	let saveBtn;
	if(isRedirect){
		saveBtn = <Link to="/cards"><button onClick={sendCard} className="save-btn">Save</button></Link>;
	}
	else{
		saveBtn = <button onClick={sendCard} className="save-btn">Save</button>;
	}
		
	

	function sendCard(){
		if(id === undefined){
			let newCard = {text: taskText, done: false, id: props.cards.length};
			props.newCardFunc(newCard);
		}
		else{
			props.cards[id.slice(1)].text = taskText;
		}
	}
	
	return(
		<div className="new-card-container">
			<h3>Create a Flash Card</h3>
			<div className="new-card-form">
				<p>The Task</p>
				<input value={taskText} onChange={(e) => setTaskText(e.target.value)}/>
			</div>
			{saveBtn}
			<input type="checkbox" onChange={(e) => setIsRedirect(e.target.checked)}></input>
			<label>Redirect to 'Cards'?</label>
		</div>
	);
};

export default NewCard;