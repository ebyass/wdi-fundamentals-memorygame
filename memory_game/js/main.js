console.log ("Up and running!");

const cards = [
{
	rank:"queen",
	suit:"hearts",
	cardImage:"images/queen-of-hearts.png",
},
{
	rank:"queen",
	suit:"diamonds",
	cardImage:"images/queen-of-diamonds.png",
},
{
	rank:"king",
	suit:"hearts",
	cardImage:"images/king-of-hearts.png",
},
{
	rank:"king",
	suit:"diamonds",
	cardImage:"images/king-of-diamonds.png",

}
];



let cardsInPlay = [];

function checkForMatch (){

	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again");
	}
}
function flipCard () {
let cardId = this.getAttribute('data-id');
this.setAttribute('cards'[.cardId],'.cardImage');
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




function createBoard();

var cards;
for (let i = 0; 1 <= 3; i++) {

	var cardElement = document.createElement('.img');
	cardElement.innerHTML = 'images/queen-of-hearts.png';
	cardElement.setAttribute('src', 'images/back.png');
	cardElement.setAttribute('data-id', i);
	document.getElementsByTagName('game-board')[0].appendChild(cardElement);
}

document.getElementsByTagName('cardElement')[0].addEventListener('click', flipCard);
createBoard();

//for (let i = 0; i < cards.length; i++) {
   // var cards; 
    //= document.createElement('.img'); 
    //let cardsElement = document.createElement('.img');
    //cardElement.setAttribute('src', 'images/back.png');
    //cardElement[i].setAttribute('data-id');
//}








//if cards.length === 2; cardsInPlay = cardsInPlay[0] === cardsInPlay[1] ? alert ("you've found a match!") : alert ("Sorry Try Again.");







