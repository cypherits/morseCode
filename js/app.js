window.addEventListener("load", function(){
	document.getElementById('text-to-code').addEventListener("click", function(){
		var text = document.getElementById('input-text').value;
		morseCode.text = text;
		var code = morseCode.convertToCode();
		document.getElementById('input-code').value = code;
	});
	document.getElementById('code-to-text').addEventListener("click", function(){
		var code = document.getElementById('input-code').value;
		morseCode.code = code;
		var text = morseCode.convertToText();
		document.getElementById('input-text').value = text;
	});
	document.getElementById('play-code').addEventListener("click", function(){
		var code = document.getElementById('input-code').value;
		morseCode.code = code;
		morseCode.audioShortBeepPath = "./beep/shortbeep.mp3";
		morseCode.audioLongBeepPath = "./beep/longbeep.mp3";
		morseCode.playAudio();
	});
});