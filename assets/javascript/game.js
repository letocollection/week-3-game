WordArray = [];
WordUArray = [];

Lives = 6;
NumInhangmanwords = Words.Length;

Word = "";
WordU = "";

//Functions


PullWord = function(){
	Word = Words.List[(Math.floor(Math.random()*NumInhangmanwords))];
}

SetUnderline = function(){
	PullWord();
	for(i=0; i<Word.length; i++){
		WordArray[i] = Word.charAt(i);
		WordUArray[i] = "  ___  ";
	}

	WordU = WordUArray.join("");
	document.getElementByID("word").innerHTML = WordU;
	document.getElementByID("numLet").innerHTML = Word.length;

}
	

UpdateLetter = function(letter){
	Changes = 0;
	for(i=0; i<Word.length; i++){
		WordArray[i] = Word.charAt(i);
		if(Word.charAt(i) == letter){
			WordUArray [i] = letter;
			Changes += 1;
		}
	}

	if(Changes < 1) {
		Lives -=1;
		document.getElementById("lives").innerHTML = Lives;
	}

	WordU = WordUArray.join("");
	document.getElementById("word").innerHTML = WordU;
	Word1 = WordArray.join("");
	Word2 = WordUArray.join("");

	if (Word1 == Word2) {
		alert("You Win! Next Word");
		window.location.reload();
	}

	if(Lives < 1) {
		document.getElementById("word").innerHTML == Word1;
		alert("You Have Run Out Of Lives, Please Try Again");
		window.location.reload();
	}
}

PullWord();
SetUnderline();