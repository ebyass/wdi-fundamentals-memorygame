console.log ("Up and running!");


let cards = ["queen", "queen", "king", "king"];

let cardsInPlay = [];

function checkForMatch (){

	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again");
	}
}
function flipCard (cardId) {

if (cardsInPlay.length === 2 ) {

	if (cardsInPlay[0] === cardsInPlay[1]) {

		alert("You've found a match!"); }
		 
		 else {

			alert("Sorry Try Again.");
		}
}

	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	checkForMatch();
	
};



flipCard(0);
flipCard(2);









//if cards.length === 2; cardsInPlay = cardsInPlay[0] === cardsInPlay[1] ? alert ("you've found a match!") : alert ("Sorry Try Again.");







