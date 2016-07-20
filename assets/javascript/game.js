
var letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","_"];
var lowercase = array.letters{};

Main = {};
Main.WordArray = [];
Main.WordUArray = [];

Main.Lives = 4;
Main.NumInWordBank = Words.Length;

Main.Word = "test"
Main.WordU = "";

//Functions

Main.PullWord = function(){
	Main.Word = Words.List[(Math.floor(Math.random()*Main.NumInWordBank))];
}

Main.SetUnderline = function(){
	Main.PullWord();
	for(i=0; i<Main.Word.length;i++){
		Main.WordArray[i] = Main.Word.charAt(i);
		Main.WordUArray[i] = "_";
	}
	Main.WordU = Main.WordUArray.join("");
	document.getElementByID("word").innerHTML = Main.WordU;
	document.getElementByID("numLetters").innerHTML = Main.Word.length;

}

Main.UpdateLetter = function(letter){
	Main.Changes = 0;
	for(i=0; i<Main.Word.length;i++){
		Main.WordArray[i] = Main.Word.CharAt(i);
		if(Main.Word.charAt(i) == letter){
			Main.WordUArray [i] = letter;
			Main.Changes += 1;
	}

}

	if(Main.Changes < 1) {
		Main.Lives -=1;
		document.getElementByID("lives").innerHTML = Main.Lives;
	}

	Main.WordU = Main.WordUArray.join("");
	document.getElementByID("WORD").innerHTML = Main.WordU;
	Main.Word1 = Main.WordArray.join("");
	Main.Word2 = Main.WordUArray.join("");

	If (Main.Word1 == Main.Word2) {
		alert("You Win! Next Word");
		window.location.reload();
	}

	If(Main.Lives < 1){
		document.getElementById("word").innerHTML == Main.Word1;
		alert("You Have Run Out Of Lives, Plese Try Again");
		window.location.reload();
	}
}

Main.PullWord();
Main.SetUnderline();