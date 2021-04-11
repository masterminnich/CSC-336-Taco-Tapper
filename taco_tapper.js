"use strict";

(function() {
	window.addEventListener("load", init);

	function init() {
		id("bigTaco").addEventListener("click", addTaco);
		id("mom").addEventListener("click", function(){ addAutomation("mom"); }, false);
		id("tacoBell").addEventListener("click", function(){ addAutomation("tacoBell"); }, false);
		id("robot").addEventListener("click", function(){ addAutomation("robot"); }, false);
		id("warehouse").addEventListener("click", function(){ addAutomation("warehouse"); }, false);
		id("factory").addEventListener("click", function(){ addAutomation("factory"); }, false);
		id("timemachine").addEventListener("click", function(){ addAutomation("timemachine"); }, false);
		let tacoAmt = id("taco_amt");
		let tpsAmt = id("tps_amt");
		
		// Timer to update automated tacos
		let timer = setInterval(function(){ 
			tacoAmt.innerText = Math.round(((parseFloat(tacoAmt.innerText) + parseFloat(tpsAmt.innerText))*10)/10);
		}, 1000);
		
		let pTag = document.createElement("p");
		pTag.innerText = "Change View";
		pTag.className = "changeStyle";
		id("upgrades").appendChild(pTag);
		pTag.addEventListener("click", function(){ changeView(); }, false);
		
		// Generate a random number every second. If the user is lucky a golden taco is spawned in.
		var timerInt = setInterval(function () {
			let r = Math.floor(Math.random() * 10000);
			console.log(r);
			if(r == 4663){
				let specialTaco = document.createElement("img");
				specialTaco.src = "images/goldTaco.png";
				specialTaco.addEventListener("click", function(){ addSpecial }, false);
				id("specialTacos").appendChild(specialTaco);
				specialTaco.className="goldTaco";
			}
    	}, 1000);
	}
	
	let view = 0;
	function changeView(){
		if(view == 0){
			view = 1;
			id("bigTaco").src = "images/taco2.png";
			id("momImg").src = "images/mom2.jpg";
			id("tacobellImg").src = "images/tacobell2.jpg";
			id("robotImg").src = "images/robot2.jpg";
			id("timemachineImg").src = "images/timemachine2.jpg";
			id("smokestackImg").src = "images/smokestack2.jpg";
			id("warehouseImg").src = "images/warehouse2.jpg";
			document.body.style.backgroundImage = "url('images/background.jpg')";
			let miniT = document.getElementsByClassName("miniTaco");
			for(let qq=0; qq< miniT.length; qq++){
				miniT[qq].src="images/taco2.png";
			}
		} else {
			view = 0;
			id("bigTaco").src = "images/taco.png";
			id("momImg").src = "images/mom.jpg";
			id("tacobellImg").src = "images/tacobell.png";
			id("robotImg").src = "images/robot.jpg";
			id("timemachineImg").src = "images/timemachine.jpg";
			id("smokestackImg").src = "images/smokestack.jpg";
			id("warehouseImg").src = "images/warehouse.jpg";
			document.body.style.backgroundImage = "url('http://www.zingerbugimages.com/backgrounds/sky_blue_tie_dye_seamless.jpg')";
			let miniT = document.getElementsByClassName("miniTaco");
			for(let q=0; q< miniT.length; q++){
				miniT[q].src="images/taco.png";
			}
		}
	}
	
	function addSpecial(){
		let tacoAmt = id("taco_amt");
		let r = Math.floor(Math.random() * 10000000);
		tacoAmt.innerText = parseFloat(tacoAmt.innerText) + r;
	}
	
	function addTaco(){
		let tacoAmt = id("taco_amt");
		tacoAmt.innerText = parseFloat(tacoAmt.innerText) + 1;
		
		// Add +1 animation
		let plusOne = document.createElement("p");
		plusOne.className = "plusOne";
		document.querySelectorAll("main")[0].appendChild(plusOne);
		setTimeout(function(){ plusOne.remove() }, 3000);
	}
	
	function addAutomation(item){
		let dictTPS = { "mom":1, "tacoBell":15, "robot":120, "warehouse":1025, "factory":10000, "timemachine":9999999 }
		let itemPrice = id(item+"_price");
		let itemActive = id(item+"_active");
		let tacoAmt = id("taco_amt");
		let tpsAmt = id("tps_amt");
		if( parseFloat(tacoAmt.innerText) >= parseFloat(itemPrice.innerText) ){
			itemActive.innerText = parseFloat(itemActive.innerText) + 1;
			tacoAmt.innerText = parseInt(parseFloat(tacoAmt.innerText) - parseFloat(itemPrice.innerText));
			// Increase Cost of Item
			itemPrice.innerText = Math.round((parseFloat(itemPrice.innerText) ** 1.35) * 10) / 10;
			// Change TPS
			tpsAmt.innerText = Math.round((parseFloat(tpsAmt.innerText) + parseFloat(dictTPS[item])) * 10) / 10;
		}
	}
	
	function id(e){
		return(document.getElementById(e))
	}
	
})();