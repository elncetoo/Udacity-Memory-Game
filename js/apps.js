document.addEventListener("DOMContentLoaded", function() {

//$(document).ready(function() {
	/*
	 * Create a list that holds all of your cards
	 */

	// creating a cards array to hold the list of all cards
	//let card = document.getElementsByClassName('card');
	//let cards = [...card];

	let cards = ['fa-bicycle', 'fa-bicycle', 'fa-leaf', 'fa-leaf', 'fa-cube', 'fa-cube', 'fa-anchor', 'fa-anchor', 'fa-paper-plane-o', 'fa-paper-plane-o', 'fa-bolt', 'fa-bolt', 'fa-bomb', 'fa-bomb', 'fa-diamond', 'fa-diamond'],
	$rating = $('.fa-star'),
	$moves = $('.moves'),
    $restart = $('.restart'),
    $deck = $('.deck'),
    openedCards = [],
    match = 0,
    second = 0,
    moves = 0,
    wait = 500,
    turn = cards.length / 2,

    // Scoring system from 1 to 3 stars to shorten code
    stars3 = 13,
    stars2 = 16,
    star1 = 23;

    /*
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

	// close icon modal window
 	let closeModal = document.querySelector(".close");

	// declare modal
	let modal = document.getElementById("modal")

 	// array for opened cards
	let openedCards = [];

	
	//setting up the timer
	let timer = new Timer();
	timer.addEventListener('secondsUpdated', function (e) {
	    $('#timer').html(timer.getTimeValues().toString());
	});

	//reseting the timer for the new game
   $('#resetButton').click(function () {
		timer.reset();
		startGame();
	});
*/
	
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

	
	function startGame(){
		var timer = new Timer();
		timer.addEventListener('secondsUpdated', function (e) {
		    $('#timer').html(timer.getTimeValues().toString());
	});

	//reseting the timer for the new game
   $('#resetButton').click(function () {
		timer.reset();
		startGame();
	});
	}
		let shuffledCards = shuffle(cards);

		match = 0;
	    moves = 0;
	    $moves.text('0');

	    //to remove the classes from the cards
	   for (i= 0; i < shuffledCards.length; i++){

	    	[].forEach.call(shuffledCards, function(item){
	    	$deck.appendChild(item);
    		});
	    shuffledCards[i].classList.remove("show", "open", "match", "disabled");
	   }

	   addEventListener();

	   timer.start();

	}

	
	//storing the shuffled cards in an array and appneding each one to an item
	function startGame(){
		
	   //shuffle cards in the deck
	   cards = shuffle(cards);
	   //to remove the classes from the cards
	   for (var i= 0; i < cards.length; i++){
	   		deck.innerHTML = "";
	    	[].forEach.call(cards, function(item){
	    	deck.appendChild(item);
    		});
	    cards[i].classList.remove("show", "open", "match", "disabled");
	   }

	// reset moves


    // reset rating
    for (var i= 0; i < stars.length; i++){
        stars[i].style.color = "#FFD700";
        stars[i].style.visibility = "visible";
    }
	 
	//starting timer
	timer.start();  
	};

	// toggle between adding a class name to the element
		var displayCard = function appendClass(){
			this.classList.toggle('open');
			this.classList.toggle('show');
			this.classList.toggle('disabled');
		};
	// @description add opened cards to OpenedCards list and check if cards are match or not
	function cardOpen() {
	    openedCards.push(this);
	    var len = openedCards.length;
	    if(len === 2){
	        moveCounter();
	        if(openedCards[0].type === openedCards[1].type){
	            matched();
	        } else {
	            unmatched();
	        }
	    }
	};


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




	//const starContainer =$('.stars');
	//const firstStar = starContainer.firstElementChild;
	//starContainer.removeChild(firstStar);

		if (moves<3) {
			starsDisplayed = 3;
		} else if (moves > 20 && moves < 26) {
			$( "ul.stars li:eq(2)").removeClass('fa-star').addClass('fa-star-hide');
			starsDisplayed = 2;		
		} else if (moves > 26 && moves < 32) {
			$('.fa-star').eq(1).removeClass('fa-star').addClass('fa-star-hide');
			starsDisplayed = 1;
		} else if (moves > 32) {
			$('.fa-star').eq(1).removeClass('fa-star').addClass('fa-star-hide');
			starsDisplayed = 1;
		}

		document.getElementsByClassName('fa-star');

	


});