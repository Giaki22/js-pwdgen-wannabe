const uName = prompt("Inserisci il tuo nome"); 
const uSurname = prompt("Inserisci il tuo cognome"); 
const uFavCol = prompt("Inserisci il colore preferito");
const uPassword = `${uName}${uSurname}${uFavCol}21`;

document.getElementById("pass").innerHTML = `Hello ${uName}! Your new Password is: ${uPassword}. Don't share it!`