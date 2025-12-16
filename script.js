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
        let ADvantages = document.getElementById("avantages");
        // produits
        let Activities = document.getElementById("events");
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
            // title
            const insertH1 = document.createElement("h1");
            insertH1.textContent = data.nomCommercial;
            // paragraphe
            const insertp = document.createElement("p");
            insertp.textContent = data.phraseAccroche;
            // div pour les button
            const divButtons = document.createElement("div");
            // button buy
            const buyButton = document.createElement("a");
            buyButton.textContent = data.texteAppelAction;
            // button explore
            const exploreButton = document.createElement("a");
            exploreButton.textContent = "Explorer";
            // Etape 5: On inject les element using appendchild
            divButtons.appendChild(buyButton);
            divButtons.appendChild(exploreButton);

            newDiv.appendChild(insertH1);
            newDiv.appendChild(insertp);
            newDiv.appendChild(divButtons);
            // Etape 6: On l'affiche sur site
            Header.appendChild(newDiv);
            Header.appendChild(divButtons);

            // Partie Avantages
            //  Etape 7:Créé le partie avantages

            //  Créé un container 
            const containerAvantages = document.createElement("div");
            // Add a class
            containerAvantages.classList.add("container-avantages");

            // div pour le strong, h2, p
            const divtexts = document.createElement("div");
            let strongtext = document.createElement("strong");
            strongtext.textContent = "Pourquoi";

            let avantagesTitle = document.createElement("h2");
            avantagesTitle.textContent = "Ce qui nous définit";

            let advantagesParagraph = document.createElement("p");
            advantagesParagraph.textContent = "Qualité sans égale dans chaque détail";
            
            divtexts.appendChild(strongtext);
            divtexts.appendChild(avantagesTitle);
            divtexts.appendChild(advantagesParagraph);
            containerAvantages.appendChild(divtexts);

            // Un div pour les cartes
            const cardDiv = document.createElement("div");
            cardDiv.classList.add("container-cards");

            // Loop pour les cartes

            data.avantagesClients.forEach(element => {
                let cards = document.createElement("div"); 
                cards.textContent = element;
                cardDiv.appendChild(cards);

            });
            // Affichier le
            ADvantages.appendChild(containerAvantages);
            ADvantages.appendChild(cardDiv);


            // Etape 8: Créé le partie Events (Activité)
            const pourEvents = document.createElement("div");
            pourEvents.classList.add("card-container");
            // Use for each pour les event cards
            data.activites.forEach(elementDeux => {
                // créé un variable pour event titre
                let nomActivite = document.createElement("h4");
                nomActivite.textContent = elementDeux.nom;
                // description
                let descActivite = document.createElement("p");
                descActivite.textContent = elementDeux.description;
                // images
                let images = document.createElement("img");
                images.classList.add("eventImages")
                images.src = elementDeux["image-url"];
                // Affichier
                pourEvents.appendChild(images);
                pourEvents.appendChild(nomActivite);
                pourEvents.appendChild(descActivite);
                
            });
            Activities.appendChild(pourEvents);
            // test
            console.log(Activities);

            // Etape 9: Créé le partie Témoinage (Avis)
            const pourAvis = document.createElement("div")
            pourAvis.classList.add("reviews-container")

            data.temoignages.forEach(elementTrois => {
                // prénom
                let names = document.createElement("h4");
                names.textContent = elementTrois.prenom;
                // Experience
                let experiences = document.createElement("p");
                experiences.textContent = elementTrois.typeExperience;
                // Avis
                let comment = document.createElement("p");
                comment.textContent = elementTrois.commentaire;
                // Grade
                let review = document.createElement("span")
                review.textContent = "Review: " + elementTrois.note + "/5";

                // Affiche
                pourAvis.appendChild(names);
                pourAvis.appendChild(experiences);
                pourAvis.appendChild(comment);
                pourAvis.appendChild(review);
            });
            Avis.appendChild(pourAvis);

        

    })

