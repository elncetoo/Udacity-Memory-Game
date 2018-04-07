document.addEventListener("DOMContentLoaded", function() {

//$(document).ready(function() {
	/*
	 * Create a list that holds all of your cards
	 */

	// creating a cards array to hold the list of all cards
	let card = document.getElementsByClassName('card');
	let cards = [...card];

	//assigning the deck to a variable with all the cards in the game
	const deck = document.querySelector('.deck');

	// declaring the variable for the star icons
	const star = document.querySelectorAll(".fa-star");
	let stars = [...star];
	// creating stars list
 	//let starsList = document.querySelectorAll(".stars li");

 	// declaring move variable
	let counter = document.querySelector("#moves");
	let moves = 0;
	//counting the moves
	$('.card').click(function(){
		moves++;
		$('#moves').html(moves);
	});

	function resetCounter(){
	    counter = 0;
	    document.getElementById('moves').innerHTML = counter;
	}

	//star rating
	function starRating(moves){
		let firstStar = document.querySelector('.star-1');
		firstStar.style.color = 'yellow';
		let secondStar = document.querySelector('.star-2');
		secondStar.style.color = 'yellow';
		let thirdStar = document.querySelector('.star-3');
		thirdStar.style.color = 'yellow';

		if (moves<3) {
			starsCount = 3;
		} else if (moves > 20 && moves < 26) {
			starsCount = 2;
			firstStar.style.color = 'black';
		} else if (moves > 26 && moves < 32) {
			starsCount = 1;
			firstStar.style.color = 'black';
			secondStar.style.color = 'black';
		} else if (moves > 32) {
			firstStar.style.color = 'black';
			secondStar.style.color = 'black';
			thirdStar.style.color = 'black';
		}

	}

	// declaring a variable for the matchedCards
	let matchedCard = document.getElementsByClassName("match");

	// close icon in modal 
 	let closeicon = document.querySelector(".close");

	// declare modal
	let modal = document.getElementById("modal")

 	// array for opened cards
	var openedCards = [];

	


	 // toggle between adding a class name to the element
	let displayCard = function appendClass(){
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


	// @description shuffles cards when page is refreshed / loads
	document.body.onload = startGame();

	//storing the shuffled cards in an array and appneding each one to an item
	function startGame(){
		// looping through each card to add event listener
		for (var i = 0; i < cards.length; i++){
		   cards[i].addEventListener('click', displayCard);

		};

	   //timer.reset();
	   cards = shuffle(cards);
	   for (var i= 0; i < cards.length; i++){
	   	//deck.innerHTML = "";
	      [].forEach.call(cards, function(item){
	         deck.appendChild(item);
	      });
	      cards[i].classList.remove("show", "open", "match", "disabled");
	   }

	   resetCounter();

	   starRating(moves);

	   //reseting the timer for the new game
	   $('#resetButton').click(function () {
   			timer.reset();
   			startGame();
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