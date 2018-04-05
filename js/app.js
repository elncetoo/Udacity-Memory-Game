document.addEventListener("DOMContentLoaded", function() {

//$(document).ready(function() {
	/*
	 * Create a list that holds all of your cards
	 */

	// creating a cards array to hold the list of all cards
	let card = document.getElementsByClassName('card');
	let cards = [...card];
	// looping through each card to add event listener
	for (var i = 0; i < cards.length; i++){
	   cards[i].addEventListener('click', displayCard);
	};

	//assigning the deck to a variable with all the cards in the game
	const deck = document.querySelector('.deck');

	// declaring the variable for the star icons
	const stars = document.querySelectorAll(".fa-star");

	// creating stars list
 	let starsList = document.querySelectorAll(".stars li");

 	// declaring move variable
	let moves = 0;
	let counter = document.querySelector(".moves");

	// declaring a variable for the matchedCards
	let matchedCard = document.getElementsByClassName("match");

	// close icon in modal ????
 	let closeicon = document.querySelector(".close");

	// declare modal
	 let modal = document.getElementById("modal")

 	// array for opened cards
	var openedCards = [];

	 // toggle between adding a class name to the element
	var displayCard = function appendClass(){
	   this.classList.toggle('open');
	   this.classList.toggle('show');
	   this.classList.toggle('disable');
	};

	//setting up the timer
	var timer = new Timer();
	//timer.start();
	timer.addEventListener('secondsUpdated', function (e) {
	    $('#timer').html(timer.getTimeValues().toString());
	});


	//storing the shuffled cards in an array and appneding each one to an item
	function startGame(){
	   //timer.reset();
	   var shuffledCards = shuffle(cards);
	   for (var i= 0; i < shuffledCards.length; i++){
	      [].forEach.call(shuffledCards, function(item){
	         deck.appendChild(item);
	      });
	   }

	   //reseting the timer for the new game
	   $('#resetButton').click(function () {
   			timer.reset();
		});
	};



	/*
	 * Display the cards on the page
	 *   - shuffle the list of cards using the provided "shuffle" method below
	 *   - loop through each card and create its HTML
	 *   - add each card's HTML to the page
	 */

	// Shuffle function from http://stackoverflow.com/a/2450976
	function shuffle(array) {
	    var currentIndex = array.length, temporaryValue, randomIndex;

	    while (currentIndex !== 0) {
	        randomIndex = Math.floor(Math.random() * currentIndex);
	        currentIndex -= 1;
	        temporaryValue = array[currentIndex];
	        array[currentIndex] = array[randomIndex];
	        array[randomIndex] = temporaryValue;
	    }

	    return array;
	}

	// @description shuffles cards when page is refreshed / loads
	document.body.onload = startGame();

	/*
	 * set up the event listener for a card. If a card is clicked:
	 *  - display the card's symbol (put this functionality in another function that you call from this one)
	 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
	 *  - if the list already has another card, check to see if the two cards match
	 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
	 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
	 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
	 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
	 */






});