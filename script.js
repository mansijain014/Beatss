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
	} document.addEventListener('keydown',(event) =>{
	console.log(event.keyCode);
	var key= event.keyCode;
	if(key == 49){
		var audio = new Audio("Sa1.ogg");
		audio.currentTime =0;
		audio.play();
		document.getElementById('one').style.backgroundColor = "#ff0099"
		document.getElementById('one').style.boxShadow ="0px 0px 20px 0px #ff0099";
	    setTimeout(function()
		{
			document.getElementById('one').style.backgroundColor="transparent";
			document.getElementById('one').style.boxShadow ="none";
		},500)
	} 

	if(key == 50){
		var audio = new Audio("Re1.ogg");
		audio.currentTime =0;
		audio.play();
		document.getElementById('two').style.backgroundColor = "#00ffff"
		document.getElementById('two').style.boxShadow ="0px 0px 20px 0px #00ffff";
	    setTimeout(function()
		{
			document.getElementById('two').style.backgroundColor="transparent";
			document.getElementById('two').style.boxShadow ="none";
		},500)
	} 
	if(key == 51){
		var audio = new Audio("Ga1.ogg");
		audio.currentTime =0;
		audio.play();
		document.getElementById('three').style.backgroundColor = "#ff0099"
		document.getElementById('three').style.boxShadow ="0px 0px 20px 0px #ff0099";
	    setTimeout(function()
		{
			document.getElementById('three').style.backgroundColor="transparent";
			document.getElementById('three').style.boxShadow ="none";
		},500)
	} 
	if(key == 52){
		var audio = new Audio("Ma1.ogg");
		audio.currentTime =0;
		audio.play();
		document.getElementById('four').style.backgroundColor = "#00ffff"
		document.getElementById('four').style.boxShadow ="0px 0px 20px 0px #00ffff";
	    setTimeout(function()
		{
			document.getElementById('four').style.backgroundColor="transparent";
			document.getElementById('four').style.boxShadow ="none";
		},500)
	} 
	if(key == 53){
		var audio = new Audio("Pa1.ogg");
		audio.currentTime =0;
		audio.play();
		document.getElementById('five').style.backgroundColor = "#00ffff"
		document.getElementById('five').style.boxShadow ="0px 0px 20px 0px #00ffff";
	    setTimeout(function()
		{
			document.getElementById('five').style.backgroundColor="transparent";
			document.getElementById('five').style.boxShadow ="none";
		},500)
	} 
	if(key == 54){
		var audio = new Audio("Dha1.ogg");
		audio.currentTime =0;
		audio.play();
		document.getElementById('six').style.backgroundColor = "#ff0099"
		document.getElementById('six').style.boxShadow ="0px 0px 20px 0px #ff0099";
	    setTimeout(function()
		{
			document.getElementById('six').style.backgroundColor="transparent";
			document.getElementById('six').style.boxShadow ="none";
		},500)
	} 
	if(key == 55){
		var audio = new Audio("Ni1.ogg");
		audio.currentTime =0;
		audio.play();
		document.getElementById('seven').style.backgroundColor = "#00ffff"
		document.getElementById('seven').style.boxShadow ="0px 0px 20px 0px #00ffff";
	    setTimeout(function()
		{
			document.getElementById('seven').style.backgroundColor="transparent";
			document.getElementById('seven').style.boxShadow ="none";
		},500)
	} 
	if(key == 83){
		var audio = new Audio("Sa2.ogg");
		audio.currentTime =0;
		audio.play();
		document.getElementById('eight').style.backgroundColor = "#ff0099"
		document.getElementById('eight').style.boxShadow ="0px 0px 20px 0px #ff0099";
	    setTimeout(function()
		{
			document.getElementById('eight').style.backgroundColor="transparent";
			document.getElementById('eight').style.boxShadow ="none";
		},500)
	} 
	if(key == 82){
		var audio = new Audio("Re2.ogg");
		audio.currentTime =0;
		audio.play();
		document.getElementById('nine').style.backgroundColor = "#ff0099"
		document.getElementById('nine').style.boxShadow ="0px 0px 20px 0px #ff0099";
	    setTimeout(function()
		{
			document.getElementById('nine').style.backgroundColor="transparent";
			document.getElementById('nine').style.boxShadow ="none";
		},500)
	} 
	if(key == 71){
		var audio = new Audio("Ga2.ogg");
		audio.currentTime =0;
		audio.play();
		document.getElementById('ten').style.backgroundColor = "#00ffff"
		document.getElementById('ten').style.boxShadow ="0px 0px 20px 0px #00ffff";
	    setTimeout(function()
		{
			document.getElementById('ten').style.backgroundColor="transparent";
			document.getElementById('ten').style.boxShadow ="none";
		},500)
	} 
	if(key == 77){
		var audio = new Audio("Ma2.ogg");
		audio.currentTime =0;
		audio.play();
		document.getElementById('eleven').style.backgroundColor = "#ff0099"
		document.getElementById('eleven').style.boxShadow ="0px 0px 20px 0px #ff0099";
	    setTimeout(function()
		{
			document.getElementById('eleven').style.backgroundColor="transparent";
			document.getElementById('eleven').style.boxShadow ="none";
		},500)
	} 
	if(key == 80){
		var audio = new Audio("Pa2.ogg");
		audio.currentTime =0;
		audio.play();
		document.getElementById('twelve').style.backgroundColor = "#00ffff"
		document.getElementById('twelve').style.boxShadow ="0px 0px 20px 0px #00ffff";
	    setTimeout(function()
		{
			document.getElementById('twelve').style.backgroundColor="transparent";
			document.getElementById('twelve').style.boxShadow ="none";
		},500)
	} 
	if(key == 68){
		var audio = new Audio("Dha2.ogg");
		audio.currentTime =0;
		audio.play();
		document.getElementById('thirteen').style.backgroundColor = "#00ffff"
		document.getElementById('thirteen').style.boxShadow ="0px 0px 20px 0px #00ffff";
	    setTimeout(function()
		{
			document.getElementById('thirteen').style.backgroundColor="transparent";
			document.getElementById('thirteen').style.boxShadow ="none";
		},500)
	} 
	if(key == 78){
		var audio = new Audio("Ni2.ogg");
		audio.currentTime =0;
		audio.play();
		document.getElementById('fourteen').style.backgroundColor = "#ff0099"
		document.getElementById('fourteen').style.boxShadow ="0px 0px 20px 0px #ff0099";
	    setTimeout(function()
		{
			document.getElementById('fourteen').style.backgroundColor="transparent";
			document.getElementById('fourteen').style.boxShadow ="none";
		},500)
	} 
	if(key == 65){
		var audio = new Audio("Sa3.ogg");
		audio.currentTime =0;
		audio.play();
		document.getElementById('fifteen').style.backgroundColor = "#00ffff"
		document.getElementById('fifteen').style.boxShadow ="0px 0px 20px 0px #00ffff";
	    setTimeout(function()
		{
			document.getElementById('fifteen').style.backgroundColor="transparent";
			document.getElementById('fifteen').style.boxShadow ="none";
		},500)
	} 
	if(key == 70){
		var audio = new Audio("Re3.ogg");
		audio.currentTime =0;
		audio.play();
		document.getElementById('sixteen').style.backgroundColor = "#ff0099"
		document.getElementById('sixteen').style.boxShadow ="0px 0px 20px 0px #ff0099";
	    setTimeout(function()
		{
			document.getElementById('sixteen').style.backgroundColor="transparent";
			document.getElementById('sixteen').style.boxShadow ="none";
		},500)
	} 
});


});

