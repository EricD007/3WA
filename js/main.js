// Déclaration de variables
let computer
let player
let random

//première étape: demander à l'utilisateur de choisir pierre, feuille ou ciseau

// Il ne doit pouvoir choisir pierre feuille ciseau
do {
    player = prompt("Que choisissez-vous : pierre feuille ou ciseau").toLowerCase()
    if(player === "pierre" || player === "ciseau" || player === "feuille")
    {
        break;
    }
}
while(player !== "pierre" || player !== "ciseau" || player !== "feuille")



    // ecrire dans le html le choix du joueur
    document.write("<p>Votre choix est : <strong>" + player + '</strong></p>')

//deuxième étape choisir un des 3 pour l'ordinateur (avec Math.random() et une condition)
random = Math.random()  // interval de 0 à  0.99

    // Récupération d'un nombre aléatoire (random) entre 0 inclu et 1 exclu.

    // Entre 0.00 et ~0.33 : l'ordinateur sélectionne la pierre
    if (random < 1/3)
    {
        computer = 'pierre'
    }
    // Entre ~0.33 et ~0.66 : l'ordinateur sélectionne la feuille
    else if(random < 2/3)
    {
        computer = 'feuille'
    }
    // Au-delà de ~0.66 : l'ordinateur sélectionne le ciseau
    else
    {
      computer = 'ciseau'  
    }
    
    // ecrire dans le html le choix de l'IA (ordinateur)
    document.write("<p>Le choix de l'ordinateur est : <strong>" + computer + '</strong></p>')

//troisième étape: si l'ordi et l'utilisateur on choisit la même chose on balance une phrase d'égalité sinon gère le combat avec une condition

    // Si égalité, on écrit dans le html
    if( player === computer)
    {
        document.write('<p>EGALITE</p>')
    }
    // Sinon Le joueur et l'ordinateur n'ont pas choisi la même chose, la bataille commence !
    else
    {
        /* Switch avec tout les cas de figure */
        switch(computer) 
        {
            case 'ciseau':
                if(player === 'pierre')
                {
                    document.write('<p>La pierre écrase le ciseau : vous gagnez !</p>')
                }
                else    // feuille
                {
                    document.write('<p>La feuille est découpée par le ciseau : vous perdez !</p>')
                }
            break;
            
            case 'feuille':
                if(player == 'pierre') {
                    document.write('<p>La pierre est enveloppée par la feuille : vous perdez !</p>')
                }
                else 
                { // 'ciseau'
                    document.write('<p>Le ciseau découpe la feuille : vous gagnez !</p>')
                }
            break;  
            
            case 'pierre':
                if(player === 'feuille')
                {
                    document.write('<p>La feuille enveloppe la pierre : vous gagnez !</p>')
                }
                else
                {
                    document.write('<p>Le ciseau est écrasé par la pierre : vous perdez !</p>')
                }
                
            break;   
        }
    }
  