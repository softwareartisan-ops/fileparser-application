/**
 * @autor 2015.02.24 Manuel Villarejo Fernandez
 */


	function readFile(f){
		//create the object
		var reader = new FileReader();

		//Define an event handler 
		reader.onload = function(event){						
			var text = event.target.result; //The file content
			writeOutputReport(text, f.name);
	
		}
		//Read the file
		reader.readAsText(f); 
		reader.onerror = function(e) { //Error handling
			console.log("Error" , e)
		};

		
	}
	
	function getNumberOfLines(text){		
		var lines= text.split('\n');
		return lines.length;
	}
	
	function getNumberOfWords(text){		
		var words = text.split(' ');
		return words.length;
		
	}
	
	
	function getNumberOfCharacters(text){
		return text.length -1;		
	}
	
	function getNumberOfLetters(text){
		var regex = new RegExp("[A-Za-z]");
		var numLetters = 0;
		for (var i = 0; i < text.length; i++) {
				if(	text.charAt(i).match( regex )){				
				 	numLetters++;
				}
		}
		return numLetters;
		
	}
	
	function getNumberOfFigures(text){
		var regex = new RegExp("[0-9]");
		var numFigures = 0;
		for (var i = 0; i < text.length; i++) {
				if(	text.charAt(i).match( regex )){				
				 	numFigures++;
				}
		}
		return numFigures;
	}
	
	function getNumberSpecialCharacters(text){
		
		var regex = new RegExp("[^a-zA-Z0-9 :]");
		var numLetters = 0;
		for (var i = 0; i < text.length; i++) {
				if(	text.charAt(i).match( regex )){				
				 	numLetters++;
				}
		}
		return numLetters;
	
	}
	
	function parseWords(text){
		
		var num = 0;
		var regex = [ "[A-Za-z]{1}$",
		"[A-Za-z]{2}$",
		"\b\w{3}\b",
		"\b\w{4}\b",
		"\b\w{5}\b",
		"\b\w{6}\b",
		"\b\w{7}\b",
		"\b\w{8}\b",
		"\b\w{9}\b",
		"\b\w{10}\b",
		"\b\w{11}\b",
		"\b\w{12}\b"];
		
		
		
		if(	text.match( regex[0] )){
			var res = text.match( regex[0] );
			document.write("Number of 1 letter word: ", res);
			document.write("<br>");
		}
		if(	text.match( regex[1] )){				
			var res = text.match( regex[1] );
			document.write("Number of 2 letters word: ", res);
			document.write("<br>");
		}
		if(	text.match( regex[2] )){				
			var res = text.match( regex[2] );
			document.write("Number of 3 letters word: ", res);
			document.write("<br>");
		}
		if(	text.match( regex[3] )){				
			var res = text.match( regex[3] );
			document.write("Number of 4 letters word: ", res);
			document.write("<br>");
		}
		if(	text.match( regex[4] )){				
			var res = text.match( regex[4] );
			document.write("Number of 5 letters word: ", res);
			document.write("<br>");
		}
		if(	text.match( regex[5] )){				
			var res = text.match( regex[5] );

			document.write("Number of 6 letters word: ", res);
			document.write("<br>");
		}
		if(	text.match( regex[6] )){				
			var res = text.match( regex[6] );

			document.write("Number of 7 letters word: ", res);
			document.write("<br>");
		}
		if(	text.match( regex[7] )){				
			var res = text.match( regex[7] );
			document.write("Number of 8 letters word: ", res);
			document.write("<br>");
		}
		if(	text.match( regex[8] )){				
			var res = text.match( regex[8] );
			document.write("Number of 9 letters word: ", res);
			document.write("<br>");
		}
		if(	text.match( regex[9] )){				
			var res = text.match( regex[9] );
			document.write("Number of 10 letters word: ", res);
			document.write("<br>");
		}
		if(	text.match( regex[10] )){				
			var res = text.match( regex[10] );
			document.write("Number of 11 letters word: ", res);
			document.write("<br>");
		}
		if(	text.match( regex[11] )){					
			var res = text.match( regex[10] );
			document.write("Number of 12 letters word: ", res);
			document.write("<br>");
		}

	
	}
	
	function writeOutputReport(text, filename){
		document.write("File name: " , filename)
		document.write("<br>");
		document.write(" Number of lines: " , getNumberOfLines(text));
		document.write("<br>");
		document.write(" Number of words: " , getNumberOfWords(text));
		document.write("<br>");
		document.write(" Number of characters: " , getNumberOfCharacters(text));
		document.write("<br>");
		document.write("Number of figures: ", getNumberOfFigures(text));
		document.write("<br>");
		document.write("Number of letters: ", getNumberOfLetters(text));
		document.write("<br>");
		document.write("Number of specialCharacters: ", getNumberSpecialCharacters(text));
		document.write("<br>");
		
		parseWords(text);
	}