document.addEventListener('keydown',(event) =>{
	console.log(event.keyCode);
	var key= event.keyCode;
	if(key == 49){
		var audio = new Audio("Piano Chord 208.mp3");
		audio.currentTime =0;
		audio.play();
		document.getElementById('49').style.backgroundColor ="grey";
		document.getElementById('49').style.boxShadow ="0px 0px 20px 0px grey";
		setTimeout(function()
		{
			document.getElementById('49').style.backgroundColor="#191970";
			document.getElementById('49').style.boxShadow ="none";
		},500)
	} 
	if(key == 50){
		var audio = new Audio("Piano Chord 209.mp3");
		audio.currentTime =0;
		audio.play();
	} 
	if(key == 51){
		var audio = new Audio("Piano Chord 331.mp3");
		audio.currentTime =0;
		audio.play();
	} 
	if(key == 52){
		var audio = new Audio("Cymbal Suspended 2.mp3");
		audio.currentTime =0;
		audio.play();
	} 
	if(key == 53){
		var audio = new Audio("Drum Snare Roll.mp3");
		audio.currentTime =0;
		audio.play();
	} 
	if(key == 54){
		var audio = new Audio("Drum Sticks Hit 3.mp3");
		audio.currentTime =0;
		audio.play();
	} 
	if(key == 55){
		var audio = new Audio("Musical Compos 33.mp3");
		audio.currentTime =0;
		audio.play();
	} 
	if(key == 56){
		var audio = new Audio("Musical Orches 4.mp3");
		audio.currentTime =0;
		audio.play();
	} 
	if(key == 57){
		var audio = new Audio("PREL Musical 57.mp3");
		audio.currentTime =0;
		audio.play();
	} 
});

