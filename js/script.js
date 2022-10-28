//zadatak 1
var ime = "Kristina"
function zadatak_1(){
	console.log("Ja se zove " + ime)
}

//zadatak 2
var frstAndlast = "Kristina Vignjević"
function zadatak_2(){
	console.log("Ja sam " + frstAndlast)
}

//zadatak 3
var broj_1 = 35
var broj_2 = 40
function zadatak_zbir(){
	console.log(broj_1 + broj_2)
}

function zadatak_raz(){
	console.log(broj_1 - broj_2)
}

function zadatak_mnoz(){
	console.log(broj_1 * broj_2)
}

function zadatak_dje(){
	console.log(broj_1 / broj_2)
}

function zadatak_ost(){
	if(broj_1 % 2 == 0 && broj_2 % 2 == 0){console.log("Oba broja djeljiva sa 2")}
  else if(broj_1 % 2 == 0){console.log("Prvi broj je djeljiv sa 2")}
  else if(broj_2 % 2 == 0){console.log("Drugi broj je djeljiv sa 2")}
  else {console.log("GREŠKA")}
}

//zadata 5
var name = "Kristina"
var lastName = "Vignjević"
function zadatak_5(){
	console.log("Ja sam " + name + " " + lastName)
}

//zadatak 6
var daniUsedmici = 5
function zadatak_6(){
  if(daniUsedmici == 1){console.log("Ponedeljak")}
  else if(daniUsedmici == 2){console.log("Utorak")}
  else if(daniUsedmici == 3){console.log("Srijeda")}
  else if(daniUsedmici == 4){console.log("Četvrtak")}
  else if(daniUsedmici == 5){console.log("Petak")}
  else if(daniUsedmici == 6){console.log("Subota")}
  else if(daniUsedmici == 7){console.log("Nedelja")}
	else{console.log("GREŠKA")}
}

//zadatak 7
var par = 23
function zadatak_7(){
	if(par % 2 == 0){console.log("Broj " + par + " je djeljiv sa 2")}
  else{console.log("Broj " + par + " nije djeljiv sa 2")}
}

//zadatak 8 
var broj_3 = 3
function zadatak_8(){
	if(broj_3 % 3 == 0 && broj_3 % 5 == 0){
  	console.log("Fizz Buzz")
  }
  else if(broj_3 % 3 == 0){
  	console.log("Fizz")
  }
  else if(broj_3 % 5 == 0){
  	console.log("Buzz")
  }
  else{
  	console.log("Broj nije djeljiv ni sa 3 ni sa 5")
  }
}
//9. zadatak
var vrijednost = 86405 //24 sata ima 86400 sekundi

function zadatak_9() {
/*dijelim zadanu vrijednost sa sekundama u jednom danu tj 86400 da vidim koliko imam dana*/
var dani = Math.floor(vrijednost / 86400)
console.log("Imamo " + dani + " dan")

/*računam ostatak iz zadane vrijednosti sa 86400 sekundi, pa dobijeni rezultat dijelim sa 3600 tj sa sekundama u 1 satu da vidim koliko imam sati*/
var sati = Math.floor((vrijednost % 86400) / 3600)
console.log("Imamo " + sati + " sati")

//*računam ostatak iz zadane vrijednost sa 3600 sekundama u jednom satu, pa dijelim sa 60 tj sa minutama u 1 satu da vidim koliko imam minuta*/
var minute = Math.floor((vrijednost % 3600) / 60)
console.log("Imamo " + minute + " minuta")

//računam ostatak iz zadane vrijednosti sa 60 jer toliko imamo sekundi u 1 minuti da vidim koliko imam sekundi
var sekunde = Math.floor(vrijednost % 60)
console.log("Imamo " + sekunde + " sekundi")
}
