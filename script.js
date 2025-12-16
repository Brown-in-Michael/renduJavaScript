// Etape 1: Recupéré fichier JSON
// par declaré comme une variable
const JSON_LINK = "https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/escape-game.json";
// Etape 2: Récupérer les données de dans
// utilise fetch


fetch(JSON_LINK)
    .then(response => response.json())
    .then(data => {
        // Etape 3: Liste nos element HTML
        // By creating variables
        // head
        let Header = document.getElementById("head");
        // avantages
        let ADvantages = document.getElementById("adventages");
        // produits
        let Products = document.getElementById("products");
        // services
        let Services = document.getElementById("services");
        // Témoinages
        let Avis = document.getElementById("witness");
        //Etape 4: Affiche le succes de récuperation 
        console.log("Données récupérer avec succées",data);
        // Etape 5: Div avec une H1, p, et 2 button dans le header
            // Pour le div
            const newDiv = document.createElement("div");
            // Nos element dans le div
            const insertH1 = document.createElement("h1");
            insertH1.textContent = dat
            const insertp = document.createElement("p");
            // div pour les button
            const divButtons = document.createElement("div");
            // button buy
            const buybutton = document.createElement("a");
            // button explore
            const explorebutton = document.createElement("a");
            // Etape 5: On inject les element using appendchild
            divButtons.appendChild(buybutton);
            divButtons.appendChild(explorebutton);

            newDiv.appendChild(insertH1);
            newDiv.appendChild(insertp);
            newDiv.appendChild(divButtons);
            // Etape 6: On l'affiche sur site
            Header.appendChild(newDiv);
            Header.appendChild(divButtons);


        
        
    })

