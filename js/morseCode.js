var morseCode = {
	text: null,
	code: null,
	audioShortBeepPath: null,
	audioLongBeepPath: null,
	convertToCode: function(){
		var chars = morseCode.text.split('');
		var codeText = "";
		for(i = 0; i < chars.length; i++){
			switch(chars[i]){
				case "a":
				case "A":
					codeText += ".- ";
					break;
				case "b":
				case "B":
					codeText += "-... ";
					break;
				case "c":
				case "C":
					codeText += "-.-. ";
					break;
				case "d":
				case "D":
					codeText += "-.. ";
					break;
				case "e":
				case "E":
					codeText += ". ";
					break;
				case "f":
				case "F":
					codeText += "..-. ";
					break;
				case "g":
				case "G":
					codeText += "--. ";
					break;
				case "h":
				case "H":
					codeText += ".... ";
					break;
				case "i":
				case "I":
					codeText += ".. ";
					break;
				case "j":
				case "J":
					codeText += ".--- ";
					break;
				case "k":
				case "K":
					codeText += "-.- ";
					break;
				case "l":
				case "L":
					codeText += ".-.. ";
					break;
				case "m":
				case "M":
					codeText += "-- ";
					break;
				case "n":
				case "N":
					codeText += "-. ";
					break;
				case "o":
				case "O":
					codeText += "--- ";
					break;
				case "p":
				case "P":
					codeText += ".--. ";
					break;
				case "q":
				case "Q":
					codeText += "--.- ";
					break;
				case "r":
				case "R":
					codeText += ".-. ";
					break;
				case "s":
				case "S":
					codeText += "... ";
					break;
				case "t":
				case "T":
					codeText += "- ";
					break;
				case "u":
				case "U":
					codeText += "..- ";
					break;
				case "v":
				case "V":
					codeText += "...- ";
					break;
				case "w":
				case "W":
					codeText += ".-- ";
					break;
				case "x":
				case "X":
					codeText += "-..- ";
					break;
				case "y":
				case "Y":
					codeText += "-.-- ";
					break;
				case "z":
				case "Z":
					codeText += "--.. ";
					break;
				case 0:
				case "0":
					codeText += "----- ";
					break;
				case 1:
				case "1":
					codeText += ".---- ";
					break;
				case 2:
				case "2":
					codeText += "..--- ";
					break;
				case 3:
				case "3":
					codeText += "...-- ";
					break;
				case 4:
				case "4":
					codeText += "....- ";
					break;
				case 5:
				case "5":
					codeText += "..... ";
					break;
				case 6:
				case "6":
					codeText += "-.... ";
					break;
				case 7:
				case "7":
					codeText += "--... ";
					break;
				case 8:
				case "8":
					codeText += "---.. ";
					break;
				case 9:
				case "9":
					codeText += "----. ";
					break;
				default:
					codeText += "....... ";
			}
		}
		return this.code = codeText;
	},
	convertToText: function(){
		var chars = morseCode.code.split(' ');
		var codeText = "";
		for(i = 0; i < chars.length; i++){
			switch(chars[i]){
				case ".-":
					codeText += "A";
					break;
				case "-...":
					codeText += "B";
					break;
				case "-.-.":
					codeText += "C";
					break;
				case "-..":
					codeText += "D";
					break;
				case ".":
					codeText += "E";
					break;
				case "..-.":
					codeText += "F";
					break;
				case "--.":
					codeText += "G";
					break;
				case "....":
					codeText += "H";
					break;
				case "..":
					codeText += "I";
					break;
				case ".---":
					codeText += "J";
					break;
				case "-.-":
					codeText += "K";
					break;
				case ".-..":
					codeText += "L";
					break;
				case "--":
					codeText += "M";
					break;
				case "-.":
					codeText += "N";
					break;
				case "---":
					codeText += "O";
					break;
				case ".--.":
					codeText += "P";
					break;
				case "--.-":
					codeText += "Q";
					break;
				case ".-.":
					codeText += "R";
					break;
				case "...":
					codeText += "S";
					break;
				case "-":
					codeText += "T";
					break;
				case "..-":
					codeText += "U";
					break;
				case "...-":
					codeText += "V";
					break;
				case ".--":
					codeText += "W";
					break;
				case "-..-":
					codeText += "X";
					break;
				case "-.--":
					codeText += "Y";
					break;
				case "--..":
					codeText += "Z";
					break;
				case "-----":
					codeText += "0";
					break;
				case ".----":
					codeText += "1";
					break;
				case "..---":
					codeText += "2";
					break;
				case "...--":
					codeText += "3";
					break;
				case "....-":
					codeText += "4";
					break;
				case ".....":
					codeText += "5";
					break;
				case "-....":
					codeText += "6";
					break;
				case "--...":
					codeText += "7";
					break;
				case "---..":
					codeText += "8";
					break;
				case "----.":
					codeText += "9";
					break;
				default:
					codeText += " ";
			}
		}
		return this.code = codeText;
	},
	playAudio: function(){
		var chars = this.code.split('');
		function playbeeps(i, chars){
			setTimeout(function(){
				if(chars[i] == '.'){
					new Audio(morseCode.audioShortBeepPath).play();
				}else if(chars[i] == '-'){
					new Audio(morseCode.audioLongBeepPath).play();
				}
				if(i < chars.length){
					i++;
					playbeeps(i,chars);
				}
			}, 800);
		}
		playbeeps(0, chars);
	}
};