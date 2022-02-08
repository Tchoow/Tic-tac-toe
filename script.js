// ❌, ⭕

// Variables
var cases         = document.querySelectorAll(".case");
var tour          = true;
var isWin         = false;
var joueur1Elem   = '❌';
var joueur2Elem   = '⭕';
var txtInfo       = document.querySelector("#info");
txtInfo.innerHTML = "Tour du joueur : 1";

function revealCase(c) {   
    if (c.innerHTML == "" && ! isWin)
    {
        if(tour) c.innerHTML = joueur1Elem;
        else c.innerHTML     = joueur2Elem;
      
        tour = !tour;

        if (tour) txtInfo.innerHTML = "Tour du joueur : 1";
        else      txtInfo.innerHTML = "Tour du joueur : 2";
        checkWin();
    }
}

function checkWin()
{
    isWin = false;
    // Detect win
    //ligne
    if (cases[0].innerHTML == cases[1].innerHTML &&
        cases[1].innerHTML == cases[2].innerHTML &&
        cases[2].innerHTML != "" )
        isWin = true;

    //ligne
    if (cases[3].innerHTML == cases[4].innerHTML &&
        cases[4].innerHTML == cases[5].innerHTML &&
        cases[5].innerHTML != "" )
        isWin = true;

    //ligne
    if (cases[6].innerHTML == cases[7].innerHTML &&
        cases[7].innerHTML == cases[8].innerHTML &&
        cases[8].innerHTML != "" )
        isWin = true;


    // Col
    if (cases[0].innerHTML == cases[3].innerHTML &&
        cases[3].innerHTML == cases[6].innerHTML &&
        cases[6].innerHTML != "" )
        isWin = true;

    // Col
    if (cases[1].innerHTML == cases[4].innerHTML &&
        cases[4].innerHTML == cases[7].innerHTML &&
        cases[7].innerHTML != "" )
        isWin = true;

    // Col
    if (cases[2].innerHTML == cases[5].innerHTML &&
        cases[5].innerHTML == cases[8].innerHTML &&
        cases[8].innerHTML != "" )
        isWin = true;

    // diag
    if (cases[0].innerHTML == cases[4].innerHTML &&
        cases[4].innerHTML == cases[8].innerHTML &&
        cases[8].innerHTML != "" )
        isWin = true;

    // diag
    if (cases[2].innerHTML == cases[4].innerHTML &&
        cases[4].innerHTML == cases[6].innerHTML &&
        cases[6].innerHTML != "" )
        isWin = true;

    // diag
    if (isWin)
    {
        if (!tour) txtInfo.innerHTML     = "Victoire du joueur 1";
        else      txtInfo.innerHTML      = "Victoire du joueur 2";
    }

}

// Events
for ( const c of cases) {
    c.addEventListener('click', event => {
        revealCase(c);
    })
}

// Reset
function reset() {
    tour     = true;
    isWin    = false;
    for(var cpt  = 0; cpt < 9; cpt++) cases[cpt].innerHTML = "";
    txtInfo.innerHTML = "Tour du joueur : 1";
}

// Button Reset
document.querySelector("#reset").addEventListener('click', event => { reset(); })

