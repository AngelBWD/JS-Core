function spaceshipCrafting(titanium, aluminium, magnesium, carbon, losses) { //! 
	// let titaniumCore = Number(document.querySelector("#titaniumCoreFound").value);
	// let aluminiumCore = Number(document.querySelector("#aluminiumCoreFound").value);
	// let magnesiumCore = Number(document.querySelector("#magnesiumCoreFound").value);
	// let carbonCore = Number(document.querySelector("#carbonCoreFound").value);
	// let lossesPercent = Number(document.querySelector("#lossesPercent").value);
	let titaniumCore = +titanium;
	let aluminiumCore = +aluminium;
	let magnesiumCore = +magnesium;
	let carbonCore = +carbon;
	let lossesPercent = +losses / 4;

	let titaniumCoreBar = Math.round((titaniumCore - (titaniumCore * (lossesPercent / 100))) / 25);
	let aluminiumCoreBar = Math.round((aluminiumCore - (aluminiumCore * (lossesPercent / 100))) / 50);
	let magnesiumCoreBar = Math.round((magnesiumCore - (magnesiumCore * (lossesPercent / 100))) / 75);
	let carbonCoreBar = Math.round((carbonCore - (carbonCore * (lossesPercent / 100))) / 100);
	console.log(titaniumCoreBar);
	console.log(aluminiumCoreBar);
	console.log(magnesiumCoreBar);
	console.log(carbonCoreBar);



	let theUndefinedShip = 0;
	let nullMaster = 0;
	let JSONCrew = 0;
	let falseFleet = 0;
	while (true) {
		if (titaniumCoreBar - 2 >= 0 && aluminiumCoreBar - 9 >= 0 && magnesiumCoreBar - 7 >= 0 && carbonCoreBar - 7 >= 0) {
			theUndefinedShip++;
			titaniumCoreBar -= 7;
			aluminiumCoreBar -= 9;
			magnesiumCoreBar -= 7;
			carbonCoreBar -= 7;
		}

		if (titaniumCoreBar - 5 >= 0 && aluminiumCoreBar - 7 >= 0 && magnesiumCoreBar - 7 >= 0 && carbonCoreBar - 5 >= 0) {
			nullMaster++;
			titaniumCoreBar -= 5;
			aluminiumCoreBar -= 7;
			magnesiumCoreBar -= 7;
			carbonCoreBar -= 5;
		}

		if (titaniumCoreBar - 3 >= 0 && aluminiumCoreBar - 5 >= 0 && magnesiumCoreBar - 5 >= 0 && carbonCoreBar - 2 >= 0) {
			JSONCrew++;
			titaniumCoreBar -= 3;
			aluminiumCoreBar -= 5;
			magnesiumCoreBar -= 5;
			carbonCoreBar -= 2;
		}

		if (titaniumCoreBar - 2 >= 0 && aluminiumCoreBar - 2 >= 0 && magnesiumCoreBar - 3 >= 0 && carbonCoreBar - 1 >= 0) {
			falseFleet++;
			titaniumCoreBar -= 2;
			aluminiumCoreBar -= 2;
			magnesiumCoreBar -= 3;
			carbonCoreBar -= 1;
		} else {
			break;
		}
	}


	console.log(theUndefinedShip);
	console.log(nullMaster);
	console.log(JSONCrew);
	console.log(falseFleet);

	console.log(titaniumCoreBar);
	console.log(aluminiumCoreBar);
	console.log(magnesiumCoreBar);
	console.log(carbonCoreBar);
	let result = '';
	if (theUndefinedShip!=0) {
		result +=`${theUndefinedShip} THE-UNDEFINED-SHIP, `
	}
	if (nullMaster!=0) {
		result +=`${nullMaster} NULL-MASTER, `
	}
	if (JSONCrew!=0) {
		result +=`${JSONCrew} JSON-CREW, `
	}
	if (falseFleet!=0) {
		result +=`${falseFleet} FALSE-FLEET `
	}
	console.log(result);
	




}
spaceshipCrafting(467.5, 1265, 1815, 1650, 40);