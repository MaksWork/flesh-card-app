import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	NavLink,
	Link,
	Navigate
} from "react-router-dom";
import { useState } from "react";

import Cards from "../Nav-Components/Cards";
import NewCard from "../Nav-Components/NewCard";
import CardList from "../Nav-Components/CardList";
import About from "../Nav-Components/About";


import './NavBar.css';
import logo from "../../img/logo-flesh-card.jpg";

let startCards = [
	{text:"Homework", done: false, id: 0},
	{text:"Gym", done: false, id: 1},
	{text:"Code", done: false, id: 2}
]; //! Save this in locationStorage later...
//* ну вроде по функционалу все остались только анимации и мелочи всякие


const NavBar = () =>{
	let [cards, setCards] = useState(startCards);
	
	function newCard(newCard){
		setCards(c => [...c , newCard])
	}
	function deleteCard(newCards){
		setCards([...newCards]);
	}
	
	return(
		<Router>
			<div className='navbar'>
				<nav>
					<Link className="nav-el" to={"/cards"} id="home_page"><img id="logo-img" alt="logo" src={logo}/>Do it</Link>
					<NavLink activeClassName="active" className="nav-el" to={"/cards"}>Cards</NavLink>
					<NavLink activeClassName="active" className="nav-el" to={"/new-cards"}>New Card</NavLink> 
					<NavLink activeClassName="active" className="nav-el" to={"/card-list"}>Card List</NavLink>
					<NavLink activeClassName="active" className="nav-el" to={"/about"}>About</NavLink>
				</nav>
			</div>

			<Routes>
				<Route exact path="/" element={<Navigate to="/cards"/>}/>
				<Route exact path="/cards" element={<Cards cards={cards}/>}/>
				<Route exact path="/new-cards" element={<NewCard cards={cards} newCardFunc={newCard}/>}/>
				<Route path="/new-cards/:id" element={<NewCard cards={cards}/>}/>
				<Route exact path="/card-list" element={<CardList cards={cards} deleteCardsFunc={deleteCard}/>} />
				<Route exact path="/about" element={<About/>}/>
			</Routes>
		</Router>
	);
};

export default NavBar;