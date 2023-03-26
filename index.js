// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
const num = document.getElementById('myNum');
const trigger = document.getElementById('trigger');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

trigger.addEventListener('click', () => console.log(getQuersumme(num.value)));

function getQuersumme(num) {
  let sum = 0; //Anfangssumme auf Null deklarieren
  while (num > 0) {
    //So lange die Zahl noch größer als Null ist, teile durch 10, bis das nicht mehr der Fall ist
    let einer = num % 10;
    sum += einer; //Rechne die einzelnen Stellen zusammen
    num = (num - einer) / 10; //Springe zurück zur nächsten Stelle in der Zahl
  }
  return sum; //Gib die Summe aus
}
