/* aanroepen, begroeting opzoeken met query selector en de classname */
var begroeting = document.querySelector('.begroeting');

/* functie aanmaken */
function showBergoeting() {
    /* er zijn een aantal begroetingen in een array -> rij */
    var begroetingen = ['Goedenacht', 'Goedemorgen', 'Goedemiddag', 'Goedenavond'];
    /* new date is een javascript browser object die altijd de datum geeft 
     */
    var huidigeDatum = new Date();
    /* met deze methode haal ik de huidige uren opvragen */
    var huidigeTijd = huidigeDatum.getHours();
    /* Hier ga ik met een paar if, else if, else statements aangeven binnen welke waarde ze vallen  -> tussen 0 en 6 is het bv nacht*/
    if (huidigeTijd >= 0 && huidigeTijd <= 6) {
        begroeting.innerHTML = begroetingen[0];
        begroeting.classList.add('paars');
    } else if (huidigeTijd >= 6 && huidigeTijd <= 12) {
        begroeting.innerHTML = begroetingen[1];
        begroeting.classList.add('geel');
    } else if (huidigeTijd >= 12 && huidigeTijd <= 18) {
        begroeting.innerHTML = begroetingen[2];
        begroeting.classList.add('blauw');
    } else {
        begroeting.innerHTML = begroetingen[3];
        begroeting.classList.add('rood');
    }
}

/* het uitvoeren van de functie, zonder deze zin voert de pagina de functie niet uit. Dus deze moet aangeroepen worden in de aller laatste zin */
showBergoeting()
