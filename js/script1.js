var quotes = [
	
	{ quote: "There is a time for everything, and a season for every activity under the heavens...", 
	source: 'Solomon',
	citation: 'Holly Bible',
	 year: 'Long-long time ago'
	
	},
	
	
	{ quote:'You could read Kant by yourself, if you wanted; but you must share a joke with some one else', 
	source:'Robert Louis Stevenson',
	 citation: 'to his wife'

	},
	
	
  { quote: "The only source of knowledge is experience.", 
	source: "Albert Einstein",
	 citation: 'in his memoirs',
	 year: 'relativly: before his death'
	},
	
  { quote:'Elementary, my dear Watson', 
	source: 'Sherlock Holmes',
   citation: 'The Adventures of Sherlock Holmes',
	 year: 'always in the end of the book'
	},
  
	
  { quote: "I shut my eyes in order to see", 
	source: "Paul Gauguin",
   citation: "in Paris"
	}

];

	
	var quotes2 = []; 
	var msg = "";

//This function returns random index accordingly quotes.length, which is changable and she knows it
 function getRandomQuote() {
	 
	 return  Math.floor(Math.random()*quotes.length);
  } 
	
//This function returns random number and becomes color value later
function randomRGB() {
  return Math.floor(Math.random()*256);
}

//This is variable nC, it  gets the constructed string in mode 'rgb(r, g, b)' made by this function 
var nC = function newColor() {
 var red = randomRGB();
 var green = randomRGB();
 var blue = randomRGB();
  
 var color = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
  return color;

}; 


var quo;// a service variable


// When this function is called by the eventListener, she gets one random index from getRandomQuote function, constructs a string and prints it, then removes this quote from the array, adding it to second array. The second array is growing everytime when new quote is printed. And when first array has nomore quotes, second array gives collected quotes back to the first array

function printQuote() {

	
	var q = getRandomQuote();

	
			msg = '<p class="quote">' + quotes[q].quote + '</p>';
			msg += '<p class="source">' + quotes[q].source + '</p>';
			if (quotes[q].citation !== "") {
				msg += '<span class="citation">' + quotes[q].citation + '</span>';
				} else {
						msg += '';
						}
			if (quotes[q].year !== undefined) {
				msg += '<span class="year">' + quotes[q].year + '</span>';
				} else {
						msg +='';
				}
		document.getElementById("quote-box").innerHTML = msg;
		document.body.style.backgroundColor = nC();
		
		quo = quotes.splice(q, 1);
		quotes2 = quotes2.concat(quo);
	
	if (quotes.length === 0)
	{
		quotes = quotes.concat(quotes2);
		quotes2 = [];
	}
			
				return console.log(quotes2); 

				}

	setInterval(printQuote, 5000); // changes the quotes without any click, calling function printQuote every 5 seconds
			
document.getElementById('loadQuote').addEventListener("click", printQuote, false);